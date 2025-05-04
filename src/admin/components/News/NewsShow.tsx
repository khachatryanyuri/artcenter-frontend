import React from 'react';
import { Show, SimpleShowLayout, TextField, ImageField, RichTextField, ShowProps } from 'react-admin';

const NewsShow = (props: ShowProps) => (
  <Show {...props} title="Application Form Details">
    <SimpleShowLayout>
      <TextField source="title.eng" label="Title(eng)" />
      <TextField source="title.arm" label="Title(arm)" />
      <TextField source="title.rus" label="Title(rus)" />

      <RichTextField source="news.eng" label="News(eng)" />
      <RichTextField source="news.arm" label="News(arm)" />
      <RichTextField source="news.rus" label="News(rus)" />

      <TextField source="author.eng" label="Author(eng)" />
      <TextField source="author.arm" label="Author(arm)" />
      <TextField source="author.rus" label="Author(rus)" />

      <ImageField source="pictures[0]" label="Last news picture" title="Application Form Picture" />
      <ImageField source="pictures[1]" label="Picture" title="Application Form Picture" />
      <TextField source="createdAt" label="Created At" />
      <TextField source="updatedAt" label="Updated At" />
    </SimpleShowLayout>
  </Show>
);

export default NewsShow;
