import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="title" alwaysOn />];

const DiscountPerRolesList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Discount Per Role" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="role" label="Role" />
      <TextField source="percent" label="Percent" />
      <TextField source="type" label="Type" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default DiscountPerRolesList;
