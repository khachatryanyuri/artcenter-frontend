import { Box, Button, TextField, Typography, Select, MenuItem } from '@mui/material';
import { useState } from 'react';

const fields = [
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

const mockFieldOfStudyOptions = ['Math', 'Science', 'Art', 'Music'];
const mockSkillLevelOptions = ['Beginner', 'Intermediate', 'Advanced'];

const LessonRequestComponent = () => {
  const [data, setData] = useState<any>([...fields]);

  const validateFields = () => {
    let isValid = true;

    const updatedData = data.map((field: any) => {
      if (field.required && !field.value) {
        isValid = false;
        return { ...field, error: 'Поле не может быть пустым' };
      }

      if (field.name === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        isValid = false;
        return { ...field, error: 'Неверный формат электронной почты' };
      }

      if (field.name === 'persons') {
        const updatedPersons = field.value.map((person: any) => {
          const personErrors = {
            name: person.value.name ? '' : 'Ошибка: имя не может быть пустым',
            age: person.value.age ? '' : 'Ошибка: возраст не может быть пустым',
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

  const handleSubmit = () => {
    if (validateFields()) {
      console.log('Форма успешно отправлена:', data);
    } else {
      console.log('Форма содержит ошибки');
    }
  };

  const handleFieldChange = (fieldName: string, value: any, error: string = '') => {
    setData((prevData: any) =>
      prevData.map((field: any) => (field.name === fieldName ? { ...field, value, error } : field)),
    );
  };

  const handleCountChange = (value: number) => {
    setData((prevData: any) =>
      prevData.map((field: any) =>
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
              error: '',
            }
          : field,
      ),
    );
  };

  return (
    <Box sx={{ minHeight: '60vh', p: 2 }}>
      <Box sx={{ margin: '64px auto', width: '100%', maxWidth: 600 }}>
        {data.map((field: any, index: number) =>
          field.name === 'persons' ? (
            <Box key={index}>
              {field.value.map((person: any, personIndex: number) => (
                <Box key={personIndex} sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {person.label}
                  </Typography>
                  <TextField
                    fullWidth
                    sx={{ mb: 2 }}
                    value={person.value.name}
                    onChange={(e) => {
                      const updatedPersons = [...field.value];
                      updatedPersons[personIndex].value.name = e.target.value;
                      updatedPersons[personIndex].error.name = e.target.value ? '' : 'Ошибка: имя не может быть пустым';
                      setData((prevData: any) =>
                        prevData.map((f: any) => (f.name === 'persons' ? { ...f, value: updatedPersons } : f)),
                      );
                    }}
                    placeholder="Введите имя"
                    error={!!person.error?.name}
                    helperText={person.error?.name}
                  />
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {person.ageLabel}
                  </Typography>
                  <TextField
                    fullWidth
                    value={person.value.age}
                    type="number"
                    onChange={(e) => {
                      const updatedPersons = [...field.value];
                      updatedPersons[personIndex].value.age = e.target.value;
                      updatedPersons[personIndex].error.age = e.target.value
                        ? ''
                        : 'Ошибка: возраст не может быть пустым';
                      setData((prevData: any) =>
                        prevData.map((f: any) => (f.name === 'persons' ? { ...f, value: updatedPersons } : f)),
                      );
                    }}
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
                          data.find((field: any) => field.name === 'count')?.value === count ? 'black' : 'transparent',
                        color: data.find((field: any) => field.name === 'count')?.value === count ? 'white' : 'inherit',
                      }}
                    >
                      {count}
                    </Button>
                  ))}
                </Box>
              ) : field.name === 'fieldOfStudy' ? (
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
                  {mockFieldOfStudyOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              ) : field.name === 'skillLevel' ? (
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
              ) : field.name === 'wishes' ? (
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  value={field.value}
                  onChange={(e) => handleFieldChange('wishes', e.target.value)}
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
