import React, { Fragment } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  DateInput,
  ImageInput,
  ImageField,
  Loading,
  required,
  EditProps,
} from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';

const ApplicationFormEdit = (props: EditProps) => {
  const { languages, isLoading } = useLanguages();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Edit {...props} title="Edit Application Form">
      <SimpleForm>
        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput
              label={`FullName (${language.code})`}
              source={`fullName.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            />
            <TextInput
              label={`Preferred Communication Method(${language.code})`}
              source={`preferredCommunicationMethod.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            />
            <TextInput
              label={`Weapon Name (${language.code})`}
              source={`weaponName.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            />
            <TextInput
              label={`Weapon Caliber (${language.code})`}
              source={`weaponCaliber.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            />
            <TextInput
              label={`How You Know (${language.code})`}
              source={`howYouKnow.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            />
            <TextInput
              label={`Reason to Join (${language.code})`}
              source={`reasonToJoin.${language.code}`}
              validate={language.code === 'arm' ? required() : undefined}
            />
          </Fragment>
        ))}
        <TextInput source="email" label="Email" validate={required()} />
        <TextInput source="phoneNumber" label="Phone Number" validate={required()} />
        <DateInput source="birthday" label="Birthday" validate={required()} />
        <BooleanInput source="haveWeapon" label="have Weapon" />
        <BooleanInput source="familiarizedWithCharter" label="Familiarized with Charter" />
        <ImageField source="picture" label="Application Form Picture" title="Application Form Picture" />
        <ImageInput source="picture" label="Picture" accept="image/*">
          <ImageField source="src" title="Picture" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export default ApplicationFormEdit;
