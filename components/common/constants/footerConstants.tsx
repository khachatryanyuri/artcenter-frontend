import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

export const ALL_RIGHTS_RESERVED = '© 2025';
export const BOTTOM_DATA = [{ title: 'Онлайн школа музыки.', link: '/' }];

export const SECTIONS_DATA = [
  {
    title: '',
    data: [
      { subTitle: 'О нас', link: '/about' },
      { subTitle: 'Помощь', link: '/helps' },
      { subTitle: 'Сотрудничество', link: '/membership' },
      { subTitle: 'Связаться с нами', link: '/contactus' },
    ],
  },
];

export const SOCIAL_MEDIA = [
  {
    key: 'youtube',
    icon: (style: string) => <YouTube sx={{ color: style }} />,
    link: '#',
  },
  {
    key: 'facebook',
    icon: (style: string) => <Facebook sx={{ color: style }} />,
    link: '#',
  },
  {
    key: 'instagram',
    icon: (style: string) => <Instagram sx={{ color: style }} />,
    link: '#',
  },
  {
    key: 'linkedIn',
    icon: (style: string) => <LinkedIn sx={{ color: style }} />,
    link: '#',
  },
];
