import React from 'react';
import { Edit, SimpleForm, TextInput, EditProps, required } from 'react-admin';

const ContactEdit = (props: EditProps) => {
  return (
    <Edit {...props} title="Edit Contact">
      <SimpleForm>
        <TextInput label="Name" source="name" validate={required()} />
        <TextInput label="Letter" source="letter" validate={required()} />
        <TextInput label="Email" source="email" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default ContactEdit;
