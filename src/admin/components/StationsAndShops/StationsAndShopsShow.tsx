import React from 'react';
import { ImageField, Show, SimpleShowLayout, TextField, ShowProps } from 'react-admin';

const StationsAndShopsShow = (props: ShowProps) => (
  <Show {...props} title="StationsAndShops Form Details">
    <SimpleShowLayout>
      <TextField source="name.eng" label="Name(eng)" />
      <TextField source="description.eng" label="Description(eng)" />
      <TextField source="address.eng" label="Address(eng)" />
      <TextField source="contacts.eng" label="Contacts(eng)" />

      <TextField source="name.arm" label="Name(arm)" />
      <TextField source="description.arm" label="Description(arm)" />
      <TextField source="address.arm" label="Address(arm)" />
      <TextField source="contacts.arm" label="Contacts(arm)" />

      <TextField source="name.rus" label="Name(rus)" />
      <TextField source="description.rus" label="Description(rus)" />
      <TextField source="address.rus" label="Address(rus)" />
      <TextField source="contacts.rus" label="Contacts(rus)" />

      <ImageField source="pictures" src="url" title="desc" />
      <TextField source="createdAt" label="Created At" />
      <TextField source="updatedAt" label="Updated At" />
    </SimpleShowLayout>
  </Show>
);

export default StationsAndShopsShow;
