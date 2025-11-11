import { theme } from '@lib/styles/componentsStyles';

export const newsStyles = {
  boxStyles: {
    mainBox: {
      sx: {
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FBFBFB',
        padding: { xs: '32px 16px', sm: '48px 32px', md: '64px 48px' },
      },
    },

    allNewsBox: {
      sx: {
        display: 'flex',
        justifyContent: 'center',
        gap: '32px',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      },
    },

    newsBox: {
      sx: {
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(42, 37, 64, 0.08)',
        overflow: 'hidden',

        width: '100%',
        maxWidth: '420px',
      },
    },

    newsTextBox: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '24px',
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
        width: '100%',
        height: 'auto',
        aspectRatio: '16 / 10',
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
      display: 'inline-block',
      backgroundColor: 'accentOrange.main',
      color: 'textPrimary.main',
      padding: '10px 24px',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: '15px !important',
      '&:hover': {
        backgroundColor: 'accentOrange.dark',
        textDecoration: 'underline',
        color: 'textPrimary.main',
      },
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
