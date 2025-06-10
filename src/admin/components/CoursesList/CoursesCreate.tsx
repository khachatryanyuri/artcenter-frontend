import React, { Fragment } from 'react';
import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';
import {
  Create,
  SimpleForm,
  TextInput,
  Loading,
  ImageInput,
  required,
  CreateProps,
  SelectInput,
  ImageField,
} from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { TYPE_SELECT_INPUT } from '@lib/src/constants';
import { useSubTypes } from '@lib/src/admin/subTypeStore/subTypeStore';

import { useWatch, useFormContext } from 'react-hook-form';
import { useMemo } from 'react';

const DependentSelectInputs = ({ subTypes }: { subTypes: any[] }) => {
  const { control } = useFormContext();

  const selectedSubTypeKey = useWatch({ control, name: 'subTypesKey' });

  const selectedSubType = useMemo(() => {
    return subTypes.find((s) => s.key === selectedSubTypeKey);
  }, [selectedSubTypeKey, subTypes]);

  const typeChoices = useMemo(() => {
    return (
      selectedSubType?.type?.map((t: { key: any; name: { ru: any; en: any } }) => ({
        id: t.key,
        name: t.name?.ru || t.name?.en || t.key,
      })) || []
    );
  }, [selectedSubType]);

  return (
    <>
      <SelectInput
        source="subTypesKey"
        label="Sub Types"
        choices={subTypes}
        optionText={(record) => `${record.title?.ru || record.title?.en || record.key}`}
        optionValue="key"
      />
      <SelectInput source="subTypesThemeKey" label="Type" choices={typeChoices} optionText="name" optionValue="id" />
    </>
  );
};

const CoursesCreate = (props: CreateProps) => {
  const { languages, isLoading } = useLanguages();
  const { subTypes, isLoadingSubTypes } = useSubTypes();

  if (isLoading || isLoadingSubTypes) {
    return <Loading />;
  }

  return (
    <Create title="Create a Course" {...props}>
      <SimpleForm>
        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput label={`Title (${language.code})`} source={`title.${language.code}`} />
            <RichTextInput
              label={`Description (${language.code})`}
              source={`description.${language.code}`}
              toolbar={<RichTextInputToolbar size="medium" />}
              validate={language.code === 'arm' ? required() : undefined}
            />
          </Fragment>
        ))}

        <ImageInput source="picture" label="Picture" accept="image/*" validate={required()} multiple={false}>
          <ImageField source="src" title="Picture" />
        </ImageInput>
        <SelectInput source="typesKey" label="Key" choices={TYPE_SELECT_INPUT} required />

        <DependentSelectInputs subTypes={subTypes} />
      </SimpleForm>
    </Create>
  );
};

export default CoursesCreate;
