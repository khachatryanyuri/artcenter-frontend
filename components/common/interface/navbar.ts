import { SxProps, Theme } from '@mui/material';

interface IBaseLink {
  text: string;
  menu?: { text: string; href: string }[];
}

interface IHrefLink extends IBaseLink {
  href: string;
}

interface IDonationLink extends IHrefLink {
  id: string;
  style: SxProps<Theme>;
  href: string;
}

type ILink = IMenuLink | IHrefLink | IDonationLink;

interface IMenuLink extends IBaseLink {
  menu: { text: string; href: string }[];
}

export type { IMenuLink, ILink, IHrefLink, IDonationLink };
