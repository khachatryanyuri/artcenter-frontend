import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FormHelperText, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

import LinkNavigate from '@lib/components/common/components/LinkNavigate';
import { authFormStyles } from '@lib/components/authForm/styles/authFormStyles';
import { AuthFormProps, TextsEnum } from '@lib/services/interface/authForm/authForm';
import { PAGE_TEXT } from '@lib/components/authForm/constants/authFormConstants';
import Snackbars from '@lib/components/common/components/Snackbars';
import { MuiTelInput } from 'mui-tel-input';
import { InputTypeEnum } from '@lib/services/interface/inputForms/inputForms';
const { password } = TextsEnum;

const {
  boxStyles: { boxGlobal, boxField, boxLink, fieldBox },
  formHelperTextStyles,
  linkStyle,
  linkStyleSignUp,
} = authFormStyles;

const { GOOGLE_ACOUNT, FACEBOOK_ACOUNT } = PAGE_TEXT;
const { PhoneNumberEnum } = InputTypeEnum;

const AuthFormInputs: React.FC<AuthFormProps> = ({
  formFields,
  handleSubmit,
  buttonText,
  linkText,
  linkPage,
  linkNavigate,
  forgetLink,
  forgetLinkPage,
  snackbar,
  errors,
  inputsData,
  setInputsData,
}) => {
  const handleClickLoginGoogle = async () => {
    window.open(`${process.env.NEXT_PUBLIC_API_URL}/user/google`, '_self');
  };

  const handleClickLoginFacebook = () => {
    window.open(`${process.env.NEXT_PUBLIC_API_URL}/user/facebook`, '_self');
  };

  const handleChangeInputData = (key: string, value: string) => {
    setInputsData &&
      setInputsData((prev: any) => ({
        ...prev,
        [key]: value,
      }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} {...boxGlobal}>
      {formFields.map((field) => (
        <Box key={field.name} {...boxField}>
          {field.label && (
            <Box {...fieldBox}>
              <Typography variant="h5">{field.label}</Typography>
              {forgetLink && field.label === password && forgetLinkPage && (
                <Box {...boxLink}>
                  <LinkNavigate text={forgetLink} navigatePage={forgetLinkPage} styles={linkStyle} />
                </Box>
              )}
            </Box>
          )}
          {field.name === PhoneNumberEnum ? (
            <MuiTelInput
              error={errors && Boolean(errors[field.name])}
              fullWidth
              name={field.name}
              defaultCountry="AM"
              onChange={(data) => handleChangeInputData(field.name, data)}
              value={inputsData && inputsData[field.name]}
            />
          ) : (
            <TextField error={errors && Boolean(errors[field.name])} fullWidth name={field.name} type={field.type} />
          )}

          {errors && errors[field.name] && (
            <FormHelperText {...formHelperTextStyles}>{errors[field.name]}</FormHelperText>
          )}
        </Box>
      ))}

      <Button type="submit" fullWidth variant="contained">
        {buttonText}
      </Button>
      {/* {forgetLink && (
        <>
          <Button variant="outlined" onClick={handleClickLoginGoogle} startIcon={<GoogleIcon />}>
            {GOOGLE_ACOUNT}
          </Button>
          <Button variant="outlined" onClick={handleClickLoginFacebook} startIcon={<FacebookIcon />}>
            {FACEBOOK_ACOUNT}
          </Button>
        </>
      )} */}
      <Box {...boxLink}>
        <Typography variant="h6">{linkText}</Typography>
        <LinkNavigate text={linkNavigate} navigatePage={linkPage} styles={linkStyleSignUp} />
      </Box>
      {snackbar?.show && <Snackbars text={snackbar.text} statusCode={snackbar.statusCode} />}
    </Box>
  );
};

export default AuthFormInputs;
