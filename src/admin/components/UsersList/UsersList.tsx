import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="email" alwaysOn />];

const UsersList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Users" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="email" label="Email" />
      <TextField source="name.arm" label="Name" />
      <TextField source="surname.arm" label="Surname" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default UsersList;
