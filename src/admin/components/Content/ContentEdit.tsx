import React, { Fragment } from 'react';
import { Edit, SimpleForm, SimpleShowLayout, TextField, EditProps, required } from 'react-admin';
import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';

const ContentEdit = (props: EditProps) => {
  const { languages } = useLanguages();

  return (
    <Edit {...props} title="Edit a Content">
      <SimpleShowLayout>
        <TextField source="page" label="page" />
        <TextField source="key" label="key" />
      </SimpleShowLayout>
      <SimpleForm>
        {languages.map((language) => (
          <Fragment key={language.id}>
            <RichTextInput
              label={`Title (${language.code})`}
              source={`title.${language.code}`}
              toolbar={<RichTextInputToolbar size="medium" />}
              validate={language.code === 'arm' ? required() : undefined}
            />
            <RichTextInput
              label={`Description (${language.code})`}
              source={`description.${language.code}`}
              toolbar={<RichTextInputToolbar size="medium" />}
            />
          </Fragment>
        ))}
      </SimpleForm>
    </Edit>
  );
};

export default ContentEdit;
