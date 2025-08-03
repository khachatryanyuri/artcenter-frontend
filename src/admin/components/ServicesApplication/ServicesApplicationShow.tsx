import { Box, Typography } from '@mui/material';
import { Show, SimpleShowLayout, TextField, DateField, EmailField, useRecordContext } from 'react-admin';
import { useCourses } from '../CoursesApplication/CoursesApplicationEdit';
export const ServiceField = () => {
  const record = useRecordContext();
  const { courses, isLoading } = useCourses();

  if (!record) return null;

  const course = courses.find((c) => String(c.id) === String(record.fieldOfService));

  return <Typography>{isLoading ? 'Loading...' : course ? course.name : 'Unknown course'}</Typography>;
};
const ServicesApplicationShow = () => (
  <Show title="Service Application Details">
    <SimpleShowLayout>
      <TextField source="name" />
      <EmailField source="email" />
      <Box>
        <Typography variant="body2" sx={{ fontSize: '12px !important', opacity: 0.6 }}>
          Field of Service
        </Typography>
        <ServiceField />
      </Box>

      <TextField source="wishes" />
      <DateField source="deadline" />
      <TextField source="skype" />
      <TextField source="whatsapp" />
      <TextField source="telegram" />
    </SimpleShowLayout>
  </Show>
);

export default ServicesApplicationShow;
