import { theme } from '@lib/styles/componentsStyles';

export const lessonStyles = {
  boxStyles: {
    mainBox: {
      sx: {
        backgroundColor: '#FBFBFB',
        padding: '112px 64px',
        gap: '80px',
        '@media (max-width:600px)': {
          padding: '64px 0 0 0',
        },
      },
    },
    textBox: {
      sx: {
        textAlign: 'center',
        display: 'flex',
        gap: '16px',
        flexDirection: 'column',
      },
    },
    lessonsBox: {
      sx: {
        marginTop: '132px',
        gap: '32px',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
    },
    oneLessonBox: {
      sx: {
        border: '1px solid #000',
        borderRadius: '6px',
        width: '90%',
      },
    },
    textGlobalBox: {
      sx: { textAlign: 'start', width: '100%', paddingLeft: '20px' },
    },
    boxGlobalButtons: {
      sx: { display: 'flex', marginLeft: '28px', gap: '12px' },
    },
    boxButtons: {
      sx: { border: '1px solid #B1B1B1', cursor: 'pointer', padding: '6px 24px', borderRadius: 0 },
    },
    lessonMainBox: {
      sx: {
        display: 'flex',
        gap: '8px',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
      },
    },
    lessonBox: {
      sx: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  },
  customStyle: {
    titleStyle: {
      padding: '16px 0',
      '@media (max-width:500px)': {
        padding: '8px 0',
      },
    },
    descStyle: {
      paddingBottom: '16px',
      '@media (max-width:500px)': {
        paddingBottom: '8px',
      },
    },
  },
  linkStyles: {
    sx: {
      textDecoration: 'underline',
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: '21px',
      color: '#777777',
      paddingBottom: '26px',
    },
  },
  imageStyles: {
    lessonImage: {
      style: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        padding: '24px 20px 12px',
      },
    },
  },
  buttonStyles: {
    sx: {
      width: 'max-content',
      margin: '16px  auto',
    },
  },
  typographyStyles: {
    sx: {
      marginTop: '-12px',
      backgroundColor: '#fff',
      fontSize: '20px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '80%',
      '@media (max-width:800px)': {
        maxWidth: '230px',
      },
      '@media (max-width:600px)': {
        maxWidth: 'none',
      },
    },
  },
  setCustomGridStyle: (customStyle: boolean | undefined) => {
    return {
      sx: {
        border: '1px solid #000',
        borderRadius: '6px',
        width: customStyle ? '70%' : '90%',
      },
    };
  },
  setCustomImgStyle: (customStyle: boolean | undefined) => {
    return customStyle
      ? {
          style: {
            aspectRatio: 1,
            width: '100%',
            height: 'auto',
            margin: '-48px 0 0 -48px',
            objectFit: 'cover' as const,
            borderRadius: '6px',
          },
        }
      : {
          style: {
            width: '100%',
            height: 'auto',
            alignItems: 'center',
            padding: '24px 20px 12px',
            aspectRatio: 1,
            objectFit: 'cover' as const,
            borderRadius: '32px',
          },
        };
  },
};
