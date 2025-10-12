import { Box, Button, TextField, Typography, Select, MenuItem, FormHelperText } from '@mui/material';
import { useState, useMemo, useEffect } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { dataProvider } from '@lib/src/admin/providers/dataProvider';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

type Field = {
  required: boolean;
  name: string;
  value: any;
  label: string;
  error: string;
};

const ServicesComponent = ({ servicesData }: { servicesData: any }) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  const initialFields = useMemo<Field[]>(
    () => [
      { required: true, name: 'fieldOfServices', value: '', label: t('servicesForm.fieldOfServices.label'), error: '' },
      { required: true, name: 'wishes', value: '', label: t('servicesForm.wishes.label'), error: '' },
      { required: true, name: 'deadLine', value: '', label: t('servicesForm.deadLine.label'), error: '' },
      { required: true, name: 'name', value: '', label: t('servicesForm.name.label'), error: '' },
      { required: true, name: 'email', value: '', label: t('servicesForm.email.label'), error: '' },
      { required: false, name: 'skype', value: '', label: t('servicesForm.skype.label'), error: '' },
      { required: false, name: 'whatsApp', value: '', label: t('servicesForm.whatsApp.label'), error: '' },
      { required: false, name: 'telegram', value: '', label: t('servicesForm.telegram.label'), error: '' },
    ],
    [t],
  );

  const [data, setData] = useState<Field[]>([...initialFields]);

  useEffect(() => {
    setData((currentData) =>
      currentData.map((field) => {
        const newFieldData = initialFields.find((initField) => initField.name === field.name);
        return {
          ...field,
          label: newFieldData ? newFieldData.label : field.label,
        };
      }),
    );
  }, [t, initialFields]);

  useEffect(() => {
    if (!id || !servicesData?.data?.length) return;

    setData((prevData) =>
      prevData.map((field) =>
        field.name === 'fieldOfServices'
          ? { ...field, value: servicesData.data.find((lesson: any) => lesson.id === id)?.id || '' }
          : field,
      ),
    );
  }, [id, servicesData]);

  const validateFields = () => {
    let isValid = true;
    const updatedData = data.map((field) => {
      if (field.required && !field.value) {
        isValid = false;
        return { ...field, error: t('servicesForm.errors.required') };
      }
      if (field.name === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        isValid = false;
        return { ...field, error: t('servicesForm.errors.invalidEmail') };
      }
      return { ...field, error: '' };
    });
    setData(updatedData);
    return isValid;
  };

  const handleSubmit = async () => {
    if (validateFields()) {
      try {
        const requestData: any = {};
        data.forEach(({ name, value }) => {
          const keyMap: { [key: string]: string } = {
            fieldOfServices: 'fieldOfService',
            deadLine: 'deadline',
            whatsApp: 'whatsapp',
          };
          const finalKey = keyMap[name] || name;
          requestData[finalKey] = name === 'deadLine' ? (value ? new Date(value) : null) : value;
        });

        await dataProvider.create('services-application-request', { data: requestData });
        router.push('/');
        // Handle success logic
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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ minHeight: '60vh', p: 2 }}>
        <Box sx={{ margin: '64px auto', width: '100%', maxWidth: 1024 }}>
          <Typography variant="h3" sx={{ mb: '32px', color: '#C35F1C' }}>
            {t('servicesForm.title')}
          </Typography>

          {data.map((field, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {field.label}
              </Typography>

              {field.name === 'fieldOfServices' ? (
                <>
                  <Select
                    fullWidth
                    value={field.value}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    displayEmpty
                    error={!!field.error}
                  >
                    <MenuItem value="" disabled>
                      {t('servicesForm.fieldOfServices.placeholder')}
                    </MenuItem>
                    {servicesData.data.map((option: any) => (
                      <MenuItem key={option?.id} value={option?.id}>
                        {option?.title?.[i18n.language] || option?.title?.['ru']}
                      </MenuItem>
                    ))}
                  </Select>
                  {field.error && <FormHelperText error>{field.error}</FormHelperText>}
                </>
              ) : field.name === 'deadLine' ? (
                <>
                  <DatePicker
                    sx={{ width: '100%' }}
                    label={t('servicesForm.deadLine.placeholder')}
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(newValue) => handleFieldChange(field.name, newValue ? newValue.toISOString() : '')}
                    slotProps={{
                      textField: {
                        error: !!field.error,
                        helperText: field.error,
                      },
                    }}
                  />
                </>
              ) : field.name === 'wishes' ? (
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  value={field.value}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  placeholder={t('servicesForm.wishes.placeholder')}
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
          ))}
          <Button variant="contained" fullWidth onClick={handleSubmit} sx={{ mt: 4 }}>
            {t('servicesForm.submitButton')}
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default ServicesComponent;
