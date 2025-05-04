import React from 'react';
import { ArrayField, Datagrid, Show, SimpleShowLayout, TextField, ShowProps } from 'react-admin';

const UserShow = (props: ShowProps) => (
  <Show {...props} title="User Form Details">
    <SimpleShowLayout>
      <TextField source="id" label="Id number" />
      <TextField source="email" label="Email" />
      <TextField source="password" label="Password" />
      <TextField source="name.eng" label="Name(eng)" />
      <TextField source="surname.eng" label="Surname(eng)" />

      <TextField source="name.arm" label="Name(arm)" />
      <TextField source="surname.arm" label="Surname(arm)" />

      <TextField source="name.rus" label="Name(rus)" />
      <TextField source="surname.rus" label="Surname(rus)" />

      <TextField source="role" label="Role" />
      <TextField source="createdAt" label="Created At" />
      <TextField source="updatedAt" label="Updated At" />
      <ArrayField source="cart.items" label="Cart Items">
        <Datagrid bulkActionButtons={false}>
          <TextField source="prodId" label="Product Id" />
          <TextField source="prodName" label="Product Name" />
          <TextField source="price" label="Price" />
          <TextField source="quantity" label="Quantity" />
        </Datagrid>
      </ArrayField>
      <TextField source="cart.totalPrice" label="Total Price" />
    </SimpleShowLayout>
  </Show>
);

export default UserShow;
