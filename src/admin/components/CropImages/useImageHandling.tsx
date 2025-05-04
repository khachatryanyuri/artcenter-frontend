import { RECURSE } from '@lib/src/admin/interface/Recurce';
import { useState } from 'react';

export const useImageHandling = ({ multiple }: { multiple: boolean }) => {
  const [selectedImages, setSelectedImages] = useState<any>();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [croppedImages, setCroppedImages] = useState<any[] | any>([]);

  const handleImageChange = (files: File[] | File) => {
    if (files.length > croppedImages.length) {
      setSelectedImages((files as File[])[files.length - 1]);
      setIsImageModalOpen(true);
    } else if (typeof files === 'object') {
      setSelectedImages(files);
      setIsImageModalOpen(true);
    } else {
      setCroppedImages([...croppedImages]);
    }
  };

  const handleImageCrop = (croppedImageData: any, originalName: string) => {
    const data = { rawFile: croppedImageData.file, src: croppedImageData.blobUrl, title: originalName };

    multiple ? setCroppedImages([...croppedImages, data]) : setCroppedImages(data);
    setIsImageModalOpen(false);
  };

  return { selectedImages, isImageModalOpen, croppedImages, handleImageChange, handleImageCrop, setIsImageModalOpen };
};

export const useFormSubmission = (dataProvider: any, resurse: string, isEditMode = false) => {
  const handleSubmit = async (values: any, croppedImages: any[]) => {
    try {
      const data = {
        ...values,
        ...(resurse === RECURSE.NEWS ? { pictures: croppedImages } : { picture: croppedImages }),
      };
      isEditMode
        ? await dataProvider.update(resurse, { data, meta: undefined, id: data.id })
        : await dataProvider.create(resurse, { data, meta: undefined });
    } catch (error) {
      console.error('Error creating news:', error);
    }
  };

  return handleSubmit;
};
