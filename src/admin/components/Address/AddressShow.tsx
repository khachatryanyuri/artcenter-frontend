import React from 'react';
import { Show, SimpleShowLayout, TextField, ShowProps } from 'react-admin';

const AddressShow = (props: ShowProps) => (
  <Show {...props} title="Address">
    <SimpleShowLayout>
      <TextField source="type" label="Type" />
      <TextField source="coordinates" label="coordinates" />
      <TextField source="popupText" label="Popup text" />
    </SimpleShowLayout>
  </Show>
);

export default AddressShow;
