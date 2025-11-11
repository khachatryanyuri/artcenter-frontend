import { checkboxClasses, createTheme } from '@mui/material';

const sunsetColors = {
  bgAppbar: '#2A2540',
  bgPage: '#FFFFFF',
  textOnDark: '#F5F3F7',
  textOnLight: '#333333',
  textMutedOnLight: '#666666',
  accentOrange: '#E64A19',
  accentCoral: '#FF7043',
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1050,
      xl: 1600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          fontSize: '16px',
          padding: '10px 36px',
          fontFamily: 'Montserratarm',
          lineHeight: '20px',
          letterSpacing: '0.1px',
          backgroundColor: sunsetColors.accentOrange,
          minWidth: '240px',
          textTransform: 'none',
          color: sunsetColors.bgPage,
          '&:hover': {
            backgroundColor: sunsetColors.accentCoral,
          },
          '@media (max-width:500px)': {
            fontSize: '14px',
            padding: '8px 16px',
          },
        },
        outlined: {
          fontSize: '14px',
          fontFamily: 'Montserratarm',
          lineHeight: '20px',
          letterSpacing: '0.1px',
          borderRadius: '5px',
          border: '1px solid #79747E',
          color: sunsetColors.textOnLight,
          padding: '10px 22px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: sunsetColors.accentCoral,
            color: sunsetColors.bgPage,
            border: `1px solid ${sunsetColors.accentCoral}`,
          },
          '@media (max-width:500px)': {
            fontSize: '14px',
            padding: '8px 16px',
          },
        },
        text: {
          color: sunsetColors.textOnLight,
          fontFamily: 'Montserratarm',
          fontSize: '16px',
          textTransform: 'none',
          textDecoration: 'none',
          '&:hover': {
            color: sunsetColors.accentOrange,
            cursor: 'pointer',
            borderRadius: '6px',
            fontWeight: 700,
            transition: 'color 0.3s ease',
          },
          borderRadius: '6px',
          padding: '10px 16px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& input': {
              color: sunsetColors.textOnLight,
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '24px',
              '@media (max-width: 1600px)': {
                fontWeight: 400,
                lineHeight: '24px',
                fontSize: '18px',
              },
              '@media (max-width: 1050px)': {
                fontWeight: 400,
                lineHeight: '24px',
                fontSize: '16px',
              },
              '@media (max-width:500px)': {
                fontWeight: 400,
                lineHeight: '24px',
                fontSize: '12px',
              },
            },

            '&:focus-within': {
              '& input': {
                color: sunsetColors.accentOrange,
              },
            },
            '&.Mui-focused fieldset': {
              borderColor: sunsetColors.accentOrange,
            },
          },
          '& .MuiInputLabel-root': {
            '&.Mui-focused': {
              color: sunsetColors.accentOrange,
            },
          },
          backgroundColor: '#FBFBFB',
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '24px',
          '@media (max-width: 1600px)': {
            fontWeight: 400,
            lineHeight: '24px',
            fontSize: '18px',
          },
          '@media (max-width: 1050px)': {
            fontWeight: 400,
            lineHeight: '24px',
            fontSize: '16px',
          },
          '@media (max-width:500px)': {
            fontWeight: 400,
            lineHeight: '24px',
            fontSize: '12px',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: sunsetColors.accentOrange,
          },
          '.MuiSvgIcon-root ': {
            fill: `${sunsetColors.textOnLight} !important`,
          },
          backgroundColor: '#FBFBFB',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '24px',
          color: sunsetColors.textOnLight,
          '@media (max-width: 1600px)': {
            fontWeight: 400,
            lineHeight: '24px',
            fontSize: '18px',
          },
          '@media (max-width: 1050px)': {
            fontWeight: 400,
            lineHeight: '24px',
            fontSize: '16px',
          },
          '@media (max-width: 500px)': {
            fontWeight: 400,
            lineHeight: '24px',
            fontSize: '12px',
          },
          '&:hover': {
            backgroundColor: '#F5F5F5',
            color: sunsetColors.accentOrange,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          [`&.${checkboxClasses.checked}`]: {
            color: sunsetColors.accentOrange,
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            color: sunsetColors.textOnLight,
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: sunsetColors.accentOrange,
          },
          '& .MuiOutlinedInput-root': {
            '& input': {
              color: sunsetColors.textOnLight,
            },
            '&:focus-within': {
              '& input': {
                color: sunsetColors.textOnLight,
              },
            },
            '&.Mui-focused fieldset': {
              borderColor: sunsetColors.accentOrange,
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: sunsetColors.accentOrange,
          ' &.Mui-checked': {
            color: sunsetColors.accentOrange,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          ':hover': {
            color: sunsetColors.accentOrange,
            textDecoration: 'none',
          },
          color: sunsetColors.textOnLight,
          fontSize: '16px',
          textDecoration: 'none',
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          '& li': {
            margin: 0,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: sunsetColors.bgAppbar, zIndex: 1 },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700,
          fontSize: '56px',
          lineHeight: '67px',
          fontFamily: 'Bokonique',
          color: sunsetColors.textOnLight,
          '@media (max-width: 1600px)': {
            fontWeight: 650,
            fontSize: '46px',
            lineHeight: '62px',
          },
          '@media (max-width: 1050px)': {
            fontWeight: 600,
            fontSize: '36px',
            lineHeight: '60px',
          },
          '@media (max-width:500px)': {
            fontSize: '22px',
            lineHeight: '32px',
          },
        },
        h2: {
          fontWeight: 700,
          fontSize: '48px',
          lineHeight: '58px',
          fontFamily: 'Bokonique',
          color: sunsetColors.textOnLight,
          '@media (max-width: 1600px)': {
            fontWeight: 650,
            fontSize: '40px',
            lineHeight: '54px',
          },
          '@media (max-width: 1050px)': {
            fontWeight: 600,
            fontSize: '30px',
            lineHeight: '50px',
          },
          '@media (max-width:500px)': {
            fontSize: '26px',
            lineHeight: '32px',
          },
        },
        h3: {
          fontWeight: 700,
          fontSize: '40px',
          lineHeight: '48px',
          fontFamily: 'Bokonique',
          color: sunsetColors.textOnLight,
          '@media (max-width: 1600px)': {
            fontWeight: 650,
            fontSize: '34px',
            lineHeight: '42px',
          },
          '@media (max-width: 1050px)': {
            fontWeight: 650,
            fontSize: '28px',
            lineHeight: '38px',
          },
          '@media (max-width: 500px)': {
            fontWeight: 600,
            fontSize: '23px',
            lineHeight: '38px',
          },
        },
        h4: {
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '24px',
          color: sunsetColors.textOnLight,
          '@media (max-width: 1600px)': {
            fontWeight: 600,
            fontSize: '18px',
          },
          '@media (max-width: 1050px)': {
            fontWeight: 600,
            fontSize: '16px',
          },
          '@media (max-width:500px)': {
            fontWeight: 600,
            fontSize: '14px',
          },
        },
        h5: {
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '24px',
          color: sunsetColors.textOnLight,
          '@media (max-width: 1600px)': {
            fontWeight: 400,
            lineHeight: '24px',
            fontSize: '18px',
          },
          '@media (max-width: 1050px)': {
            fontWeight: 400,
            lineHeight: '24px',
            fontSize: '16px',
          },
          '@media (max-width:500px)': {
            fontWeight: 400,
            lineHeight: '24px',
            fontSize: '12px',
          },
        },
        h6: {
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '21px',
          color: sunsetColors.textOnLight,
          '@media (max-width: 1600px)': {
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '21px',
          },
          '@media (max-width: 1050px)': {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '21px',
          },
          '@media (max-width:500px)': {
            fontWeight: 400,
            fontSize: '10px',
            lineHeight: '21px',
          },
        },
        body1: {
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '21px',
          color: sunsetColors.textMutedOnLight,
          '@media (max-width:500px)': {
            fontSize: '14px',
          },
        },
        body2: {
          fontWeight: 400,
          fontSize: '13px',
          lineHeight: '21px',
          color: sunsetColors.textMutedOnLight,
          '@media (max-width:500px)': {
            fontSize: '10px',
          },
        },
        root: { fontFamily: 'Montserratarm' },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: { width: '13px' },
      },
    },
  },
});
