import { dataProvider } from '@lib/src/admin/providers/dataProvider';
import { Box, Button, TextField, Typography, Select, MenuItem, FormHelperText } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

type Person = {
  name: string;
  value: { name: string; age: string };
  label: string;
  ageLabel: string;
  error: { name: string; age: string };
};

type Field = {
  required: boolean;
  name: string;
  value: any;
  label: string;
  error: string;
};

const initialFields: Field[] = [
  { required: true, name: 'count', value: 1, label: 'Укажите количество участников *', error: '' },
  {
    required: true,
    name: 'persons',
    value: [
      {
        name: 'user1',
        value: { name: '', age: '' },
        label: 'Имя, фамилия *',
        ageLabel: 'Возраст *',
        error: { name: '', age: '' },
      },
    ],
    label: '',
    error: '',
  },
  { required: true, name: 'location', value: '', label: 'Страна, город *', error: '' },
  { required: true, name: 'email', value: '', label: 'E-mail *', error: '' },
  { required: false, name: 'skype', value: '', label: 'Skype', error: '' },
  { required: false, name: 'whatsApp', value: '', label: 'WhatsApp', error: '' },
  { required: true, name: 'fieldOfStudy', value: '', label: 'Направление обучения *', error: '' },
  { required: true, name: 'skillLevel', value: '', label: 'Ваш уровень навыков по выбранному предмету *', error: '' },
  { required: false, name: 'wishes', value: '', label: 'Ваши пожелания', error: '' },
];

const mockSkillLevelOptions = ['нулевой', 'начальный', 'средний', 'продвинутый', 'профессиональный'];

