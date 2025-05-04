import React from 'react';
import { List, Datagrid, TextField, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="email" alwaysOn />];

const DonationList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Donation" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="donationName" label="Donation Name" />
      <TextField source="donationVariant" label="Donation variant" />
      <TextField source="amount" label="Amount" />
      <TextField source="currency" label="currency" />
      <TextField source="email" label="Email" />
      <TextField source="firstName" label="First name" />
      <TextField source="lastName" label="Last name" />
    </Datagrid>
  </List>
);

export default DonationList;
