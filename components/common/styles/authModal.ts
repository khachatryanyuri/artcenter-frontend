export const authModalStyles = {
  globalBox: {
    sx: {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      maxWidth: '800px',
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      padding: '34px 106px',
      '@media (max-width:600px)': {
        width: '95%',
        p: 3,
      },
    },
  },
  iconBox: { sx: { width: '100%', display: 'flex', justifyContent: 'flex-end' } },
  iconStyles: {
    sx: {
      cursor: 'pointer',
      margin: '-12px -84px',
      '@media (max-width:600px)': {
        margin: '-16px',
      },
      color: '#9F9F9F',
    },
  },
  typographyTitle: {
    sx: { paddingBottom: '32px', fontSize: '30px' },
  },
};
