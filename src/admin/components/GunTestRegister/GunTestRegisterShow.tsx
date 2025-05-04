import React from 'react';
import { Show, SimpleShowLayout, TextField, ShowProps } from 'react-admin';

const GunTestRegisterShow = (props: ShowProps) => (
  <Show {...props} title="Gun Test Register Details">
    <SimpleShowLayout>
      <TextField source="fullName" label="Full Name" />
      <TextField source="phoneNumber" label="Phone Number" />
      <TextField source="notes" label="Notes" />
    </SimpleShowLayout>
  </Show>
);

export default GunTestRegisterShow;
