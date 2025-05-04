export const authSnackbarStyles = {
  contentPropsStyles: {
    style: { width: '400px', height: '500px', backgroundColor: '#f0f8ff', margin: 0, borderRadius: '32px 32px 0 0' },
  },
  anchorOriginStyles: { vertical: 'bottom' as const, horizontal: 'right' as const },
  boxStyles: {
    boxGlobal: { sx: { position: 'absolute', top: '0', left: '0' } },
    boxTitleGlobal: { sx: { padding: '16px' } },
    boxСocial: {
      sx: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '32px',
        borderBottom: '2px solid #c15927',
      },
    },
    boxСocialIcons: {
      sx: {
        padding: '8px',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.2)',
        },
      },
    },
    boxMore: { sx: { padding: '16px' } },
    boxButton: {
      sx: { display: 'flex', gap: '12px', paddingTop: '24px', alignItems: 'center', justifyContent: 'center' },
    },
  },
  imgStyles: { borderRadius: '32px 32px 0 0' },
  typographystyles: {
    typographySocial: { color: '#c15927' },
    typographySocialGlobal: { color: '#c15927', fontWeight: 500 },
  },
  closeIconStyles: {
    sx: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
      fontSize: '36px',
      color: '#e2e2e2',
      zIndex: 10000,
    },
  },
};
