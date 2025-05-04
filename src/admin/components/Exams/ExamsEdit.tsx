import React from 'react';
import {
  ArrayInput,
  BooleanInput,
  Edit,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  EditProps,
  required,
} from 'react-admin';

const ExamsEdit = (props: EditProps) => {
  return (
    <Edit {...props} title="Edit Exams">
      <SimpleForm>
        <TextInput label="Question" source="question" />
        <ArrayInput source="answers" validate={required()}>
          <SimpleFormIterator inline>
            <TextInput source="name" label="name" helperText={false} />
            <BooleanInput source="status" label="status" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default ExamsEdit;
