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
        padding: '96px 360px',
        width: '100%',
        '@media (max-width: 1600px)': {
          padding: '64px 240px',
        },
        '@media (max-width: 1200px)': {
          padding: '48px 120px',
        },
        '@media (max-width: 900px)': {
          padding: '24px 48px',
        },
        '@media (max-width: 700px)': {
          padding: '24px',
        },
        '@media (max-width: 500px)': {
          padding: '24px 0',
        },
      },
    },
    iconBox: {
      sx: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    mainContainer: {
      sx: {
        backgroundImage: 'url(/news/detailedNewsBackground.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
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
      },
    },
  },

  iconStyles: {
    iconButtonStyle: {
      sx: {
        fontSize: '36px',
        color: '#000',
      },
    },
    shareIcon: {
      sx: { color: '#C35F1C', border: '1px solid #C35F1C', mt: '16px' },
    },
  },
};
