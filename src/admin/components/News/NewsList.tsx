import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="title" alwaysOn />];

const NewsList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="News" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="title.arm" label="Title" />
      <TextField source="author.arm" label="Author" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default NewsList;
