import React, { Fragment } from 'react';
import { Create, SimpleForm, TextInput, Loading, DateInput, CreateProps } from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';

const EventsCreate = (props: CreateProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Create title="Create a Events" {...props}>
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
    </Create>
  );
};

export default EventsCreate;
