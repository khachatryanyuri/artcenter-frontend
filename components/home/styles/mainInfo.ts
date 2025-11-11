export const mainInfoStyles = {
  mainBox: {
    sx: {
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      boxShadow: '0 8px 32px rgba(42, 37, 64, 0.08)',
      padding: { xs: '32px 24px', md: '56px 48px' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',

      '& .MuiButton-root': {
        backgroundColor: 'accentOrange.main',
        alignSelf: 'center',
        '&:hover': {
          backgroundColor: 'accentOrange.dark',
        },
      },
    },
  },
};
