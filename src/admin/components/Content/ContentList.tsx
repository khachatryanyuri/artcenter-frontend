import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="page" alwaysOn />];

const ContentList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Content" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="page" label="Page" />
      <TextField source="key" label="Key" />
      <TextField source="title.arm" label="Title" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default ContentList;
