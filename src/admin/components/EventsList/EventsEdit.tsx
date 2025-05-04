import React, { Fragment } from 'react';
import { DateInput, Edit, SimpleForm, TextInput, EditProps } from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';

const CoursesEdit = (props: EditProps) => {
  const { languages, isLoading } = useLanguages();

  return (
    <Edit {...props} title="Edit Application Form">
      <SimpleForm>
        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput label={`Title (${language.code})`} source={`title.${language.code}`} />
            <TextInput label={`Description (${language.code})`} source={`description.${language.code}`} />
            <TextInput label={`Venue (${language.code})`} source={`venue.${language.code}`} />
          </Fragment>
        ))}

        <TextInput source="duration" label="duration" />
        <DateInput source="startingDate" label="Starting Date" />
        <TextInput source="maximumParticipants" label="Maximum Participants" />
      </SimpleForm>
    </Edit>
  );
};

export default CoursesEdit;
