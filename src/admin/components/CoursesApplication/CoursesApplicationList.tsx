import { FunctionField, List, ListProps, useRecordContext } from 'react-admin';
import { Datagrid, DeleteButton, EditButton, SearchInput, TextField } from 'react-admin';
import { useCourses } from './CoursesApplicationEdit';
import { Box, Typography } from '@mui/material';
const postFilters = [<SearchInput key="search" source="title" alwaysOn />];

export const CourseField = () => {
  const record = useRecordContext();
  const { courses, isLoading } = useCourses();

  if (!record) return null;

  const course = courses.find((c) => String(c.id) === String(record.fieldOfStudy));

  return <Typography>{isLoading ? 'Loading...' : course ? course.name : 'Unknown course'}</Typography>;
};
const CoursesApplicationList = (props: ListProps) => {
  return (
    <List {...props} filters={postFilters} title="Courses Application" perPage={10}>
      <Datagrid bulkActionButtons={false} rowClick="show">
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
        <EditButton />
        <DeleteButton label="Delete" />
      </Datagrid>
    </List>
  );
};

export default CoursesApplicationList;
