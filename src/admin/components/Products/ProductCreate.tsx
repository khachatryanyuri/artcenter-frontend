import React, { Fragment } from 'react';
import { Create, SimpleForm, TextInput, Loading, ImageInput, ImageField, CreateProps } from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';

const ProductCreate = (props: CreateProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Create title="Create a Product" {...props}>
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
        <ImageInput source="picture" label="Picture" multiple={true} accept="image/*">
          <ImageField source="src" title="Picture" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default ProductCreate;
