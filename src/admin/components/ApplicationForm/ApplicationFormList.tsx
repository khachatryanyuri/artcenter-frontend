import React from 'react';
import { List, Datagrid, TextField, DateField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="email" alwaysOn />];

const ApplicationFormList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Application Forms" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="fullName.arm" label="Full Name" />
      <TextField source="email" label="Email" />
      <TextField source="phoneNumber" label="Phone Number" />
      <DateField source="birthday" label="Birthday" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default ApplicationFormList;
