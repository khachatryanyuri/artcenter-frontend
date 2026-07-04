import { Box, Typography } from '@mui/material';
import React from 'react';
import { SimpleShowLayout, Show, TextField, ShowProps, useRecordContext, ReferenceManyField, Datagrid, DateField, NumberField } from 'react-admin';
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
        <TextField source="whatsapp" label="WhatsApp" />
        <Box>
          <Typography variant="body2" sx={{ fontSize: '12px !important', opacity: 0.6 }}>
            Field of Study
          </Typography>
          <CourseField />
        </Box>
        <TextField source="skillLevel" label="Skill Level" />
        <TextField source="wishes" label="Wishes" />
        <TextField source="pricingSection" label="Pricing Section ID" />
        <TextField source="duration" label="Duration (minutes)" />
        <TextField source="package" label="Package" />
        <TextField source="totalPriceAMD" label="Total Price (AMD)" />
        <TextField source="totalPriceUSD" label="Total Price (USD)" />
        <TextField source="paymentStatus" label="Payment Status" />
        
        <Box mt={2}>
          <Typography variant="h6">Payment History</Typography>
          <ReferenceManyField reference="payments" target="applicationId" label="">
            <Datagrid rowClick="show">
              <TextField source="orderNumber" label="Order ID" />
              <TextField source="bankOrderId" label="Bank Trans. ID" />
              <NumberField source="amountAMD" label="Amount" />
              <TextField source="status" label="Status" />
              <DateField source="createdAt" label="Date" showTime />
            </Datagrid>
          </ReferenceManyField>
        </Box>
      </SimpleShowLayout>
    </Show>
  );
};

export default CoursesApplicationShow;
