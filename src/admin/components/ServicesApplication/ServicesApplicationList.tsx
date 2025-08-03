import { Box, Typography } from '@mui/material';
import {
  Datagrid,
  EmailField,
  List,
  TextField,
  DateField,
  ListProps,
  SearchInput,
  useRecordContext,
  DeleteButton,
  EditButton,
} from 'react-admin';
import { useCourses } from '../CoursesApplication/CoursesApplicationEdit';
const postFilters = [<SearchInput key="search" source="title" alwaysOn />];
export const ServiceField = () => {
  const record = useRecordContext();
  const { courses, isLoading } = useCourses();

  if (!record) return null;

  const course = courses.find((c) => String(c.id) === String(record.fieldOfService));

  return <Typography>{isLoading ? 'Loading...' : course ? course.name : 'Unknown course'}</Typography>;
};
const ServicesApplicationList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Services Application" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="name" />
      <EmailField source="email" />
      <Box>
        <Typography variant="body2" sx={{ fontSize: '12px !important', opacity: 0.6 }}>
          Field of Service
        </Typography>
        <ServiceField />
      </Box>

      <DateField source="deadline" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default ServicesApplicationList;
