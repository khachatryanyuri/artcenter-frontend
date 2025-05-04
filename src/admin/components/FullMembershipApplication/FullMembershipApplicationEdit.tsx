import React from 'react';
import { Edit, SimpleForm, TextInput, FileInput, EditProps, required } from 'react-admin';

const ApplicationFormEdit = (props: EditProps) => {
  return (
    <Edit {...props} title="Edit Application Form">
      <SimpleForm>
        <TextInput source="fullName" label="Full Name" validate={required()} />
        <TextInput source="email" label="Email" validate={required()} />
        <TextInput source="phoneNumber" label="Phone Number" validate={required()} />
        <FileInput source="files" multiple label="Full Membership Application" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default ApplicationFormEdit;
