import React from 'react';

import { Box, Typography } from '@mui/material';
import { CustomImageFieldProps } from '@lib/src/admin/interface/ImageCropInterface';
import { imageCropperModal } from '@lib/src/admin/components/CropImages/ImageCropperModalStyles';

const {
  cropImageStyle,
  boxStyles: { cropedImageBox },
} = imageCropperModal;

const CustomImageField: React.FC<CustomImageFieldProps> = ({ croppedImages }) => {
  return (
    <>
      <Typography>Crop pictures</Typography>
      <Box {...cropedImageBox}>
        {Array.isArray(croppedImages) ? (
          croppedImages.map((croppedImage, index) => (
            <Box key={index}>
              <img src={croppedImage.src} alt={`Cropped ${index}`} {...cropImageStyle} />
            </Box>
          ))
        ) : (
          <Box>
            <img src={croppedImages.src} alt={`Cropped`} {...cropImageStyle} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default CustomImageField;
