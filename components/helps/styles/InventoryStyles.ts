import { theme } from '@lib/styles/componentsStyles';

export const inventoryStyles = {
  containerStyles: {
    sx: {
      backgroundColor: '#F9F9F9',
      paddingTop: '112px',
      pb: '124px',
      [theme.breakpoints.down('md')]: {
        paddingTop: '46px',
      },
    },
  },
  gridStyles: {
    gridTitle: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '40px',
        [theme.breakpoints.down('md')]: {
          textAlign: 'center',
        },
      },
    },
    gridAccardion: {
      sx: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('xl')]: {
          justifyContent: 'flex-start',
        },
        [theme.breakpoints.down('md')]: {
          justifyContent: 'center',
        },
      },
    },
  },
  boxAccardion: {
    sx: {
      maxWidth: '600px',
      [theme.breakpoints.down('xl')]: {
        paddingTop: '75px',
      },
      [theme.breakpoints.down('md')]: {
        paddingTop: '46px',
        maxWidth: '100%',
      },
    },
  },
  accordionStyles: {
    acardion: { sx: { boxShadow: 'none' } },
    accordionDetails: { sx: { display: 'flex', flexDirection: 'column', rowGap: '12px' } },
  },
};
