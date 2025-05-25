import { theme } from '@lib/styles/componentsStyles';

export const footerStyles = {
  boxStyles: {
    footerBox: {
      sx: {
        padding: '64px 64px 48px 64px',
        backgroundColor: '#1A1B1D',
        [theme.breakpoints.down('lg')]: {
          padding: '32px 32px 24px 32px',
        },
      },
    },
    imageBox: {
      sx: {
        width: '20%',
      },
    },
    sectionBox: {
      sx: {
        paddingTop: '8px',
        width: '20%',
      },
    },
    lastBox: {
      sx: {
        width: '100%',
        borderTop: '1px solid #D9D9D9',
        paddingTop: '32px',
        display: 'flex',
        gap: '8px',
        justifyContent: 'space-between',
        mt: '8px',
        '@media (max-width:600px)': {
          flexDirection: 'column',
          textAlign: 'center',
        },
      },
    },
    imageBoxMobile: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '16px',
        width: '100%',
        alignItems: 'center',
      },
    },
    lastTextLinkBox: {
      sx: {
        display: 'flex',
        columnGap: '16px',
        '@media (max-width:700px)': {
          flexDirection: 'column',
        },
      },
    },
    socialMediaBox: {
      sx: {
        display: 'flex',
        columnGap: '12px',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 800px)': {
          mt: '32px',
        },
      },
    },
    privacyBox: {
      sx: {
        display: 'flex',
        alignItems: 'start',
        columnGap: '8px',
        '@media (max-width:700px)': {
          flexDirection: 'column',
        },
      },
    },

    linkBox: {
      sx: { display: 'flex', flexDirection: 'column', gap: '8px' },
    },
    boxMax: {
      sx: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        rowGap: '40px',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
    },
    boxMobile: {
      sx: {
        width: '100%',
        flexWrap: 'wrap',
        rowGap: '40px',
        display: 'none',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
        },
      },
    },
  },
  textStyles: {
    sectionHeading: {
      sx: {
        paddingBottom: '24px',
      },
    },
    copyrightText: {
      sx: {
        lineHeight: '21px',
        fontSize: '14px',
        fontWeight: 400,
        fontFamily: 'Montserratarm',
        color: '#BEBEBE',
        '@media (max-width:1050px)': {
          fontSize: '11px',
        },
      },
    },
  },
  linkStyles: {
    link: {
      sx: {
        '&:hover': {
          textDecoration: 'underline',
          textDecorationColor: '#fff',
        },
        textDecoration: 'none',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '21px',
        cursor: 'pointer',
      },
    },
    privacyLinks: {
      sx: {
        '&:hover': {
          textDecoration: 'underline',
          textDecorationColor: '#BEBEBE',
        },
        textDecoration: 'none',
        color: '#BEBEBE',
        lineHeight: '21px',
        fontSize: '14px',
        fontWeight: 400,
        cursor: 'pointer',
        '@media (max-width:1050px)': {
          fontSize: '11px',
        },
      },
    },
  },
};
