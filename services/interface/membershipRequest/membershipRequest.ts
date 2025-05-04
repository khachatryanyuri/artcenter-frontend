import { ChangeEvent, FormEvent } from 'react';

export enum ErrorsTextEnum {
  AuthenticationErrorEnum = 'Authentication error:',
}
interface InputsData {
  name: string;
  id: string;
  type?: 'text' | 'tel' | 'email' | 'date';
  inputType: 'textfield' | 'radioGroup' | 'weaponInfo';
  value: string;
  multiline?: boolean;
  content?: [string, string][];
}

interface Picture {
  rawFile: RawFile;
  src: string;
  title: string;
}

interface RawFile {
  path: string;
  name: string;
  lastModified: number;
  lastModifiedDate: string;
  webkitRelativePath: string;
}

interface Initials {
  fullName: string;
  phoneNumber: string;
  email: string;
  preferredCommunicationMethod: string;
  birthday: string;
  haveWeapon: string;
  weaponName: string | null;
  weaponCaliber: string | null;
  howYouKnow: string;
  reasonToJoin: string;
  familiarizedWithCharter: string;
  picture: File | string | undefined;
  [key: string]: string | File | null | undefined;
}

interface SnackbarState {
  text: string;
  statusCode: string;
  show: boolean;
}

interface UseMembershipRequest {
  isLoading: boolean;
  inputsData: InputsData[];
  imageData: File | null;
  weapon: boolean;
  errors: Initials;
  snackbar: SnackbarState;
  isAuthenticated: boolean;
  handleImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeHaveWeapon: (value: string) => void;
  errorMonitoring: (value: string, newValue: string) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  setInputsData: React.Dispatch<React.SetStateAction<InputsData[]>>;
}

export type { UseMembershipRequest, SnackbarState, Initials, InputsData };
