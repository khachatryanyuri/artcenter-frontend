import React, { Fragment } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  ImageInput,
  Loading,
  ImageField,
  EditProps,
} from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';

const StationsAndShopsEdit = (props: EditProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Edit {...props} title="StationsAndShops Application Form">
      <SimpleForm>
        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput label={`Name (${language.code})`} source={`name.${language.code}`} />
            <TextInput label={`Description (${language.code})`} source={`description.${language.code}`} />
            <TextInput label={`Address (${language.code})`} source={`address.${language.code}`} />
            <TextInput label={`Contacts (${language.code})`} source={`contacts.${language.code}`} />
          </Fragment>
        ))}
        <ArrayInput source="picture" label="Pictures">
          <SimpleFormIterator>
            <ImageInput source="picture" label="Picture" multiple={true} accept="image/*">
              <ImageField source="src" title="Picture" />
            </ImageInput>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default StationsAndShopsEdit;
