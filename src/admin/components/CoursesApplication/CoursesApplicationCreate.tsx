import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
  CreateProps,
  SelectInput,
} from 'react-admin';
import { Typography } from '@mui/material';
import React from 'react';
import { useCourses } from './CoursesApplicationEdit';

const CoursesApplicationCreate = (props: CreateProps) => {
  const { courses, isLoading } = useCourses();

  return (
    <Create {...props} title="Create Course Form">
      <SimpleForm>
        <Typography variant="h6" gutterBottom>
          Persons
        </Typography>
        <Typography sx={{ fontStyle: 'italic', mb: 1 }}>That persons see here:</Typography>

        <ArrayInput source="persons">
          <SimpleFormIterator>
            <TextInput source="name" label="Name" />
            <NumberInput source="age" label="Age" />
          </SimpleFormIterator>
        </ArrayInput>

        <NumberInput source="count" label="Count" />
        <TextInput source="location" label="Location" />
        <TextInput source="email" label="Email" />
        <TextInput source="skype" label="Skype" />
        <TextInput source="whatsapp" label="WhatsApp" />

        <SelectInput
          source="fieldOfStudy"
          label="Field of Study"
          choices={courses}
          optionText="name"
          optionValue="id"
          isLoading={isLoading}
          fullWidth
        />

        <SelectInput
          source="skillLevel"
          label="Skill Level"
          choices={[
            { id: 'нулевой', name: 'нулевой' },
            { id: 'начальный', name: 'начальный' },
            { id: 'средний', name: 'средний' },
            { id: 'продвинутый', name: 'продвинутый' },
            { id: 'профессиональный', name: 'профессиональный' },
          ]}
        />
        <TextInput source="wishes" label="Wishes" multiline fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default CoursesApplicationCreate;
