import { theme } from '@lib/styles/componentsStyles';

export const joinStyles = {
  boxStyles: {
    mainBox: {
      sx: {
        backgroundColor: '#fff',
        padding: '112px 64px',
        [theme.breakpoints.down('sm')]: {
          padding: '64px 32px',
        },
      },
    },
    headerBox: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        gap: '30px',
      },
    },
    buttonBox: {
      sx: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.down('lg')]: {
          alignItems: 'flex-start',
        },
      },
    },
    privacyBox: {
      sx: {
        paddingTop: '12px',
        display: 'flex',
        columnGap: '6px',
      },
    },
  },
  buttonStyles: {
    sx: {
      padding: '18px 0',
      maxWidth: '160px',
      [theme.breakpoints.down('lg')]: {
        marginTop: '18px',
      },
    },
  },
  gridStyles: {
    sx: {
      rowGap: '16px',
    },
  },
  linkStyles: {
    sx: {
      textDecoration: 'underline',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '21px',
      color: '#090909',

      [theme.breakpoints.down('lg')]: {
        fontSize: '13px',
      },
    },
  },
};
