import { theme } from '@lib/styles/componentsStyles';

export const servicesRangeStyles = {
  linkStyles: {
    sx: {
      textDecoration: 'underline',
      fontWeight: 700,
      fontSize: '19px',
      lineHeight: '21px',
      color: '#090909',
    },
  },
  boxStyles: {
    headerBox: {
      sx: {
        textAlign: 'center',
        display: 'flex',
        gap: '16px',
        flexDirection: 'column',
      },
    },
    infoBox: {
      sx: {
        marginTop: '108px',
        marginBottom: '145px',
        gap: '112px',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '80%',
        [theme.breakpoints.down('lg')]: {
          flexDirection: 'column',
          maxWidth: '100%',
        },
      },
    },
    childInfoBox: {
      sx: {
        border: '1px solid #000',
      },
    },
    leftChildBox: {
      sx: {
        display: 'flex',
        gap: '8px',
        flexDirection: 'column',
      },
    },
    leftChildTextBox: {
      sx: {
        display: 'flex',
        padding: '34px',
        flexDirection: 'column',
        gap: '20px',
      },
    },
  },
  imageStyles: {
    style: {
      width: '100%',
      height: 'auto',
      marginTop: '-28px',
      marginLeft: '-28px',
    },
  },
};
