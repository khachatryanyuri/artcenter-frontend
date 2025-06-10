import React, { Fragment } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  Loading,
  ImageInput,
  ImageField,
  CreateProps,
  required,
  SelectArrayInput,
  SelectInput,
} from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { useSubTypes } from '@lib/src/admin/subTypeStore/subTypeStore';
import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';
import { TYPE_SELECT_INPUT } from '@lib/src/constants';

const TypeCreate = (props: CreateProps) => {
  const { languages, isLoading } = useLanguages();
  const { subTypes, isLoadingSubTypes } = useSubTypes();

  if (isLoading || isLoadingSubTypes) {
    return <Loading />;
  }

  return (
    <Create title="Create Type" {...props}>
      <SimpleForm>
        <SelectInput source="key" label="Key" choices={TYPE_SELECT_INPUT} required />

        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput label={`Title (${language.code})`} source={`title.${language.code}`} />
            <RichTextInput
              label={`Description (${language.code})`}
              source={`desc.${language.code}`}
              toolbar={<RichTextInputToolbar size="medium" />}
              validate={language.code === 'arm' ? required() : undefined}
            />
          </Fragment>
        ))}

        <ImageInput source="picture" label="Picture" accept="image/*" validate={required()} multiple={false}>
          <ImageField source="src" title="Picture" />
        </ImageInput>

        <SelectArrayInput
          source="subTypes"
          label="Sub Types"
          choices={subTypes}
          optionText={(record) => `${record.title?.arm || record.title?.eng || record.key}`}
          optionValue="id"
        />
      </SimpleForm>
    </Create>
  );
};

export default TypeCreate;
