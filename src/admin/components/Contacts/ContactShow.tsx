import React from 'react';
import { Show, SimpleShowLayout, TextField, ShowProps } from 'react-admin';

const ContactShow = (props: ShowProps) => (
  <Show {...props} title="Contact Details">
    <SimpleShowLayout>
      <TextField source="name" label="Tame" />
      <TextField source="email" label="Email" />
      <TextField source="letter" label="Letter" />
      <TextField source="createdAt" label="Created At" />
      <TextField source="updatedAt" label="Updated At" />
    </SimpleShowLayout>
  </Show>
);

export default ContactShow;
