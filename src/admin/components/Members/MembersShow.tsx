import React from 'react';
import { Show, SimpleShowLayout, TextField, ImageField, ShowProps } from 'react-admin';

const MembersShow = (props: ShowProps) => (
  <Show {...props} title="Application Form Details">
    <SimpleShowLayout>
      <TextField source="name.eng" label="Name(eng)" />
      <TextField source="name.arm" label="Name(arm)" />
      <TextField source="name.rus" label="Name(rus)" />

      <TextField source="surname.eng" label="Surname(eng)" />
      <TextField source="surname.arm" label="Surname(arm)" />
      <TextField source="surname.rus" label="Surname(rus)" />

      <TextField source="position.eng" label="Position(eng)" />
      <TextField source="position.arm" label="Position(arm)" />
      <TextField source="position.rus" label="Position(rus)" />

      <ImageField source="picture" title="Application Form picture" />

      <TextField source="description.eng" label="Description(eng)" />
      <TextField source="description.arm" label="Description(arm)" />
      <TextField source="description.rus" label="Description(rus)" />

      <TextField source="type" label="Type" />

      <TextField source="socialMedia.instagram" label="Instagram" />
      <TextField source="socialMedia.x" label="X" />
      <TextField source="socialMedia.facebook" label="Facebook" />
      <TextField source="socialMedia.linkedIn" label="LinkedIn" />
      <TextField source="createdAt" label="Created At" />
      <TextField source="updatedAt" label="Updated At" />
    </SimpleShowLayout>
  </Show>
);

export default MembersShow;
