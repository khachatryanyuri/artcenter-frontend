import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const DiscountPerRoleCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="role" label="Role" />
      <TextInput source="percent" label="Percent" />
      <TextInput source="type" label="Type" />
    </SimpleForm>
  </Create>
);

export default DiscountPerRoleCreate;
