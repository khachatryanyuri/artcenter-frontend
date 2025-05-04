import React from 'react';
import { RichTextField, Show, SimpleShowLayout, TextField, ShowProps } from 'react-admin';

const ContentShow = (props: ShowProps) => (
  <Show {...props} title="Content Details">
    <SimpleShowLayout>
      <TextField source="page" label="page" />
      <TextField source="key" label="key" />
      <RichTextField label={`Title(arm)`} source={`title.arm`} />
      <RichTextField label={`Title(rus)`} source={`title.rus`} />
      <RichTextField label={`Title(eng)`} source={`title.eng`} />
      <RichTextField label={`Description(arm)`} source={`description.arm`} />
      <RichTextField label={`Description(rus)`} source={`description.rus`} />
      <RichTextField label={`Description(eng)`} source={`description.eng`} />
      <TextField source="createdAt" label="Created At" />
      <TextField source="updatedAt" label="Updated At" />
    </SimpleShowLayout>
  </Show>
);

export default ContentShow;
