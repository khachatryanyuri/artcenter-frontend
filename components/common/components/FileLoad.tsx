import * as React from 'react';
import { Button } from '@mui/material';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';

import { fileUploadStyles, VisuallyHiddenInput } from '@lib/components/common/styles/fileUpload';

const { iconStyles } = fileUploadStyles;

export default function FileLoad({ handleImageChange }: any) {
  return (
    <Button component="label" variant="contained" startIcon={<DownloadForOfflineOutlinedIcon {...iconStyles} />}>
      Վերբեռնել նկարը
      <VisuallyHiddenInput type="file" onChange={handleImageChange} />
    </Button>
  );
}
