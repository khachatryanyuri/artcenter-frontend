export const paginationStyles = {
  textStyle: {
    sx: { marginRight: '8px' },
  },
  stackBox: {
    sx: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '16px',
      '@media (max-width: 420px)': {
        flexDirection: 'column',
        gap: '16px',
      },
    },
  },
};
