import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, ListProps, SearchInput } from 'react-admin';

const postFilters = [<SearchInput key="search" source="title" alwaysOn />];

const ExamsList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Exams" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="id" label="Id" />
      <TextField source="question" label="Question" />
      <TextField source="answers[0].name" label="Answer" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default ExamsList;
