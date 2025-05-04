import React, { ChangeEvent, Fragment, useState } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  Loading,
  BooleanInput,
  SelectInput,
  RaRecord,
  SimpleFormIterator,
  ArrayInput,
  CreateProps,
  required,
  useRedirect,
  ImageInput,
} from 'react-admin';
import { dataProvider } from '@lib/src/admin/providers/dataProvider';

import { GIFT_CARDS, SERVICES_TYPE, SHOOTING } from '@lib/src/constants';
import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { useFormSubmission, useImageHandling } from '@lib/src/admin/components/CropImages/useImageHandling';
import { RECURSE } from '@lib/src/admin/interface/Recurce';
import { ImageCropperModal } from '@lib/src/admin/components/CropImages/ImageCropperModal';
import CustomImageField from '@lib/src/admin/components/CropImages/customImageField';

const CoursesService = (props: CreateProps) => {
  const { languages, isLoading } = useLanguages();
  const [requiresPayment, setRequiresPayment] = useState(false);
  const [haveDurations, setHaveDuration] = useState(true);

  const { selectedImages, isImageModalOpen, croppedImages, handleImageChange, handleImageCrop, setIsImageModalOpen } =
    useImageHandling({ multiple: true });
  const handleSubmit = useFormSubmission(dataProvider, RECURSE.SERVICES);
  const redirect = useRedirect();

  if (isLoading) {
    return <Loading />;
  }

  const handleRequiresPaymentChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    setRequiresPayment(event.target.checked);
  };

  const handleSelectType = (event: ChangeEvent<HTMLInputElement> | RaRecord) => {
    event.target.value === GIFT_CARDS || event.target.value === SHOOTING
      ? setHaveDuration(false)
      : setHaveDuration(true);
  };

  return (
    <Create title="Create a Service" {...props}>
      <SimpleForm
        onSubmit={(values) => {
          handleSubmit(values, croppedImages);
          redirect('/services');
        }}
      >
        <SelectInput source="type" choices={SERVICES_TYPE} onChange={handleSelectType} required />
        <BooleanInput source="requiresPayment" label="Requires payment" onChange={handleRequiresPaymentChange} />
        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput
              label={`Title (${language.code})`}
              source={`title.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            />
            <ArrayInput
              label={`Description (${language.code})`}
              source={`description.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            >
              <SimpleFormIterator inline>
                <TextInput source={''} validate={language.code === 'arm' ? required() : undefined} />
              </SimpleFormIterator>
            </ArrayInput>
            {haveDurations && (
              <TextInput
                label={`Duration (${language.code})`}
                source={`duration.${language.code}`}
                validate={language.code === 'arm' ? required() : undefined}
              />
            )}
            {requiresPayment && (
              <TextInput
                label={`Service Cost (${language.code})`}
                source={`serviceCost.${language.code}`}
                validate={language.code === 'arm' ? required() : undefined}
              />
            )}
          </Fragment>
        ))}
        <TextInput source="serviceManagerEmail" label="Service manager email" validate={required()} />
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
      </SimpleForm>
    </Create>
  );
};

export default CoursesService;
