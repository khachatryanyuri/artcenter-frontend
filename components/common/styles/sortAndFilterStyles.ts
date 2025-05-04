export const sortAndFilterStyles = {
  boxStyles: {
    mainBox: { sx: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' } },
    dialogBox: {
      sx: {
        '& .MuiDialog-paper': {
          borderRadius: '20px',
        },
      },
    },
    dialogContentBox: {
      sx: { display: 'flex', flexWrap: 'wrap' },
    },
    formControl: {
      sx: {
        m: 1,
        minWidth: 120,
        width: '50%',
        paddingBottom: '12px',
      },
    },
  },
  textStyles: {
    dialogTitle: {
      sx: {
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '24px',
        color: '#c15927',
        paddingTop: '32px',
        paddingBottom: '42px',
      },
    },
  },
};
