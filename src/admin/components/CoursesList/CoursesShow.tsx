import { Box, Typography } from '@mui/material';
import React from 'react';
import {
  SimpleShowLayout,
  DateField,
  Show,
  TextField,
  ArrayField,
  Datagrid,
  ImageField,
  BooleanField,
  NumberField,
  ShowProps,
  SimpleFormIterator,
  useRecordContext,
} from 'react-admin';

const ContentField = () => {
  const record = useRecordContext();
  return (
    <Box>
      {Object.keys(record.content).map((lang) => (
        <Box key={lang}>
          <Typography variant="body2">{lang}</Typography>
          <ArrayField source={`content.${lang}`} record={record}>
            <Datagrid bulkActionButtons={false}>
              <TextField source="title" />
              <TextField source="description" />
            </Datagrid>
          </ArrayField>
        </Box>
      ))}
    </Box>
  );
};

const CourseShow = (props: ShowProps) => {
  return (
    <Show {...props} title="Course Form Details">
      <SimpleShowLayout>
        <TextField label={`Title(eng)`} source={`title.eng`} />
        <TextField label={`Title(arm)`} source={`title.arm`} />
        <TextField label={`Title(rus)`} source={`title.rus`} />
        <TextField label={`Description(eng)`} source={`description.eng`} />
        <TextField label={`Description(arm)`} source={`description.arm`} />
        <TextField label={`Description(rus)`} source={`title.rus`} />
        <ContentField />
        <DateField source="startingDate" label="Starting Date" />
        <TextField source="createdAt" label="Created At" />
        <TextField source="updatedAt" label="Updated At" />
        <BooleanField source="isCourseAvailable" label="Is course available" />
        <ImageField source="picture" src="url" title="desc" />
      </SimpleShowLayout>
    </Show>
  );
};

export default CourseShow;
