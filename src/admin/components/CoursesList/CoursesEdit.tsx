import React, { Fragment } from 'react';
import {
  SimpleForm,
  TextInput,
  Loading,
  DateInput,
  Edit,
  BooleanInput,
  ImageInput,
  required,
  EditProps,
  useRedirect,
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';
import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { dataProvider } from '@lib/src/admin/providers/dataProvider';
import { RECURSE } from '@lib/src/admin/interface/Recurce';
import CustomImageField from '@lib/src/admin/components/CropImages/customImageField';
import { ImageCropperModal } from '@lib/src/admin/components/CropImages/ImageCropperModal';
import { useImageHandling, useFormSubmission } from '@lib/src/admin/components/CropImages/useImageHandling';

const CoursesEdit = (props: EditProps) => {
  const { languages, isLoading } = useLanguages();
  const { selectedImages, isImageModalOpen, croppedImages, handleImageChange, handleImageCrop, setIsImageModalOpen } =
    useImageHandling({ multiple: true });
  const handleSubmit = useFormSubmission(dataProvider, RECURSE.COURSES, true);
  const redirect = useRedirect();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Edit title="Edit a Course" {...props}>
      <SimpleForm
        onSubmit={(values) => {
          handleSubmit(values, croppedImages);
          redirect('/courses');
        }}
      >
        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput
              source={`title.${language.code}`}
              label={`Title (${language.code})`}
              validate={language.code === 'arm' ? required() : undefined}
            />
            <RichTextInput
              source={`description.${language.code}`}
              label={`Description (${language.code})`}
              toolbar={<RichTextInputToolbar size="medium" />}
              validate={language.code === 'arm' ? required() : undefined}
            />
          </Fragment>
        ))}
        {languages.map((language) => (
          <Fragment key={language.id}>
            <ArrayInput label={`Entries (${language.code})`} source={`content.${language.code}`}>
              <SimpleFormIterator>
                <TextInput
                  label={`Title (${language.code})`}
                  source={`title`}
                  validate={language.code === 'arm' ? required() : undefined}
                />
                <RichTextInput
                  label={`Description (${language.code})`}
                  source={`description`}
                  toolbar={<RichTextInputToolbar size="medium" />}
                  validate={language.code === 'arm' ? required() : undefined}
                />
              </SimpleFormIterator>
            </ArrayInput>
          </Fragment>
        ))}
        {languages.map((language) => (
          <RichTextInput
            label={`Payment (${language.code})`}
            source={`payment.${language.code}`}
            toolbar={<RichTextInputToolbar size="medium" />}
            validate={language.code === 'arm' ? required() : undefined}
          />
        ))}

        <TextInput source="calendlyLink" label="Calendly link" validate={required()} />
        <DateInput source="startingDate" label="Starting Date" validate={required()} />
        <ImageInput
          source="picture"
          label="Picture"
          accept="image/*"
          multiple={true}
          onChange={(files) => handleImageChange(files as File[])}
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
            aspect={1}
          />
        )}
        <BooleanInput source="isCourseAvailable" label="Is course available" defaultValue={true} />
      </SimpleForm>
    </Edit>
  );
};

export default CoursesEdit;
