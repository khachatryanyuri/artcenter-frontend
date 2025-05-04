import * as React from 'react';
import { Button } from '@mui/material';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';

import { constants } from '@lib/components/userProfile/constants/constants';
import { fileUploadStyles, VisuallyHiddenInput } from '@lib/components/common/styles/fileUpload';

const {
  TEXTS: { UPLOAD_FILE },
} = constants;

const { iconStyles } = fileUploadStyles;

export default function FileLoad({ handleImageChange }: any) {
  return (
    <Button component="label" variant="contained" startIcon={<DownloadForOfflineOutlinedIcon {...iconStyles} />}>
      {UPLOAD_FILE}
      <VisuallyHiddenInput type="file" onChange={handleImageChange} />
    </Button>
  );
}
