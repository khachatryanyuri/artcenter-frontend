import { theme } from '@lib/styles/componentsStyles';

export const courseStyle = {
  boxStyles: {
    mainBox: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        mt: '120px',
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
    gridContainer: {
      sx: { display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', mt: '64px' },
    },
    gridItem: { sx: { display: 'flex', flexDirection: 'column', justifyContent: 'center' } },
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
