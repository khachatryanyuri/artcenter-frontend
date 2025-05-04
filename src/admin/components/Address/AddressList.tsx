import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="type" alwaysOn />];

const AddressList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Address" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="type" label="Type" />
      <TextField source="coordinates" label="coordinates" />
      <TextField source="popupText" label="Popup text" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default AddressList;
