import { theme } from '@lib/styles/componentsStyles';

export const newsStyles = {
  boxStyles: {
    mainBox: {
      sx: {
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FBFBFB',
        padding: '64px 48px',

        [theme.breakpoints.down('lg')]: {
          padding: '32px',
        },
        '@media (max-width:600px)': {
          padding: '64px 0 0 0',
        },
      },
    },

    allNewsBox: {
      sx: {
        display: 'flex',
        justifyContent: 'space-around !important',
        marginTop: '23px',
        gap: '32px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
          justifyContent: 'none',
        },
      },
    },
    newsBox: {
      sx: {
        border: '1px solid #000',
        borderRadius: '6px',
        margin: '12px',
        backgroundColor: '#fff',
      },
    },
    newsTextBox: {
      sx: {
        display: 'flex',
        gap: '8px',
        flexDirection: 'column',
        padding: '16px',
        backgroundColor: '#fff',
        borderRadius: '6px',
      },
    },
    boxTitle: {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 24px',
        margin: '0 128px',
        [theme.breakpoints.down('lg')]: {
          margin: '0 16px',
        },
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      },
    },
    customSwiperBox: {
      sx: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
          display: 'block',
          padding: '0 16px',
        },
      },
    },
  },
  imageStyles: {
    newsImage: {
      style: {
        borderRadius: '6px',
        width: '100%',
        height: 'auto',
        marginTop: '-28px',
        marginLeft: '-28px',
        aspectRatio: 1 / 1,
        objectFit: 'cover' as const,
      },
    },
  },
  linkStyles: {
    sx: {
      color: '#8C8C8C',
      textDecoration: 'underline',
      textDecorationColor: '#8C8C8C',
      fontSize: '19px',
      paddingTop: '100px',
      paddingBottom: '23px',
      [theme.breakpoints.down('sm')]: {
        paddingTop: '42px',
        fontSize: '18px',
      },
    },
  },
  linkStylesNews: {
    sx: {
      textDecoration: 'underline',
      fontSize: '15px !important',
      padding: '10px 0',
      fontWeight: 600,
    },
  },
  typographyStyles: {
    sx: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
  },
};
