export interface IErrors {
  name: boolean;
  email: boolean;
  letter: boolean;
  [key: string]: boolean;
}

export interface IData {
  name: string | null;
  email: string | null;
  letter: string | null;
  [key: string]: string | null;
}

export enum TextEnums {
  email = 'email',
}
