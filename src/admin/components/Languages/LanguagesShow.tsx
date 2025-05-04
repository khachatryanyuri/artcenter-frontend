import React from 'react';
import { Show, SimpleShowLayout, TextField, ShowProps } from 'react-admin';

const LanguagesShow = (props: ShowProps) => (
  <Show {...props} title="Application Form Details">
    <SimpleShowLayout>
      <TextField source="id" label="Id number" />
      <TextField source="code" label="Code" />
    </SimpleShowLayout>
  </Show>
);

export default LanguagesShow;
