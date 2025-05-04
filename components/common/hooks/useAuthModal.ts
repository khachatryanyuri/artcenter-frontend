import * as React from 'react';

import { useAuth } from '@lib/services/store/AuthContext';
import { SnackbarState } from '@lib/services/interface/authForm/authForm';
import { SNACKBARS_INITIAL_VALUE } from '@lib/components/common/constants/snackbars';

export const useAuthModal = (handleModal: () => void) => {
  const { login } = useAuth();
  const [snackbar, setSnackbar] = React.useState<SnackbarState>(SNACKBARS_INITIAL_VALUE);

  const signInSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSnackbar(SNACKBARS_INITIAL_VALUE);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email && password) {
      try {
        await login({ username: email as string, password: password as string });
        handleModal();
      } catch (error) {
        setSnackbar({ text: 'Սխալ տվյալններ', statusCode: '400', show: true });
        console.error('Authentication error:', error);
      }
    } else {
      console.error('Invalid email or password');
    }
  };

  return { signInSubmit, snackbar };
};
