import { Box, Typography } from '@mui/material';
import React from 'react';
import { SimpleShowLayout, Show, TextField, ImageField, ShowProps } from 'react-admin';

const CourseShow = (props: ShowProps) => {
  return (
    <Show {...props} title="Course Form Details">
      <SimpleShowLayout>
        <TextField source="title.ru" label="Title" />
        <TextField source="description.ru" label="Title" />
        <TextField source="typesKey" label="Types Key" />
        <TextField source="subTypesKey" label="Sub Types Key" />
        <TextField source="subTypesThemeKey" label="Sub Types ThemeKey" />
        <ImageField source="picture" src="url" title="desc" />
      </SimpleShowLayout>
    </Show>
  );
};

export default CourseShow;
