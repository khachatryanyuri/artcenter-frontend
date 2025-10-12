import { Box, Typography, TextField, Button, FormHelperText } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { constants } from '@lib/components/contactUs/constants/constants';
import { contactUsStyles } from '@lib/components/contactUs/styles/contactUsStyles';
import Snackbars from '@lib/components/common/components/Snackbars';
import { useForm } from '@lib/components/contactUs/hooks/useForm';
import { useTranslation } from 'react-i18next';

const {
  boxStyles: { formMainBox, inputBox },
  textStyles: { errText, textfield, titleText },
  buttonStyle,
} = contactUsStyles;

const { FORMFIELDS, SENDBUTTONTEXT, PROBLEM_TEXT, HEADING } = constants;

export const Form = () => {
  const { formData, errors, snackbar, handleInputChange, handleSubmit } = useForm();
  const { t } = useTranslation();
  return (
    <Box component="form" onSubmit={handleSubmit} {...formMainBox}>
      <Typography variant="h3" {...titleText}>
        {t(HEADING)}
      </Typography>
      {FORMFIELDS.map((field) => (
        <Box key={field.name} {...inputBox}>
          {field.label && <Typography variant="h6">{t(field.label)}</Typography>}
          <TextField
            {...textfield}
            fullWidth
            error={errors[field.name]}
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={handleInputChange}
            multiline={field.multiline}
            rows={5}
          />
          {errors[field.name] && <FormHelperText {...errText}>{t(PROBLEM_TEXT)}</FormHelperText>}
        </Box>
      ))}
      <Box>
        <Button type="submit" endIcon={<ArrowForwardIcon />} {...buttonStyle}>
          {t(SENDBUTTONTEXT)}
        </Button>
      </Box>
      {snackbar.show && <Snackbars text={t(snackbar.text)} statusCode={snackbar.statusCode} />}
    </Box>
  );
};
