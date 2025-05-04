import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="email" alwaysOn />];

const ContactsList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Contacts" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="name" label="Name" />
      <TextField source="email" label="Email" />
      <TextField source="letter" label="Letter" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default ContactsList;
