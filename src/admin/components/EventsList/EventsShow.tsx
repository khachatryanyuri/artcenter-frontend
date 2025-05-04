import React from 'react';
import { DateField, Show, SimpleShowLayout, TextField, ShowProps } from 'react-admin';

const EventsShow = (props: ShowProps) => (
  <Show {...props} title="Events Form Details">
    <SimpleShowLayout>
      <TextField source="title.eng" label="Title(eng)" />
      <TextField source="title.arm" label="Title(arm)" />
      <TextField source="title.rus" label="Title(rus)" />

      <TextField source="description.eng" label="Description(eng)" />
      <TextField source="description.arm" label="Description(arm)" />
      <TextField source="description.rus" label="Description(rus)" />

      <TextField source="duration" label="duration" />
      <DateField source="startingDate" label="Starting Date" />
      <TextField source="maximumParticipants" label="Maximum Participants" />

      <TextField source="venue.eng" label="Venue(eng)" />
      <TextField source="venue.arm" label="Venue(arm)" />
      <TextField source="venue.rus" label="Venue(rus)" />
      <TextField source="createdAt" label="Created At" />
      <TextField source="updatedAt" label="Updated At" />
    </SimpleShowLayout>
  </Show>
);

export default EventsShow;
