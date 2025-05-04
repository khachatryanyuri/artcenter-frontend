import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  Loading,
  required,
  EditProps,
  useRedirect,
  useNotify,
} from 'react-admin';
import { Fragment } from 'react';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { dataProvider } from '@lib/src/admin/providers/dataProvider';
import { RECURSE } from '@lib/src/admin/interface/Recurce';
import CustomImageField from '@lib/src/admin/components/CropImages/customImageField';
import { ImageCropperModal } from '@lib/src/admin/components/CropImages/ImageCropperModal';
import { useImageHandling, useFormSubmission } from '@lib/src/admin/components/CropImages/useImageHandling';
import { MAX_IMAGE_COUNT } from '@lib/src/constants';

const NewsEdit = (props: EditProps) => {
  const { languages, isLoading } = useLanguages();
  const { selectedImages, isImageModalOpen, croppedImages, handleImageChange, handleImageCrop, setIsImageModalOpen } =
    useImageHandling({ multiple: true });
  const handleSubmit = useFormSubmission(dataProvider, RECURSE.NEWS, true);
  const redirect = useRedirect();
  const notify = useNotify();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Edit {...props} title="Edit News">
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
          label="Picture"
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
    </Edit>
  );
};

export default NewsEdit;
