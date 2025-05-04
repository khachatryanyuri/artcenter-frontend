import React from 'react';
import { Show, SimpleShowLayout, TextField, ShowProps } from 'react-admin';

const DiscountPerRoleShow = (props: ShowProps) => (
  <Show {...props} title="Discount Per Role Form Details">
    <SimpleShowLayout>
      <TextField source="role" label="Role" />
      <TextField source="percent" label="Percent" />
      <TextField source="type" label="Type" />
    </SimpleShowLayout>
  </Show>
);

export default DiscountPerRoleShow;
