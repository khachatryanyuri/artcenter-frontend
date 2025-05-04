import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="email" alwaysOn />];

const FullMembershipApplicationList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Full Membership Application" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="fullName" label="Full Name" />
      <TextField source="email" label="Email" />
      <TextField source="phoneNumber" label="Phone Number" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default FullMembershipApplicationList;
