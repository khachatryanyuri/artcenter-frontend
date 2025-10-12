import { dataProvider } from '@lib/src/admin/providers/dataProvider';
import { Box, Button, TextField, Typography, Select, MenuItem, FormHelperText } from '@mui/material';
import { useRouter } from 'next/router';
import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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

const LessonRequestComponent = ({ lessonsData }: { lessonsData: any }) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  const initialFields = useMemo<Field[]>(
    () => [
      { required: true, name: 'count', value: 1, label: t('form.count.label'), error: '' },
      {
        required: true,
        name: 'persons',
        value: [
          {
            name: 'user1',
            value: { name: '', age: '' },
            label: t('form.persons.name.label', { index: 1 }),
            ageLabel: t('form.persons.age.label', { index: 1 }),
            error: { name: '', age: '' },
          },
        ],
        label: '',
        error: '',
      },
      { required: true, name: 'location', value: '', label: t('form.location.label'), error: '' },
      { required: true, name: 'email', value: '', label: t('form.email.label'), error: '' },
      { required: false, name: 'skype', value: '', label: t('form.skype.label'), error: '' },
      { required: false, name: 'whatsApp', value: '', label: t('form.whatsApp.label'), error: '' },
      { required: true, name: 'fieldOfStudy', value: '', label: t('form.fieldOfStudy.label'), error: '' },
      { required: true, name: 'skillLevel', value: '', label: t('form.skillLevel.label'), error: '' },
      { required: false, name: 'wishes', value: '', label: t('form.wishes.label'), error: '' },
    ],
    [t],
  );

  const mockSkillLevelOptions = useMemo(
    () => [
      { key: 'zero', label: t('form.skillLevel.options.zero') },
      { key: 'beginner', label: t('form.skillLevel.options.beginner') },
      { key: 'intermediate', label: t('form.skillLevel.options.intermediate') },
      { key: 'advanced', label: t('form.skillLevel.options.advanced') },
      { key: 'professional', label: t('form.skillLevel.options.professional') },
    ],
    [t],
  );

  const [data, setData] = useState<Field[]>([...initialFields]);

  useEffect(() => {
    setData((currentData) =>
      currentData.map((field) => {
        const newFieldData = initialFields.find((initField) => initField.name === field.name);
        if (!newFieldData) return field;

        if (field.name === 'persons') {
          const updatedPersons = field.value.map((person: Person, index: number) => ({
            ...person,
            label: t('form.persons.name.label', { index: index + 1 }),
            ageLabel: t('form.persons.age.label', { index: index + 1 }),
          }));
          return { ...field, value: updatedPersons };
        }

        return {
          ...field,
          label: newFieldData.label,
        };
      }),
    );
  }, [t]);

  useEffect(() => {
    if (!id || !lessonsData?.data?.length) return;

    setData((prevData) =>
      prevData.map((field) =>
        field.name === 'fieldOfStudy'
          ? { ...field, value: lessonsData.data.find((lesson: any) => lesson.id === id)?.id || '' }
          : field,
      ),
    );
  }, [id, lessonsData]);

  const validateFields = () => {
    let isValid = true;
    const updatedData = data.map((field) => {
      if (field.required && field.name !== 'persons' && !field.value) {
        isValid = false;
        return { ...field, error: t('form.errors.required') };
      }
      if (field.name === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        isValid = false;
        return { ...field, error: t('form.errors.invalidEmail') };
      }
      if (field.name === 'persons') {
        const updatedPersons = field.value.map((person: Person) => {
          const personErrors = {
            name: person.value.name ? '' : t('form.errors.nameRequired'),
            age: person.value.age ? '' : t('form.errors.ageRequired'),
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

  const handleSubmit = async () => {
    if (validateFields()) {
      try {
        const requestData = data.reduce((acc: any, field: any) => {
          const key = field.name === 'whatsApp' ? 'whatsapp' : field.name;

          if (key === 'persons' && Array.isArray(field.value)) {
            acc.persons = field.value.map((person: any) => ({
              name: person.value.name,

              age: Number(person.value.age),
            }));
          } else {
            acc[key] = field.value;
          }

          return acc;
        }, {});

        await dataProvider.create('courses-application-request', { data: requestData });
        router.push('/');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.log('Form contains errors');
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

                label: t('form.persons.name.label', { index: index + 1 }),

                ageLabel: t('form.persons.age.label', { index: index + 1 }),

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
      ? t('form.errors.nameRequired')
      : t('form.errors.ageRequired');

    setData((prevData) =>
      prevData.map((field) => (field.name === 'persons' ? { ...field, value: updatedPersons } : field)),
    );
  };
  return (
    <Box sx={{ minHeight: '60vh', p: 2 }}>
      <Box sx={{ margin: '64px auto', width: '100%', maxWidth: 1024 }}>
        <Typography variant="h3" sx={{ mb: '32px', color: '#C35F1C' }}>
          {t('form.title')}
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
                    placeholder={t('form.persons.name.placeholder')}
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
                    placeholder={t('form.persons.age.placeholder')}
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
                      {t('form.fieldOfStudy.placeholder')}
                    </MenuItem>
                    {lessonsData.data.map((option: any) => (
                      <MenuItem key={option?.id} value={option?.id}>
                        {option?.title?.[i18n.language] || option?.title?.['ru']}
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
                      {t('form.skillLevel.placeholder')}
                    </MenuItem>
                    {mockSkillLevelOptions.map((option) => (
                      <MenuItem key={option.key} value={option.label}>
                        {option.label}
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
                  placeholder={t('form.wishes.placeholder')}
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
          {t('form.submitButton')}
        </Button>
      </Box>
    </Box>
  );
};

export default LessonRequestComponent;
