import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';

import { snackbarsStyles } from '@lib/components/common/styles/snackbarsStyles';
import { IAlert } from '@lib/services/interface/common/snackbar/snackbar';

const { mainBoxStyles, alertStyles } = snackbarsStyles;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Snackbars({ text, statusCode }: { text: string; statusCode: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, [text]);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const alert: IAlert = {
    '200': 'success',
    '201': 'success',
    '400': 'error',
    '500': 'error',
  };

  return (
    <Stack {...mainBoxStyles} spacing={2}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert[statusCode] as AlertColor | undefined} {...alertStyles}>
          {text}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
