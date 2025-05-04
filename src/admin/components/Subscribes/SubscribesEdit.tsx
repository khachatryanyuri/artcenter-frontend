import React from 'react';
import { Edit, required, SimpleForm, TextInput, EditProps } from 'react-admin';

const SubscribesEdit = (props: EditProps) => (
  <Edit {...props} title="Edit Subscribes">
    <SimpleForm>
      <TextInput source="email" label="Email" validate={required()} />
    </SimpleForm>
  </Edit>
);

export default SubscribesEdit;
