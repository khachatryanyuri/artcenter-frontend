export interface IProduct {
  id: string;
  type: string;
  name: Record<string, string>;
  model: Record<string, string>;
  size: string;
  info: Record<string, string>;
  price: number;
  quantity: number;
  pictures: string[];
}

export enum TextsEnum {
  uniform = 'uniform',
}

export interface ProductDialogProps {
  open: boolean;
  handleClose: () => void;
  value: IProduct;
}
