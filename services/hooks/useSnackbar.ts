import { useState } from 'react';
import { SnackbarState } from '@lib/services/interface/authForm/authForm';
import { SNACKBARS_INITIAL_VALUE } from '@lib/components/common/constants/snackbars';

export const useSnackbar = () => {
  const [snackbar, setSnackbar] = useState<SnackbarState>(SNACKBARS_INITIAL_VALUE);

  const showSnackbar = (text: string, statusCode: string) => {
    setSnackbar({
      text,
      statusCode,
      show: true,
    });
  };

  const hideSnackbar = () => {
    setSnackbar(SNACKBARS_INITIAL_VALUE);
  };

  return {
    snackbar,
    showSnackbar,
    hideSnackbar,
  };
};
