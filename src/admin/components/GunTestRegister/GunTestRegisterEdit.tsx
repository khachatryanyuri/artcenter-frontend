import React from 'react';
import { Edit, SimpleForm, TextInput, EditProps } from 'react-admin';

const GunTestRegisterEdit = (props: EditProps) => {
  return (
    <Edit {...props} title="Edit Gun Test Register">
      <SimpleForm>
        <TextInput source="fullName" label="Full Name" />
        <TextInput source="phoneNumber" label="Phone Number" />
        <TextInput source="notes" label="Notes" />
      </SimpleForm>
    </Edit>
  );
};

export default GunTestRegisterEdit;
