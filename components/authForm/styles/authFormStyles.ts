import { theme } from '@lib/styles/componentsStyles';

export const authFormStyles = {
  boxStyles: {
    boxGlobal: {
      sx: {
        width: '100%',
        gap: '20px',
        display: 'flex',
        flexDirection: 'column',
      },
    },
    boxField: {
      sx: {
        gap: '5px',
        display: 'flex',
        flexDirection: 'column',
      },
    },
    boxLink: {
      sx: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    fieldBox: {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
  },
  formHelperTextStyles: { sx: { color: 'red' } },
  linkStyle: {
    sx: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '21px',
      color: '#000',
      textDecoration: 'underline',
    },
  },
  linkStyleSignUp: {
    sx: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '21px',
      color: '#000',
      textDecoration: 'underline',
      paddingLeft: '4px',
    },
  },
  imageStyle: {
    style: { width: '100%', height: 'auto' },
  },
  authformStyles: {
    containerBox: { sx: { padding: '64px 32px !important', backgroundImage: 'url(/authForm/backImge.png)' } },
    globalBox: {
      sx: {
        display: 'flex',
        width: '100%',
        gap: '32px',
        justifyContent: 'center',
        [theme.breakpoints.down('lg')]: {
          flexDirection: 'column',
        },
      },
    },
    inputSectinsGlobalBox: {
      sx: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
          width: '100%',
        },
      },
    },
    inputSectinsBox: {
      sx: {
        width: '70%',
        [theme.breakpoints.down('lg')]: {
          width: '100%',
        },
      },
    },
    picturesSectionBox: {
      sx: {
        display: 'flex',
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
          display: 'block',
          width: '100%',
        },
      },
    },
  },
  titleText: { sx: { width: '100%', textAlign: 'left', paddingBottom: '20px' } },
};
