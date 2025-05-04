import { theme } from '@lib/styles/componentsStyles';

export const mainInfoStyles = {
  mainBox: {
    sx: {
      backgroundColor: '#FBFBFB',
      justifyContent: 'center',
      padding: '64px 48px !important',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      [theme.breakpoints.down('lg')]: {
        padding: '32px 24px !important',
      },
    },
  },
};
