import React from 'react';
import {
  ImageField,
  useRecordContext,
  Show,
  SimpleShowLayout,
  TextField,
  Loading,
  ShowProps,
  ArrayField,
  Datagrid,
  DateField,
} from 'react-admin';
import { Box, Typography } from '@mui/material';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { servicesStyles } from '@lib/src/admin/styles/services';

const { typographyStyles, boxStyles } = servicesStyles;

const LocalizedField = ({ label, source }: { label: string; source: string }) => {
  const record = useRecordContext();
  const value = source.split('.').reduce((acc: any, part: string) => acc && acc[part], record);
  return (
    <>
      <Typography variant="body2" {...typographyStyles}>
        {label}
      </Typography>
      <Typography>{value || '-'}</Typography>
    </>
  );
};

const SubTypeShow = (props: ShowProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Show {...props} title="SubType Details">
      <SimpleShowLayout>
        <TextField source="key" label="Key" />
        {languages.map((language) => (
          <Box key={language.id} {...boxStyles}>
            <LocalizedField label={`Title (${language.code})`} source={`title.${language.code}`} />
            <LocalizedField label={`Description (${language.code})`} source={`desc.${language.code}`} />
          </Box>
        ))}
        <ArrayField source="type" label="Types">
          <Datagrid>
            <TextField source="key" label="Type Key" />
            {languages.map((language) => (
              <Box key={language.id} {...boxStyles}>
                <LocalizedField
                  key={language.id}
                  label={`Type Name (${language.code})`}
                  source={`name.${language.code}`}
                />
              </Box>
            ))}
          </Datagrid>
        </ArrayField>
        <ImageField source="picture" title="Picture" />
      </SimpleShowLayout>
    </Show>
  );
};

export default SubTypeShow;
