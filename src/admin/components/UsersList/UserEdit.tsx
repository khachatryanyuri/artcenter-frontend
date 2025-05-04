import React, { Fragment } from 'react';
import { Edit, Loading, required, SimpleForm, TextInput, EditProps } from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';

const UserEdit = (props: EditProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Edit {...props} title="Edit User Form">
      <SimpleForm>
        <TextInput source="email" label="Email" validate={required()} />
        <TextInput source="password" label="Password" validate={required()} />
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
          </Fragment>
        ))}
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
