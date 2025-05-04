import React from 'react';
import { ArrayField, Datagrid, Show, SimpleShowLayout, TextField, ShowProps } from 'react-admin';

const DonationShow = (props: ShowProps) => (
  <Show {...props} title="Orders Form Details">
    <SimpleShowLayout>
      <TextField source="orderId" label="Order Id" />
      <TextField source="userId" label="User Id" />
      <TextField source="totalPrice" label="Total Price" />
      <TextField source="paymentMethod" label="Payment Method" />
      <ArrayField source="items" label="Order Items">
        <Datagrid bulkActionButtons={false}>
          <TextField source="prodId" label="Product Id" />
          <TextField source="prodName" label="Product Name" />
          <TextField source="price" label="Price" />
          <TextField source="quantity" label="Quantity" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

export default DonationShow;
