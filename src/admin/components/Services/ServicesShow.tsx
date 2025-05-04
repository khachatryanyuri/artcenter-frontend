import React from 'react';
import { ImageField, useRecordContext } from 'react-admin';
import { SimpleShowLayout, Show, TextField, BooleanField, Loading, ShowProps } from 'react-admin';
import { Box, Typography } from '@mui/material';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { servicesStyles } from '@lib/src/admin/styles/services';

const { typographyStyles, boxStyles } = servicesStyles;

const TagsField = ({ source }: any) => {
  const record = useRecordContext();
  const tags = source.split('.').reduce((acc: { [x: string]: any }, part: string | number) => acc && acc[part], record);
  return <ul>{tags && tags?.map((item: string, index: number) => <li key={index}>{item}</li>)}</ul>;
};

const ServiceShow = (props: ShowProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Show {...props} title="Services Form Details">
      <SimpleShowLayout>
        <TextField source="type" label="Type" />
        <BooleanField source="requiresPayment" label="Requires payment" />
        {languages.map((language) => (
          <Box key={language.id} {...boxStyles}>
            <Typography variant="body2" {...typographyStyles}>{`Title (${language.code})`}</Typography>
            <TextField source={`title.${language.code}`} />
            <Typography {...typographyStyles}>{`Description (${language.code})`}</Typography>
            <TagsField source={`description.${language.code}`} />
            <Typography {...typographyStyles}>{`Duration (${language.code})`}</Typography>
            <TextField source={`duration.${language.code}`} />
            <Typography {...typographyStyles}>{`Service Cost (${language.code})`}</Typography>
            <TextField source={`serviceCost.${language.code}`} />
          </Box>
        ))}
        <TextField source="serviceManagerEmail" label="Service manager email" />
        <ImageField source="picture" src="url" title="desc" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ServiceShow;
