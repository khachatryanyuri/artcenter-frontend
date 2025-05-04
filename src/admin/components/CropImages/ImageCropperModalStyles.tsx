export const imageCropperModal = {
  modalStyles: {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#fff',
      overflowY: 'auto',
    },
  },
  imgStyles: { style: { height: 'auto', maxHeight: '100vh' } },
  boxStyles: {
    globalBox: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    buttonBox: {
      sx: { display: 'flex', justifyContent: 'center', gap: '8px', width: '126px', margin: '24px 0' },
    },
    cropedImageBox: {
      sx: { display: 'flex', gap: '36px', marginTop: '48px' },
    },
  },
  cropImageStyle: {
    style: {
      width: '100%',
      height: 'auto',
      maxWidth: '200px',
      maxHeight: '100px',
    },
  },
};
