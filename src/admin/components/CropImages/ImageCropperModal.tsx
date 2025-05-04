import React, { useCallback, useEffect, useState } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Box, Button, Modal, ThemeProvider } from '@mui/material';
import { theme } from '@lib/styles/componentsStyles';
import { imageCropperModal } from '@lib/src/admin/components/CropImages/ImageCropperModalStyles';
import { ImageCropModalProps } from '@lib/src/admin/interface/ImageCropInterface';

const getCanvas = () => document.createElement('canvas');

const createCroppedImageUrl = (blob: Blob) => window.URL.createObjectURL(blob as Blob);

const {
  modalStyles,
  boxStyles: { buttonBox, globalBox },
  imgStyles,
} = imageCropperModal;

export const ImageCropperModal: React.FC<ImageCropModalProps> = ({
  onClose,
  imageSrc,
  isOpen,
  onSave,
  aspect,
  originalName,
}) => {
  const initialCropValue: Crop = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    unit: 'px',
  };
  const [crop, setCrop] = useState<Crop>(initialCropValue);
  const [image, setImage] = useState<React.ChangeEvent<HTMLImageElement> | null>();
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (isOpen) {
      setImage(null);
      setCrop(initialCropValue);
      setResult('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (image) {
      const width = image.target.width;
      const height = image.target.height;
      if (width < height * aspect) {
        const sideLength = width % 2 === 0 ? width : width - 1;
        setCrop({ x: 0, y: 0, width: Math.ceil(sideLength), height: Math.ceil(sideLength / aspect), unit: 'px' });
      } else {
        const sideHeight = height % 2 === 0 ? height : height - 1;
        setCrop({ x: 0, y: 0, width: Math.ceil(sideHeight * aspect), height: sideHeight, unit: 'px' });
      }
    }
  }, [image]);

  const handleSave = () => {
    onClose();
    onSave(result, originalName);
  };

  const getCroppedImg = async (image: HTMLImageElement, crop: Crop): Promise<File> => {
    const canvas = getCanvas();
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = Math.ceil(crop.width * scaleX);
    canvas.height = Math.ceil(crop.height * scaleY);
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY,
    );

    return new Promise((resolve: any) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            console.error('Failed to crop image.');
            resolve(null);
            return;
          }
          const croppedFile = new File([blob], originalName, { type: 'image/jpeg' });
          const blobUrl = createCroppedImageUrl(blob);
          resolve({ blobUrl, file: croppedFile });
        },
        'image/jpeg',
        0.75,
      );
    });
  };
  const makeClientCrop = useCallback(
    async (crop: Crop) => {
      if (image && crop.width && crop.height) {
        const croppedImageUrl = await getCroppedImg(image.target, crop);
        setResult(croppedImageUrl);
      }
    },
    [image, crop],
  );

  const onCropComplete = (crop: Crop) => {
    makeClientCrop(crop);
  };

  useEffect(() => {
    let timeoutId: any;
    if (image && crop && crop.width && crop.height && !result) {
      try {
        timeoutId = setTimeout(async () => {
          const croppedImageUrl = await getCroppedImg(image.target, crop);

          setResult(croppedImageUrl);
        }, 500);
      } catch {
        throw new Error('Damaged file');
      }
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [image, crop]);

  const handleImageLoad = (event: React.ChangeEvent<HTMLImageElement>) => {
    setImage(event);
  };
  return (
    <ThemeProvider theme={theme}>
      <Modal open={isOpen} disableAutoFocus disableEnforceFocus {...modalStyles}>
        <Box {...globalBox}>
          <ReactCrop crop={crop} onChange={setCrop} aspect={aspect} onComplete={onCropComplete}>
            <img src={imageSrc} onLoad={handleImageLoad} data-testid="cropped-image" {...imgStyles} />
          </ReactCrop>
          <Box {...buttonBox}>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
            <Button variant="contained" onClick={onClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};
