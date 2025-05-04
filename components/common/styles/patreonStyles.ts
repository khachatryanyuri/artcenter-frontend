import { theme } from '@lib/styles/componentsStyles';
export const patreonStyles = {
  parentBox: {
    sx: {
      backgroundColor: '#C35F1C',
      borderRadius: '6px',
      display: 'flex',
      width: '100%',
      gap: '30px',
      padding: '22px 26px',
    },
  },
  patreonContent: {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '& a': {
        wordBreak: 'nowrap',
        color: 'white',
        textDecoration: 'underline',
        width: 'fit-content',
        fontSize: 'calc(0.6vw + 0.8vh + 0.5vmin)',
      },
    },
  },
  patreonContainer: {
    sx: {
      mt: '142px',
      padding: '0 126px',
      [theme.breakpoints.down('lg')]: {
        mt: '64px',
        padding: '0 32px',
      },
      [theme.breakpoints.down('sm')]: {
        mt: '32px',
        padding: '0 32px',
      },
    },
  },
  patreonLink: {
    sx: {
      fontSize: 'calc(0.6vw + 0.8vh + 0.5vmin)',
      ml: '10px',
    },
  },
  patreonImage: {
    style: {
      width: '48px',
      height: 'auto',
      maxHeight: '90px',
    },
  },
  supportLabel: {
    sx: {
      color: 'white',
      fontSize: 'calc(0.8vw + 0.5vh + 1vmin)',
      [theme.breakpoints.down('md')]: {
        fontSize: 'calc(1vw + 0.8vh + 1vmin)',
        lineHeight: '23px',
      },
    },
  },
};
