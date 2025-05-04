import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="name" alwaysOn />];

const ProductsList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Products" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="type.arm" label="Type" />
      <TextField source="name.arm" label="Name" />
      <TextField source="model.arm" label="Model" />
      <TextField source="price" label="Price" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default ProductsList;
