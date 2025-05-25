export const contactUsStyles = {
  boxStyles: {
    mainBox: {
      sx: {
        padding: '38px 96px 0 132px',
        backgroundImage: 'url(/contactUs/background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left bottom',
        '@media (max-width: 1300px)': {
          padding: '38px 12px 0 48px',
        },
        '@media (max-width: 900px)': {
          padding: '24px',
          rowGap: '64px',
          backgroundImage: 'none',
        },
      },
    },
    formBox: {
      sx: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },
    },
    formMainBox: {
      sx: {
        width: '100%',
        rowGap: '20px',
        display: 'flex',
        flexDirection: 'column',
      },
    },
    inputBox: {
      sx: { gap: '5px', display: 'flex', flexDirection: 'column' },
    },
    imageBox: {
      sx: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
    },

    subscribeMainBox: {
      sx: {
        padding: '0 96px',
        '@media (max-width: 1300px)': {
          padding: '0 48px',
        },
        '@media (max-width: 800px)': {
          padding: '0 24px',
        },
        '@media (max-width: 600px)': {
          padding: '0',
        },
      },
    },
  },
  textStyles: {
    errText: {
      sx: {
        color: 'red',
      },
    },
    textfield: {
      sx: {
        backgroundColor: '#fff',
        width: '90%',
        '@media (max-width: 900px)': {
          width: '100%',
        },
      },
    },
    titleText: {
      sx: {
        pb: '32px',
        width: '100%',
        '@media (max-width: 1300px)': {
          pb: '16px',
        },
        '@media (max-width: 900px)': {
          textAlign: 'center',
          pb: '12px',
        },
      },
    },
  },
  buttonStyle: {
    sx: {
      padding: '10px 18px !important',
      backgroundColor: '#000',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#000',
        border: '1px solid #000',
      },
      '@media (max-width: 700px)': {
        width: '100%',
      },
    },
  },
  imgStyle: { style: { width: '100%', height: 'auto' } },
  contactInfoStyles: {
    mainBox: {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        mt: '98px',
        mb: '48px',
        '@media (max-width: 800px)': {
          display: 'block',
          justifyContent: 'center',
          mt: '0',
        },
      },
    },
    linkBox: {
      sx: {
        display: 'flex',
        gap: '32px',
        '@media (max-width: 800px)': {
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '8px',
          textAlign: 'center',
          alignItems: 'center',
        },
      },
    },
    linkStyles: {
      style: { display: 'flex', alignItems: 'center', textDecoration: 'underline', columnGap: '8px', color: '#A6A6A6' },
    },
  },
};
