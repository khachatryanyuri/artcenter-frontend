import React from 'react';
import {
  ArrayInput,
  BooleanInput,
  Create,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  CreateProps,
  required,
} from 'react-admin';

const ExamsCreate = (props: CreateProps) => {
  return (
    <Create title="Create a Exams" {...props}>
      <SimpleForm>
        <TextInput label="Question" source="question" validate={required()} />
        <ArrayInput source="answers" validate={required()}>
          <SimpleFormIterator inline>
            <TextInput source="name" helperText={false} />
            <BooleanInput source={'status'} />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default ExamsCreate;
