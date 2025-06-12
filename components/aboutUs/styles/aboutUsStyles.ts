import { theme } from '@lib/styles/componentsStyles';

export const aboutUsStyles = {
  boxStyles: {
    mainBox: {
      sx: {
        padding: '64px 320px !important',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FBFBFB',
        [theme.breakpoints.down('xl')]: {
          padding: '64px 196px !important',
        },
        [theme.breakpoints.down('lg')]: {
          padding: '64px 128px !important',
        },
        [theme.breakpoints.down('md')]: {
          padding: '64px 64px !important',
        },
        [theme.breakpoints.down('sm')]: {
          padding: '32px 32px !important',
        },
        '@media (max-width: 560px)': {
          padding: '24px 12px !important',
        },
      },
    },

    gridImage: {
      display: 'flex',
      justifyContent: 'center',
    },

    eachTextBox: {
      sx: {
        width: '70%',
      },
    },
    boxContentHead: {
      sx: {
        marginTop: '60px',
        mb: '48px',
      },
    },

    boxContentBottom: {
      sx: { display: 'flex', flexDirection: 'column', alignItems: 'end' },
    },
  },
  image: {
    style: {
      width: '100%',
      height: 'auto',
    },
  },

  typographyStyles: {
    typographyHeading: {
      sx: {
        color: '#C35F1C',
        [theme.breakpoints.down('lg')]: {
          fontWeight: 900,
        },
      },
    },
    typographyLastContent: {
      sx: { paddingTop: '26px' },
    },
  },
};
