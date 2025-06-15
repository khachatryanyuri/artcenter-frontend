import { Box, Button, TextField, Typography, Select, MenuItem, FormHelperText } from '@mui/material';
import { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const fields = [
  { required: true, name: 'fieldOfServices', value: '', label: 'Выберите услуги *', error: '' },
  { required: true, name: 'wishes', value: '', label: 'Подробное описание заказа', error: '' },
  { required: true, name: 'deadLine', value: '', label: 'Крайний срок выполнения заказа *', error: '' },
  { required: true, name: 'name', value: '', label: 'Ваше имя *', error: '' },
  { required: true, name: 'email', value: '', label: 'E-mail *', error: '' },
  { required: false, name: 'skype', value: '', label: 'Skype', error: '' },
  { required: false, name: 'whatsApp', value: '', label: 'WhatsApp', error: '' },
  { required: true, name: 'skillLevel', value: '', label: 'Ваш уровень навыков по выбранному предмету *', error: '' },
];

const ServicesComponent = ({ servicesData }: { servicesData: any }) => {
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

      return { ...field, error: '' };
    });

    setData(updatedData);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log('Форма успешно отправлена:', data);
      // TODO: handle submit logic (e.g., API call)
    } else {
      console.log('Форма содержит ошибки');
    }
  };

  const handleFieldChange = (fieldName: string, value: any) => {
    setData((prevData: any) =>
      prevData.map((field: any) => (field.name === fieldName ? { ...field, value, error: '' } : field)),
    );
  };

  const getFieldValue = (fieldName: string) => data.find((field: any) => field.name === fieldName)?.value || '';
  const getFieldError = (fieldName: string) => data.find((field: any) => field.name === fieldName)?.error || '';

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ minHeight: '60vh', p: 2 }}>
        <Box sx={{ margin: '64px auto', width: '100%', maxWidth: 1024 }}>
          <Typography variant="h3" sx={{ mb: '32px', color: '#C35F1C' }}>
            Заявка на заказ услуги
          </Typography>
          {data.map((field: any, index: number) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {field.label}
              </Typography>

              {field.name === 'fieldOfServices' ? (
                <>
                  <Select
                    fullWidth
                    value={getFieldValue('fieldOfServices')}
                    onChange={(e) => handleFieldChange('fieldOfServices', e.target.value)}
                    displayEmpty
                    error={!!getFieldError('fieldOfServices')}
                  >
                    <MenuItem value="" disabled>
                      Выберите направление обучения
                    </MenuItem>
                    {servicesData.data.map((option: any) => (
                      <MenuItem key={option?.id} value={option?.id}>
                        {option?.title?.ru}
                      </MenuItem>
                    ))}
                  </Select>
                  {getFieldError('fieldOfServices') && (
                    <FormHelperText error>{getFieldError('fieldOfServices')}</FormHelperText>
                  )}
                </>
              ) : field.name === 'deadLine' ? (
                <>
                  <DatePicker
                    sx={{ width: '100%' }}
                    label="Выберите дату"
                    value={getFieldValue('deadLine') ? dayjs(getFieldValue('deadLine')) : null}
                    onChange={(newValue) => handleFieldChange('deadLine', newValue ? newValue.toISOString() : '')}
                  />
                  {getFieldError('deadLine') && <FormHelperText error>{getFieldError('deadLine')}</FormHelperText>}
                </>
              ) : field.name === 'wishes' ? (
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  value={getFieldValue('wishes')}
                  onChange={(e) => handleFieldChange('wishes', e.target.value)}
                  placeholder="Введите ваши пожелания"
                  error={!!getFieldError('wishes')}
                  helperText={getFieldError('wishes')}
                />
              ) : (
                <TextField
                  fullWidth
                  value={getFieldValue(field.name)}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  error={!!getFieldError(field.name)}
                  helperText={getFieldError(field.name)}
                />
              )}
            </Box>
          ))}
          <Button variant="contained" fullWidth onClick={handleSubmit} sx={{ mt: 4 }}>
            Отправить
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default ServicesComponent;
