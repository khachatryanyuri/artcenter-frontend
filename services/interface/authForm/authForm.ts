import React, { Dispatch, SetStateAction } from 'react';

interface AuthFormProps {
  formFields: { label: string; name: string; type: string }[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  linkText: string;
  linkPage: string;
  imageAlt?: string;
  linkNavigate: string;
  forgetLink?: string;
  forgetLinkPage?: string;
  handleImageChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  snackbar?: { text: string; statusCode: string; show: boolean };
  errors?: { [key: string]: string };
  inputsData?: { [key: string]: string };
  setInputsData?: Dispatch<SetStateAction<{ [key: string]: string }>>;
}

interface SnackbarState {
  text: string;
  statusCode: string;
  show: boolean;
}

export enum TextsEnum {
  password = 'Գաղտնաբառ',
}

export type { SnackbarState, AuthFormProps };
