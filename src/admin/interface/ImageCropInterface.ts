interface CustomImageFieldProps {
  croppedImages: { src: string }[] | { src: string };
}

interface ImageCropModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | '';
  onSave: (croppedImageData: string, originalName: string) => void;
  aspect: number;
  originalName: string;
}

export type { CustomImageFieldProps, ImageCropModalProps };
