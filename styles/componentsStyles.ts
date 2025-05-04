import { checkboxClasses, createTheme } from '@mui/material';

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
          backgroundColor: '#C35F1C',
          minWidth: '240px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#000',
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
          color: '#000',
          padding: '10px 22px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#000',
            color: '#fff',
            border: '1px solid #000',
          },
          '@media (max-width:500px)': {
            fontSize: '14px',
            padding: '8px 16px',
          },
        },
        text: {
          color: '#000',
          fontFamily: 'Montserratarm',
          fontSize: '16px',
          textTransform: 'none',
          textDecoration: 'none',
          '&:hover': {
            color: '#C35F1C',
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
              color: '#000',
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
                color: '##c15927',
              },
            },
            '&.Mui-focused fieldset': {
              borderColor: '#c15927',
            },
          },
          '& .MuiInputLabel-root': {
            '&.Mui-focused': {
              color: '#c15927',
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
            borderColor: '#c15927',
          },
          '.MuiSvgIcon-root ': {
            fill: 'white !important',
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
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          [`&.${checkboxClasses.checked}`]: {
            color: '#c15927',
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            color: '#000',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#c15927',
          },
          '& .MuiOutlinedInput-root': {
            '& input': {
              color: '#000',
            },
            '&:focus-within': {
              '& input': {
                color: '#000',
              },
            },
            '&.Mui-focused fieldset': {
              borderColor: '#c15927',
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#c15927',
          ' &.Mui-checked': {
            color: '#c15927',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          ':hover': {
            color: '#fff',
            textDecoration: 'none',
          },
          color: '#000',
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
        root: { backgroundColor: '#fff', zIndex: 1 },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700,
          fontSize: '56px',
          lineHeight: '67px',
          fontFamily: 'Bokonique',
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
          color: '#8C8C8C',
          '@media (max-width:500px)': {
            fontSize: '14px',
          },
        },
        body2: {
          fontWeight: 400,
          fontSize: '13px',
          lineHeight: '21px',
          color: '#777777',
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
