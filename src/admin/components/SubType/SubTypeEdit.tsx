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
} from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';

const SubTypeEdit = (props: EditProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Edit {...props} title="Edit SubType Form">
      <SimpleForm>
        <TextInput source="key" label="Key" />

        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput label={`Title (${language.code})`} source={`title.${language.code}`} />
            <RichTextInput
              label={`Description (${language.code}))`}
              source={`desc.${language.code}`}
              toolbar={<RichTextInputToolbar size="medium" />}
            />
          </Fragment>
        ))}

        <ArrayInput source="type" label="Types">
          <SimpleFormIterator inline>
            <TextInput source="key" label="Type Key" />
            {languages.map((language) => (
              <TextInput key={language.id} label={`Type Name (${language.code})`} source={`name.${language.code}`} />
            ))}
          </SimpleFormIterator>
        </ArrayInput>
        <ImageInput
          source="picture"
          label="Picture"
          accept="image/*"
          multiple={false} // model expects a single string
        >
          <ImageField source="src" title="Picture" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export default SubTypeEdit;
