import { theme } from '@lib/styles/componentsStyles';

export const courseStyle = {
  boxStyles: {
    mainBox: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        mt: '64px',
        padding: '0 120px !important',
        [theme.breakpoints.down('xl')]: {
          mt: '64px',
          padding: '0 64px !important',
        },
        [theme.breakpoints.down('md')]: {
          mt: '32px',
          padding: '0 32px !important',
        },
      },
    },
    cardItem: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(42, 37, 64, 0.08)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, boxShadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 40px rgba(42, 37, 64, 0.12)',
        },
      },
    },
    cardTextBox: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        width: '100%',

        flexGrow: 1,
      },
    },

    imageStyle: {
      style: { width: '100%', height: 'auto' },
    },
    gridContainer: {
      sx: { display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', mb: '128px' },
    },
    gridItem: { sx: { display: 'flex', flexDirection: 'column', justifyContent: 'center', cursor: 'pointer' } },
    gridItemPayment: {
      sx: {
        backgroundColor: '#C35F1C',
        margin: '32px',
        marginTop: '96px',
        [theme.breakpoints.down('lg')]: {
          margin: '0',
          marginTop: '96px',
          marginLeft: '32px',
        },
      },
    },
  },
  imageStyles: {
    bannerImage: {
      style: { width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' as const },
    },

    cardImage: {
      style: {
        width: '100%',
        height: '200px',
        objectFit: 'cover' as const,
      },
    },
  },
  linkStyles: {
    courseButton: {
      sx: {
        textDecoration: 'none',
        display: 'inline-block',

        backgroundColor: 'accentOrange.main',
        color: 'textOnDark.main',
        padding: '10px 24px',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '15px !important',
        textAlign: 'center',
        '&:hover': {
          backgroundColor: 'accentCoral.main',
          color: 'textOnDark.main',
          textDecoration: 'none',
        },
      },
    },
  },
  buttonStyles: { sx: { color: '#C35F1C', border: '1px solid #C35F1C', mt: '16px' } },
  typographyStyles: {
    typographyContentTitle: { sx: { padding: '22px', color: '#fff', backgroundColor: '#C35F1C' } },
    typographyContentDesc: {
      sx: {
        padding: '22px',
        '& p': {
          margin: '2px',
        },
        flex: 1,
      },
    },
    typographyPayment: {
      sx: {
        paddingBottom: '32px',
        color: '#fff',
        '& p': {
          margin: '2px',
        },
      },
    },
  },
  imageStyle: {
    style: { width: '100%', height: 'auto' },
  },
};

export const gridItemStyles = (isLastItemOdd: boolean) => {
  return {
    sx: {
      border: '1px solid #717171',
      borderRadius: '2px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      maxWidth: isLastItemOdd ? '50%' : 'unset',
      margin: isLastItemOdd ? '0 auto' : 'unset',
      [theme.breakpoints.down('lg')]: {
        maxWidth: 'unset',
        margin: 'unset',
      },
    },
  };
};

export const detailedCourseStyles = {
  boxStyles: {
    mainBox: {
      sx: {
        padding: '0 120px !important',
        [theme.breakpoints.down('xl')]: {
          mt: '64px',
          padding: '0 64px !important',
        },
        [theme.breakpoints.down('md')]: {
          mt: '32px',
          padding: '0 32px !important',
        },
        margin: '64px auto',
        width: '100%',
      },
    },
    iconBox: {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        mt: '16px',
        mb: '8px',
      },
    },
    mainContainer: {
      sx: {
        backgroundColor: '#FFFFFF',
      },
    },
    linkBox: {
      sx: {
        padding: '24px 0',
        display: 'flex',
        columnGap: '4px',
        justifyContent: 'space-between',
        '@media (max-width: 600px)': {
          borderBottom: '1px solid #C7C7C7',
        },
      },
    },
  },
  textStyles: {
    heading: {
      margin: '0 auto',
      mb: '64px',
    },
    dateText: {
      sx: {
        textAlign: 'end',
        marginTop: '42px',
        color: '#8E8E8E',
      },
    },
  },
  imgStyles: {
    newsImage: {
      style: {
        width: '100%',
        height: 'auto',

        borderRadius: '16px',
        objectFit: 'cover' as const,
      },
    },
  },
  iconStyles: {
    iconButtonStyle: {
      sx: {
        fontSize: '32px',
        color: 'text.secondary',
        '&:hover': {
          color: 'accentOrange.main',
        },
      },
    },
    shareIcon: {
      sx: {
        backgroundColor: 'accentOrange.main',
        color: 'textOnDark.main',
        border: 'none',
        mt: '16px',
        padding: '10px 24px',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '15px',
        '&:hover': {
          backgroundColor: 'accentCoral.main',
          color: 'textOnDark.main',
          border: 'none',
        },
      },
    },
  },
};
