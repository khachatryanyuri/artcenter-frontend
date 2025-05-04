import React from 'react';
import { ShowProps, Show, SimpleShowLayout, TextField, BooleanField } from 'react-admin';

const DonationShow = (props: ShowProps) => (
  <Show {...props} title="Course Form Details">
    <SimpleShowLayout>
      <TextField source="donationName" label="Donation Name" />
      <TextField source="donationVariant" label="Donation variant" />
      <TextField source="amount" label="Amount" />
      <TextField source="currency" label="currency" />
      <TextField source="email" label="Email" />
      <TextField source="firstName" label="First name" />
      <TextField source="lastName" label="Last name" />
      <TextField source="comment" label="Comment" />
      <BooleanField source="checked" label="Statement of condition" />
      <TextField source="createdAt" label="Created At" />
      <TextField source="updatedAt" label="Updated At" />
    </SimpleShowLayout>
  </Show>
);

export default DonationShow;
