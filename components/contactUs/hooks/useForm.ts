import { useState } from 'react';

import { constants } from '@lib/components/contactUs/constants/constants';
import { dataProvider } from '@lib/src/admin/providers/dataProvider';
import { IData, IErrors, TextEnums } from '@lib/services/interface/contactUs/contactUs';
import { SNACKBARS_INITIAL_VALUE } from '@lib/components/common/constants/snackbars';

const { FORMFIELDS, CONTACTS_PAGE, SUCCESS_MESSAGE, ERROR_MESSAGE, INITIAL_STATE, ERROR_STATE } = constants;

const { email } = TextEnums;

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  return emailRegex.test(email);
};

export const useForm = (): {
  formData: IData;
  errors: IErrors;
  snackbar: { text: string; statusCode: string; show: boolean };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
} => {
  const [formData, setFormData] = useState<IData>(INITIAL_STATE);
  const [errors, setErrors] = useState<IErrors>(ERROR_STATE);
  const [snackbar, setSnackbar] = useState(SNACKBARS_INITIAL_VALUE);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSnackbar(SNACKBARS_INITIAL_VALUE);

    const updatedErrors: IErrors = { ...ERROR_STATE };

    FORMFIELDS.forEach((value) => {
      updatedErrors[value.name] =
        value.name === email ? !validateEmail(formData[value.name] as string) : !Boolean(formData[value.name]?.trim());
    });

    setErrors(updatedErrors);

    if (!hasError(updatedErrors)) {
      try {
        await dataProvider.create(CONTACTS_PAGE, {
          data: formData,
        });
        setSnackbar({ text: SUCCESS_MESSAGE, statusCode: '200', show: true });
        setFormData(INITIAL_STATE);
      } catch (error) {
        setSnackbar({ text: ERROR_MESSAGE, statusCode: '400', show: true });
        console.error('Authentication error:', error);
      }
    } else {
      console.error('Invalid email or password');
    }
  };

  const hasError = (updatedErrors: IErrors) => {
    const values = Object.values(updatedErrors);
    return values.some((value) => value);
  };

  return { formData, errors, snackbar, handleInputChange, handleSubmit };
};
