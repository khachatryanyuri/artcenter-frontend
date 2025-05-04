import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="type" alwaysOn />];

const ServicesList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Services" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="type" label="Type" />
      <TextField source="title.arm" label="Title" />
      <TextField source="duration.arm" label="Duration" />
      <TextField source="serviceCost.arm" label="Service Cost" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default ServicesList;
