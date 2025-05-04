import { theme } from '@lib/styles/componentsStyles';

export const coursesStyles = {
  boxStyles: {
    containerBox: {
      sx: {
        padding: '98px 150px 0 142px !important',
        [theme.breakpoints.down('xl')]: {
          padding: '32px 26px 0 40px !important',
        },
      },
    },
    textBox: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        width: '60%',
        [theme.breakpoints.down('lg')]: {
          width: '100%',
          textAlign: 'center',
        },
      },
    },
    courseBox: {
      sx: {
        display: 'flex',
        border: '1px solid #717171',
        width: '100%',
        justifyContent: 'space-between',
        borderRadius: '6px',
        [theme.breakpoints.down('lg')]: {
          display: 'none',
        },
      },
    },
    buttonBox: {
      sx: {
        width: '100%',
        padding: '24px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('lg')]: {
          display: 'flex',
          textAlign: 'center',
        },
      },
    },
    mainBox: {
      sx: {
        marginTop: '98px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '32px',
        width: '100%',
      },
    },
    imageBox: {
      sx: {
        maxWidth: '260px',
      },
    },
    buttomBox: {
      sx: {
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
      },
    },
    mobileBox: {
      sx: {
        width: '100%',
        display: 'none',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #B1B1B1',
        [theme.breakpoints.down('lg')]: {
          display: 'flex',
        },
      },
    },
    mobileBoxButton: {
      sx: {
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
        [theme.breakpoints.down('lg')]: {
          justifyContent: 'center',
        },
      },
    },
    joinBox: {
      sx: {
        padding: '0 70px 0 80px',
      },
    },
  },
  textStyles: {
    text: {
      sx: { padding: '16px' },
    },
    mobileTitle: {
      sx: {
        marginTop: '-12px',
        backgroundColor: '#fff',
        fontSize: '20px',
      },
    },
  },
  imageStyles: {
    courseImage: {
      style: {
        width: 'auto',
        height: 'auto',
        padding: '20px',
        aspectRatio: '1 / 1',
        borderRadius: '24px',
      },
    },
  },
};
