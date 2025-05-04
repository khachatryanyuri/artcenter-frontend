import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="title" alwaysOn />];

const LanguageList = (props: ListProps) => {
  return (
    <List {...props} filters={postFilters} title="Languages" perPage={10}>
      <Datagrid bulkActionButtons={false} rowClick="show">
        <TextField source="code" label="Language" />
        <EditButton />
        <DeleteButton label="Delete" />
      </Datagrid>
    </List>
  );
};

export default LanguageList;
