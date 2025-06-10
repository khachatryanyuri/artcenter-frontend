import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
  DateField,
  SearchInput,
  ListProps,
  BooleanField,
} from 'react-admin';

const postFilters = [<SearchInput key="search" source="title" alwaysOn />];

const CoursesList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Courses" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="title.ru" label="Title" />
      <TextField source="typesKey" label="Types Key" />
      <TextField source="subTypesKey" label="Sub Types Key" />
      <TextField source="subTypesThemeKey" label="Sub Types ThemeKey" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default CoursesList;
