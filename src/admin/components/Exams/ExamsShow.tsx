import React from 'react';
import { ArrayField, Datagrid, ShowProps, Show, SimpleShowLayout, TextField } from 'react-admin';

const ExamsShow = (props: ShowProps) => (
  <Show {...props} title="Exams Form Details">
    <SimpleShowLayout>
      <TextField source="id" label="Id" />
      <TextField source="question" label="Question" />
      <ArrayField source="answers">
        <Datagrid bulkActionButtons={false}>
          <TextField source="name" />
          <TextField source="status" />
        </Datagrid>
      </ArrayField>
      <TextField source="createdAt" label="Created At" />
      <TextField source="updatedAt" label="Updated At" />
    </SimpleShowLayout>
  </Show>
);

export default ExamsShow;
