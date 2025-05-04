import React from 'react';
import { Edit, SimpleForm, TextInput, EditProps } from 'react-admin';

const DiscountPerRoleEdit = (props: EditProps) => (
  <Edit {...props} title="Edit Discount Per Role Form">
    <SimpleForm>
      <TextInput source="role" label="Role" />
      <TextInput source="percent" label="Percent" />
      <TextInput source="type" label="Type" />
    </SimpleForm>
  </Edit>
);

export default DiscountPerRoleEdit;
