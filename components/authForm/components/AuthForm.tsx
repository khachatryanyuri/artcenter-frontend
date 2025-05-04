import * as React from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';

import signInImage from '@lib/public/authForm/SigninImageMax.png';
import signUpImage from '@lib/public/authForm/SignupImageMax.png';
import SigninImageMin from '@lib/public/authForm/SigninImageMin.png';
import SignupImageMin from '@lib/public/authForm/SignupImageMin.png';
import { authFormStyles } from '@lib/components/authForm/styles/authFormStyles';
import { AuthFormProps } from '@lib/services/interface/authForm/authForm';
import Snackbars from '@lib/components/common/components/Snackbars';
import AuthFormInputs from '@lib/components/authForm/components/AuthFormInputs';
import Join from '@lib/components/common/components/Join';
import styles from '@lib/styles/authForm.image.module.css';

const {
  imageStyle,
  authformStyles: { containerBox, globalBox, inputSectinsGlobalBox, inputSectinsBox, picturesSectionBox },
  titleText,
} = authFormStyles;

const AuthForm: React.FC<AuthFormProps> = ({
  formFields,
  handleSubmit,
  buttonText,
  linkText,
  linkPage,
  imageAlt,
  linkNavigate,
  forgetLink,
  forgetLinkPage,
  snackbar,
  errors,
  inputsData,
  setInputsData,
}) => {
  return (
    <Container maxWidth={false} {...containerBox}>
      <Box {...globalBox}>
        <Box {...inputSectinsGlobalBox}>
          <Box {...inputSectinsBox}>
            <Typography {...titleText} variant="h1">
              {buttonText}
            </Typography>
            <AuthFormInputs
              formFields={formFields}
              handleSubmit={handleSubmit}
              buttonText={buttonText}
              linkText={linkText}
              linkPage={linkPage}
              linkNavigate={linkNavigate}
              forgetLink={forgetLink}
              forgetLinkPage={forgetLinkPage}
              snackbar={snackbar}
              errors={errors}
              inputsData={inputsData}
              setInputsData={setInputsData}
            />
          </Box>
        </Box>

        <Box {...picturesSectionBox}>
          <Image
            loading="lazy"
            src={forgetLink ? SigninImageMin : SignupImageMin}
            alt={imageAlt as string}
            {...imageStyle}
            className={`${styles.image} ${styles.mobile}`}
          />
          <Image
            loading="lazy"
            src={forgetLink ? signInImage : signUpImage}
            alt={imageAlt as string}
            {...imageStyle}
            className={`${styles.image} ${styles.default}`}
          />
        </Box>
      </Box>
      <Join />
      {snackbar?.show && <Snackbars text={snackbar.text} statusCode={snackbar.statusCode} />}
    </Container>
  );
};

export default AuthForm;
