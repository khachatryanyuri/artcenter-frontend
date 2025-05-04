import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';

import AuthFormInputs from '@lib/components/authForm/components/AuthFormInputs';
import { PAGE_TEXT } from '@lib/components/authForm/constants/authFormConstants';
import { authModalStyles } from '@lib/components/common/styles/authModal';
import { useAuthModal } from '@lib/components/common/hooks/useAuthModal';
import { SIGNIN_FIELDS } from '@lib/components/common/constants/authModal';

const { DONT_HAVE_AN_ACCOUNT, SIGNIN, REGISTER, FORGET_PASSWORD, MODAL_TITLE } = PAGE_TEXT;
const { globalBox, iconBox, iconStyles, typographyTitle } = authModalStyles;

export default function AuthModal({ open, handleModal }: { open: boolean; handleModal: () => void }) {
  const { signInSubmit, snackbar } = useAuthModal(handleModal);

  return (
    <Modal open={open} onClose={handleModal}>
      <Box {...globalBox}>
        <Box {...iconBox}>
          <CloseIcon onClick={() => handleModal()} {...iconStyles} />
        </Box>
        <Typography {...typographyTitle} variant="h3">
          {MODAL_TITLE}
        </Typography>
        <AuthFormInputs
          formFields={SIGNIN_FIELDS}
          handleSubmit={signInSubmit}
          buttonText={SIGNIN}
          linkText={DONT_HAVE_AN_ACCOUNT}
          linkNavigate={REGISTER}
          linkPage="/signup"
          forgetLink={FORGET_PASSWORD}
          forgetLinkPage="/reset-password"
          snackbar={snackbar}
        />
      </Box>
    </Modal>
  );
}
