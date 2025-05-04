import React, { Fragment } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  Loading,
  ImageInput,
  useRedirect,
  required,
  CreateProps,
  useNotify,
} from 'react-admin';
import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { ImageCropperModal } from '@lib/src/admin/components/CropImages/ImageCropperModal';
import { dataProvider } from '@lib/src/admin/providers/dataProvider';
import { useImageHandling, useFormSubmission } from '@lib/src/admin/components/CropImages/useImageHandling';
import CustomImageField from '@lib/src/admin/components/CropImages/customImageField';
import { RECURSE } from '@lib/src/admin/interface/Recurce';
import { MAX_IMAGE_COUNT } from '@lib/src/constants';

const NewsCreate = (props: CreateProps) => {
  const { languages, isLoading } = useLanguages();
  const { selectedImages, isImageModalOpen, croppedImages, handleImageChange, handleImageCrop, setIsImageModalOpen } =
    useImageHandling({ multiple: true });
  const handleSubmit = useFormSubmission(dataProvider, RECURSE.NEWS);
  const redirect = useRedirect();
  const notify = useNotify();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Create title="Create a News" {...props}>
      <SimpleForm
        onSubmit={(values) => {
          if (croppedImages.length !== 0 && croppedImages.length < MAX_IMAGE_COUNT) {
            notify(`You must upload at least ${MAX_IMAGE_COUNT} images.`);
            return;
          }
          handleSubmit(values, croppedImages);
          redirect('/news');
        }}
      >
        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput
              label={`Title (${language.code})`}
              source={`title.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            />
            <RichTextInput
              label={`News (${language.code})`}
              source={`news.${language.code}`}
              toolbar={<RichTextInputToolbar size="medium" />}
              validate={language.code === 'arm' ? required() : undefined}
            />
            <TextInput
              label={`Author (${language.code})`}
              source={`author.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            />
          </Fragment>
        ))}
        <ImageInput
          source="pictures"
          label="Pictures"
          accept="image/*"
          multiple={true}
          onChange={(files) => {
            if (croppedImages.length > MAX_IMAGE_COUNT - 1) {
              notify(`You can only upload up to ${MAX_IMAGE_COUNT} images.`);
              return;
            }
            return handleImageChange(files as File[]);
          }}
          validate={required()}
        />
        <CustomImageField croppedImages={croppedImages} />
        {selectedImages && (
          <ImageCropperModal
            isOpen={isImageModalOpen}
            onClose={() => setIsImageModalOpen(false)}
            imageSrc={URL.createObjectURL(selectedImages)}
            originalName={selectedImages.name}
            onSave={handleImageCrop}
            aspect={croppedImages.length ? 1 / 1 : 2.4 / 1}
          />
        )}
      </SimpleForm>
    </Create>
  );
};

export default NewsCreate;
