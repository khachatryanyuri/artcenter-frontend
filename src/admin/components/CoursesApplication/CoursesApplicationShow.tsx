import { Box, Typography } from '@mui/material';
import React from 'react';
import { SimpleShowLayout, Show, TextField, ShowProps, useRecordContext } from 'react-admin';
import { useCourses } from './CoursesApplicationEdit';

const PersonsField = () => {
  const record = useRecordContext();

  if (!record?.persons?.length) return null;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Persons
      </Typography>
      {record.persons.map((person: any, index: number) => (
        <Box key={index} mb={1}>
          <Typography sx={{ fontSize: '12px !important', opacity: 0.6 }}>Person {index + 1}</Typography>
          <Box sx={{ display: 'flex', columnGap: '4px', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '12px !important', opacity: 0.6 }}>Name:</Typography>
            <Typography>{person.name}</Typography>
          </Box>
          <Box sx={{ display: 'flex', columnGap: '4px', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '12px !important', opacity: 0.6 }}>Age:</Typography>
            <Typography>{person.age}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export const CourseField = () => {
  const record = useRecordContext();
  const { courses, isLoading } = useCourses();

  if (!record) return null;

  const course = courses.find((c) => String(c.id) === String(record.fieldOfStudy));

  return <Typography>{isLoading ? 'Loading...' : course ? course.name : 'Unknown course'}</Typography>;
};
const CoursesApplicationShow = (props: ShowProps) => {
  const { courses, isLoading } = useCourses();
  return (
    <Show {...props} title="Course Form Details">
      <SimpleShowLayout>
        <PersonsField />
        <TextField source="count" label="Count" />
        <TextField source="location" label="Location" />
        <TextField source="email" label="Email" />
        <TextField source="skype" label="Skype" />
        <TextField source="whatsapp" label="WhatsApp" />
        <Box>
          <Typography variant="body2" sx={{ fontSize: '12px !important', opacity: 0.6 }}>
            Field of Study
          </Typography>
          <CourseField />
        </Box>
        <TextField source="skillLevel" label="Skill Level" />
        <TextField source="wishes" label="Wishes" />
      </SimpleShowLayout>
    </Show>
  );
};

export default CoursesApplicationShow;
