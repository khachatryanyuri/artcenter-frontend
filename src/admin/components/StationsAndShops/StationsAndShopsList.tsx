import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="name" alwaysOn />];

const StationsAndShopsList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="StationsAndShops" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="name.arm" label="Name" />
      <TextField source="description.arm" label="Description" />
      <TextField source="address.arm" label="Address" />
      <TextField source="contacts.arm" label="Contacts" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default StationsAndShopsList;
