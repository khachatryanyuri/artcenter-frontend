import React from 'react';
import { ImageField, Show, SimpleShowLayout, TextField, ShowProps } from 'react-admin';

const ProductShow = (props: ShowProps) => (
  <Show {...props} title="Product Form Details">
    <SimpleShowLayout>
      <TextField source="type" label="Type" />
      <TextField source="name" label="Name" />
      <TextField source="model" label="Model" />
      <TextField source="size" label="Size" />
      <TextField source="info" label="Info" />
      <TextField source="price" label="Price" />
      <TextField source="discountedPrice" label="Discounted Price" />
      <ImageField source="pictures" src="url" title="desc" />
      <TextField source="createdAt" label="Created At" />
      <TextField source="updatedAt" label="Updated At" />
    </SimpleShowLayout>
  </Show>
);

export default ProductShow;
