import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, DateField, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="title" alwaysOn />];

const EventsList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Events" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="title.arm" label="Title" />
      <TextField source="description.arm" label="Description" />
      <TextField source="duration" label="duration" />
      <DateField source="startingDate" label="Starting Date" />
      <TextField source="maximumParticipants" label="Maximum Participants" />
      <TextField source="venue.arm" label="Venue" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default EventsList;
