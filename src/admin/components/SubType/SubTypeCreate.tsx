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
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';

const SubTypeCreate = (props: CreateProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Create title="Create SubType" {...props}>
      <SimpleForm>
        <TextInput source="key" label="Key" validate={required()} />

        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput label={`Title (${language.code})`} source={`title.${language.code}`} />
            <RichTextInput
              label={`Description (${language.code}))`}
              source={`desc.${language.code}`}
              toolbar={<RichTextInputToolbar size="medium" />}
              validate={language.code === 'arm' ? required() : undefined}
            />
          </Fragment>
        ))}

        <ArrayInput source="type" label="Types">
          <SimpleFormIterator inline>
            <TextInput source="key" label="Type Key" validate={required()} />
            {languages.map((language) => (
              <TextInput
                key={language.id}
                label={`Type Name (${language.code})`}
                source={`name.${language.code}`}
                validate={required()}
              />
            ))}
          </SimpleFormIterator>
        </ArrayInput>
        <ImageInput source="picture" label="Picture" accept="image/*" validate={required()} multiple={false}>
          <ImageField source="src" title="Picture" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default SubTypeCreate;
