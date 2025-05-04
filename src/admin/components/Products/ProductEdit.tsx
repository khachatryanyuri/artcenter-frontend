import React, { Fragment } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  ImageInput,
  Loading,
  EditProps,
} from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';

const ProductEdit = (props: EditProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Edit {...props} title="Edit Product Form">
      <SimpleForm>
        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput label={`Type (${language.code})`} source={`type.${language.code}`} />
            <TextInput label={`Name (${language.code})`} source={`name.${language.code}`} />
            <TextInput label={`Model (${language.code})`} source={`model.${language.code}`} />
            <TextInput label={`Info (${language.code})`} source={`info.${language.code}`} />
          </Fragment>
        ))}
        <TextInput source="size" label="Size" />
        <TextInput source="price" label="Price" />
        <ArrayInput source="picture" label="Pictures">
          <SimpleFormIterator>
            <ImageInput source="url" label="Change Image" accept="image/*" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default ProductEdit;
