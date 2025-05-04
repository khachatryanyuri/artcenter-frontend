import { CSSProperties, ReactNode } from 'react';

export interface LinkNavigateProps {
  text: string;
  navigatePage: string;
  styles?: any;
  arowImg?: ReactNode;
  query?: string;
  linkStyle?: any;
}
