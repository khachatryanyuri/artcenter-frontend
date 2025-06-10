import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="type" alwaysOn />];

const TypeList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Services" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="key" label="Key" />
      <TextField source="title.ru" label="Title" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default TypeList;
