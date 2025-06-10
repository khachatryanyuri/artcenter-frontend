import React, { Fragment, useMemo } from 'react';
import {
  SimpleForm,
  TextInput,
  Loading,
  Edit,
  ImageInput,
  required,
  EditProps,
  ImageField,
  SelectInput,
} from 'react-admin';
import { RichTextInput, RichTextInputToolbar } from 'ra-input-rich-text';
import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { useSubTypes } from '@lib/src/admin/subTypeStore/subTypeStore';
import { useFormContext, useWatch } from 'react-hook-form';
import { TYPE_SELECT_INPUT } from '@lib/src/constants';

const DependentSelectInputs = ({ subTypes }: { subTypes: any[] }) => {
  const { control } = useFormContext();

  // Watching subType key (selected in first select)
  const selectedSubTypeKey = useWatch({ control, name: 'subTypeKey' });

  const selectedSubType = useMemo(() => {
    return subTypes.find((s) => s.key === selectedSubTypeKey);
  }, [selectedSubTypeKey, subTypes]);

  const typeChoices = useMemo(() => {
    return (
      selectedSubType?.type?.map((t: { key: string; name: { ru?: string; en?: string } }) => ({
        id: t.key,
        name: t.name?.ru || t.name?.en || t.key,
      })) || []
    );
  }, [selectedSubType]);

  return (
    <>
      <SelectInput
        source="subTypeKey" // <-- главное исправление
        label="Sub Type"
        choices={subTypes}
        optionText={(record) => `${record.title?.ru || record.title?.en || record.key}`}
        optionValue="key"
        fullWidth
      />

      <SelectInput
        source="typeKey" // <-- ключ выбранного type из выбранного subType
        label="Type"
        choices={typeChoices}
        optionText="name"
        optionValue="id"
        disabled={typeChoices.length === 0}
        fullWidth
      />
    </>
  );
};

const CoursesEdit = (props: EditProps) => {
  const { languages, isLoading } = useLanguages();
  const { subTypes, isLoadingSubTypes } = useSubTypes();

  if (isLoading || isLoadingSubTypes) {
    return <Loading />;
  }

  return (
    <Edit title="Edit a Course" {...props}>
      <SimpleForm>
        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput label={`Title (${language.code})`} source={`title.${language.code}`} fullWidth />
            <RichTextInput
              label={`Description (${language.code})`}
              source={`description.${language.code}`}
              toolbar={<RichTextInputToolbar size="medium" />}
              validate={language.code === 'arm' ? required() : undefined}
            />
          </Fragment>
        ))}

        {/* Сохраняем старое изображение (если нужно) */}
        <ImageField source="picture" title="Picture" />

        <ImageInput source="picture" label="Upload New Picture" accept="image/*" multiple={false}>
          <ImageField source="src" title="Picture" />
        </ImageInput>

        <SelectInput source="typesKey" label="Key" choices={TYPE_SELECT_INPUT} required fullWidth />

        <DependentSelectInputs subTypes={subTypes} />
      </SimpleForm>
    </Edit>
  );
};

export default CoursesEdit;
