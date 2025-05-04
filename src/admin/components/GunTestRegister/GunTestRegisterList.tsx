import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="title" alwaysOn />];

const GunTestRegisterList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Gun Test Register" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="fullName" label="Full Name" />
      <TextField source="phoneNumber" label="Phone Number" />
      <TextField source="notes" label="Notes" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default GunTestRegisterList;
