import React, { Fragment } from 'react';
import {
  SimpleForm,
  TextInput,
  Loading,
  ImageInput,
  ImageField,
  Edit,
  EditProps,
  required,
  SelectInput,
} from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { MEMBERS_TYPE } from '@lib/src/constants';

const MembersEdit = (props: EditProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Edit title="Edit a Member" {...props}>
      <SimpleForm>
        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput
              label={`Name (${language.code})`}
              source={`name.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            />
            <TextInput
              label={`Surname (${language.code})`}
              source={`surname.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            />
            <TextInput
              label={`Position (${language.code})`}
              source={`position.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            />
            <TextInput
              label={`Description (${language.code})`}
              source={`description.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            />
          </Fragment>
        ))}
        <SelectInput source="type" choices={MEMBERS_TYPE} required />
        <ImageInput source="picture" label="Picture" multiple={true} accept="image/*">
          <ImageField source="src" title="Picture" />
        </ImageInput>
        <TextInput source="socialMedia.instagram" label="Instagram" />
        <TextInput source="socialMedia.x" label="X" />
        <TextInput source="socialMedia.facebook" label="Facebook" />
        <TextInput source="socialMedia.linkedIn" label="LinkedIn" />
      </SimpleForm>
    </Edit>
  );
};

export default MembersEdit;
