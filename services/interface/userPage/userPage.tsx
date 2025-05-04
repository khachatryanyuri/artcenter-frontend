interface IUser {
  email: string;
  password: string;
  name: Record<string, string>;
  surname: Record<string, string>;
  birthday: Date;
  phoneNumber: string;
  address: Record<string, string>;
  picture?: string;
  role: string;
  resetToken?: string;
  resetTokenExpiry?: number;
  cart?: ICart;
  [key: string]: string | number | Record<string, string> | Date | undefined | ICart;
}

interface ICartItem {
  prodId: string;
  prodName: Record<string, string>;
  price: number;
  quantity: number;
  picture: string;
  totalQuantity?: number;
}

interface ICart {
  items: ICartItem[];
  totalPrice: number;
}

interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  [key: string]: string;
}

interface IErrors {
  [key: string]: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  address: string;
}

type ISnackbar = {
  text: string;
  statusCode: string;
  show: boolean;
};

interface IUpdatedData {
  id: string;
  name: Record<string, string>;
  surname: Record<string, string>;
  email: string;
  phoneNumber: string;
  address: Record<string, string>;
  password: string;
  picture: (File | null)[];
  [key: string]: string | Record<string, string> | (File | null)[];
}

interface IInputFields {
  inputFieldsData: { label: string; value: string; name: string; type: string }[];
  errors: IErrors;
  handleOnChange: (name: string, value: string) => void;
  buttonText: string;
  handleConfirmButton: () => void;
}

enum UserDataInputFields {
  Name = 'name',
  Surname = 'surname',
  Email = 'email',
  PhoneNumber = 'phoneNumber',
  Address = 'address',
  OldPassword = 'oldPassword',
  NewPassword = 'newPassword',
  ConfirmPassword = 'confirmPassword',
}
export { UserDataInputFields };

export type { IUser, IChangePassword, IErrors, ISnackbar, IUpdatedData, IInputFields };
