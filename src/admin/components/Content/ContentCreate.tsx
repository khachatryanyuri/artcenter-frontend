import React, { ChangeEvent, Fragment, useState } from 'react';
import {
  Create,
  SimpleForm,
  Loading,
  ReferenceInput,
  SelectInput,
  required,
  CreateProps,
  RaRecord,
  Identifier,
} from 'react-admin';
import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { dataProvider } from '@lib/src/admin/providers/dataProvider';
import { GetKeysResponse } from '@lib/src/admin/interface/Content';

const ContentCreate = (props: CreateProps) => {
  const { languages, isLoading } = useLanguages();
  const [keys, setKeys] = useState<string[]>([]);

  if (isLoading) {
    return <Loading />;
  }

  const getKeys = async (name: string) => {
    const response: GetKeysResponse = await dataProvider.getList('pages', {
      pagination: { page: 1, perPage: 100 },
      sort: { field: 'title', order: 'ASC' },
      filter: { name },
    });
    setKeys(response.data[0]?.keys);
  };

  const handleChange = (e: RaRecord<Identifier> | ChangeEvent<HTMLInputElement>) => {
    getKeys(e.target.value);
  };
  return (
    <Create title="Create a Content" {...props}>
      <SimpleForm>
        <ReferenceInput label="Pages" source="page" reference="pages" perPage={100}>
          <SelectInput optionText="name" optionValue="name" onChange={handleChange} validate={[required()]} />
        </ReferenceInput>

        <SelectInput
          source="key"
          choices={keys.map((key) => {
            return { key };
          })}
          optionText="key"
          optionValue="key"
          validate={[required()]}
        />
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
    </Create>
  );
};

export default ContentCreate;
