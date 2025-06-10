import React, { Fragment } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  Loading,
  EditProps,
  ImageField,
  SimpleFormIterator,
  ArrayInput,
  SelectArrayInput,
} from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';
import { useSubTypes } from '@lib/src/admin/subTypeStore/subTypeStore';

const TypeEdit = (props: EditProps) => {
  const { languages, isLoading } = useLanguages();
  const { subTypes, isLoadingSubTypes } = useSubTypes();

  if (isLoading || isLoadingSubTypes) {
    return <Loading />;
  }

  return (
    <Edit {...props} title="Edit Type Form">
      <SimpleForm>
        <TextInput source="key" label="Key" />

        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput label={`Title (${language.code})`} source={`title.${language.code}`} />
            <RichTextInput
              label={`Description (${language.code})`}
              source={`desc.${language.code}`}
              toolbar={<RichTextInputToolbar size="medium" />}
            />
          </Fragment>
        ))}

        <ImageInput source="picture" label="Picture" accept="image/*" multiple={false}>
          <ImageField source="src" title="Picture" />
        </ImageInput>

        <SelectArrayInput
          source="subTypes"
          label="Sub Types"
          choices={subTypes}
          optionText={(record) => `${record.title?.arm || record.title?.eng || record.key}`}
          optionValue="id"
          parse={(value) => value?.map((item: { id: any }) => (typeof item === 'object' ? item.id : item))}
          format={(value) => value?.map((item: { id: any }) => (typeof item === 'object' ? item.id : item))}
        />
      </SimpleForm>
    </Edit>
  );
};

export default TypeEdit;
