import React from 'react';
import { Show, SimpleShowLayout, TextField, ShowProps } from 'react-admin';

const SubscribesShow = (props: ShowProps) => (
  <Show {...props} title="Subscribes Details">
    <SimpleShowLayout>
      <TextField source="id" label="Id number" />
      <TextField source="email" label="Email" />
      <TextField source="createdAt" label="Created At" />
      <TextField source="updatedAt" label="Updated At" />
    </SimpleShowLayout>
  </Show>
);

export default SubscribesShow;
