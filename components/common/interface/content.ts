interface IContentProps {
  variant: string;
  style?: any;
  text: any;
  useResetStyles?: boolean;
}

interface IContentState {
  [key: string]: { [key: string]: { [key: string]: string } };
}

interface IContent {
  [key: string]: { [key: string]: { [key: string]: { [key: string]: string } } };
}

export type { IContentProps, IContentState, IContent };
