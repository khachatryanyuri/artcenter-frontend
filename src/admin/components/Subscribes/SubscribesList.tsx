import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="email" alwaysOn />];

const SubscribesList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Subscribes" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="email" label="Email" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default SubscribesList;
