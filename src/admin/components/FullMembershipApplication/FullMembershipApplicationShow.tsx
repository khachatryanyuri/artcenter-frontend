import React from 'react';
import { Show, SimpleShowLayout, TextField, ShowProps, FileField } from 'react-admin';

const ApplicationFormShow = (props: ShowProps) => (
  <Show {...props} title="Full Membership Application Form Details">
    <SimpleShowLayout>
      <TextField source="fullName" label="Full Name" />
      <TextField source="email" label="Email" />
      <TextField source="phoneNumber" label="Phone Number" />
      <FileField source="files[0]" label="Full Membership Application" title="Full Membership Application" />
      <FileField source="files[1]" label="Weapon resolution" title="Weapon resolution" />
    </SimpleShowLayout>
  </Show>
);

export default ApplicationFormShow;
