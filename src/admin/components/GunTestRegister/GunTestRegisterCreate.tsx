import React from 'react';
import { Create, SimpleForm, TextInput, CreateProps } from 'react-admin';

const GunTestRegisterCreate = (props: CreateProps) => {
  return (
    <Create title="Create a Gun Test Register" {...props}>
      <SimpleForm>
        <TextInput source="fullName" label="Full Name" />
        <TextInput source="phoneNumber" label="Phone Number" />
        <TextInput source="notes" label="Notes" />
      </SimpleForm>
    </Create>
  );
};

export default GunTestRegisterCreate;