const LessonRequestComponent = ({ lessonsData }: { lessonsData: any }) => {
  const [data, setData] = useState<Field[]>([...initialFields]);

  const validateFields = () => {
    let isValid = true;

    const updatedData = data.map((field) => {
      if (field.required && field.name !== 'persons' && !field.value) {
        isValid = false;
        return { ...field, error: 'Поле не может быть пустым' };
      }

      if (field.name === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        isValid = false;
        return { ...field, error: 'Неверный формат электронной почты' };
      }

      if (field.name === 'persons') {
        const updatedPersons = field.value.map((person: Person) => {
          const personErrors = {
            name: person.value.name ? '' : 'Имя не может быть пустым',
            age: person.value.age ? '' : 'Возраст не может быть пустым',
          };

          if (!person.value.name || !person.value.age) {
            isValid = false;
          }

          return { ...person, error: personErrors };
        });
        return { ...field, value: updatedPersons };
      }

      return { ...field, error: '' };
    });

    setData(updatedData);
    return isValid;
  };
  const router = useRouter();

  const handleSubmit = async () => {
    if (validateFields()) {
      console.log('Форма успешно отправлена:', data);

      try {
        const requestData = data.reduce((acc: any, field: any) => {
          const key = field.name === 'whatsApp' ? 'whatsapp' : field.name;

          if (key === 'persons' && Array.isArray(field.value)) {
            acc.persons = field.value.map((person: any, i: number) => {
              console.log(person);

              const { name, age } = person.value;

              return { name, age: Number(age) };
            });
          } else {
            acc[key] = field.value;
          }

          return acc;
        }, {});

        console.log('Request data:', requestData);

        // Send the request if needed
        const res = await dataProvider.create('courses-application-request', { data: requestData });
        console.log(res, '=');

        // const queryParams = new URLSearchParams({ message: SUCCESS_MESSAGE }).toString();
        // router.push(`/success-message?${queryParams}`);
      } catch (error) {
        console.log('error', '400');
      }
    } else {
      console.log('Форма содержит ошибки');
    }
  };

  const handleFieldChange = (fieldName: string, value: any) => {
    setData((prevData) => prevData.map((field) => (field.name === fieldName ? { ...field, value, error: '' } : field)));
  };

  const handleCountChange = (value: number) => {
    setData((prevData) =>
      prevData.map((field) =>
        field.name === 'count'
          ? { ...field, value, error: '' }
          : field.name === 'persons'
          ? {
              ...field,
              value: Array.from({ length: value }, (_, index) => ({
                name: `user${index + 1}`,
                value: { name: '', age: '' },
                label: `Имя, фамилия ${index + 1} *`,
                ageLabel: `Возраст ${index + 1} *`,
                error: { name: '', age: '' },
              })),
            }
          : field,
      ),
    );
  };

  const handlePersonChange = (personIndex: number, key: 'name' | 'age', value: string) => {
    const personsField = data.find((field) => field.name === 'persons');
    if (!personsField) return;

    const updatedPersons = [...personsField.value];
    updatedPersons[personIndex].value[key] = value;
    updatedPersons[personIndex].error[key] = value
      ? ''
      : key === 'name'
      ? 'Имя не может быть пустым'
      : 'Возраст не может быть пустым';

    setData((prevData) =>
      prevData.map((field) => (field.name === 'persons' ? { ...field, value: updatedPersons } : field)),
    );
  };

  return (
    <Box sx={{ minHeight: '60vh', p: 2 }}>
      <Box sx={{ margin: '64px auto', width: '100%', maxWidth: 1024 }}>
        <Typography variant="h3" sx={{ mb: '32px', color: '#C35F1C' }}>
          Заявка на онлайн уроки
        </Typography>

        {data.map((field, index) =>
          field.name === 'persons' ? (
            <Box key={index}>
              {field.value.map((person: Person, personIndex: number) => (
                <Box key={personIndex} sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {person.label}
                  </Typography>
                  <TextField
                    fullWidth
                    sx={{ mb: 2 }}
                    value={person.value.name}
                    onChange={(e) => handlePersonChange(personIndex, 'name', e.target.value)}
                    placeholder="Введите имя"
                    error={!!person.error.name}
                    helperText={person.error.name}
                  />
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {person.ageLabel}
                  </Typography>
                  <TextField
                    fullWidth
                    value={person.value.age}
                    type="number"
                    onChange={(e) => handlePersonChange(personIndex, 'age', e.target.value)}
                    placeholder="Введите возраст"
                    error={!!person.error.age}
                    helperText={person.error.age}
                  />
                </Box>
              ))}
            </Box>
          ) : (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {field.label}
              </Typography>

              {field.name === 'count' ? (
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {[1, 2, 3].map((count) => (
                    <Button
                      key={count}
                      variant="outlined"
                      onClick={() => handleCountChange(count)}
                      sx={{
                        minWidth: 48,
                        backgroundColor:
                          data.find((f) => f.name === 'count')?.value === count ? 'black' : 'transparent',
                        color: data.find((f) => f.name === 'count')?.value === count ? 'white' : 'inherit',
                      }}
                    >
                      {count}
                    </Button>
                  ))}
                </Box>
              ) : field.name === 'fieldOfStudy' ? (
                <>
                  <Select
                    fullWidth
                    value={field.value}
                    onChange={(e) => handleFieldChange('fieldOfStudy', e.target.value)}
                    displayEmpty
                    error={!!field.error}
                  >
                    <MenuItem value="" disabled>
                      Выберите направление обучения
                    </MenuItem>
                    {lessonsData.data.map((option: any) => (
                      <MenuItem key={option?.id} value={option?.id}>
                        {option?.title?.ru}
                      </MenuItem>
                    ))}
                  </Select>
                  {field.error && <FormHelperText error>{field.error}</FormHelperText>}
                </>
              ) : field.name === 'skillLevel' ? (
                <>
                  <Select
                    fullWidth
                    value={field.value}
                    onChange={(e) => handleFieldChange('skillLevel', e.target.value)}
                    displayEmpty
                    error={!!field.error}
                  >
                    <MenuItem value="" disabled>
                      Выберите уровень навыков
                    </MenuItem>
                    {mockSkillLevelOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  {field.error && <FormHelperText error>{field.error}</FormHelperText>}
                </>
              ) : field.name === 'wishes' ? (
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  value={field.value}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  placeholder="Введите ваши пожелания"
                  error={!!field.error}
                  helperText={field.error}
                />
              ) : (
                <TextField
                  fullWidth
                  value={field.value}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  error={!!field.error}
                  helperText={field.error}
                />
              )}
            </Box>
          ),
        )}

        <Button variant="contained" fullWidth onClick={handleSubmit} sx={{ mt: 4 }}>
          Отправить
        </Button>
      </Box>
    </Box>
  );
};

export default LessonRequestComponent;
