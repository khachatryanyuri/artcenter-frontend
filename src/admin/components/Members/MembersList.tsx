import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="title" alwaysOn />];

const MembersList = (props: ListProps) => {
  return (
    <List {...props} filters={postFilters} title="Members" perPage={10}>
      <Datagrid bulkActionButtons={false} rowClick="show">
        <TextField source="name.arm" label="Name" />
        <TextField source="surname.arm" label="Surname" />
        <TextField source="position.arm" label="Position" />
        <EditButton />
        <DeleteButton label="Delete" />
      </Datagrid>
    </List>
  );
};

export default MembersList;
