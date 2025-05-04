import React, { Fragment } from 'react';
import { Create, SimpleForm, TextInput, Loading, ImageInput, ImageField, CreateProps } from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';

const StationsAndShopsCreate = (props: CreateProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Create title="Create a StationsAndShops" {...props}>
      <SimpleForm>
        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput label={`Name (${language.code})`} source={`name.${language.code}`} />
            <TextInput label={`Description (${language.code})`} source={`description.${language.code}`} />
            <TextInput label={`Address (${language.code})`} source={`address.${language.code}`} />
            <TextInput label={`Contacts (${language.code})`} source={`contacts.${language.code}`} />
          </Fragment>
        ))}
        <ImageInput source="picture" label="Picture" multiple={true} accept="image/*">
          <ImageField source="src" title="Picture" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default StationsAndShopsCreate;
