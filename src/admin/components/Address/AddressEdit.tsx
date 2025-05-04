import React from 'react';
import { Edit, SelectInput, SimpleForm, TextInput, EditProps } from 'react-admin';

import { SELECT_INPUT } from '@lib/src/admin/components/Address/constants/selectInputData';
import { CustomArrayInput } from '@lib/src/admin/components/Address/CustomArrayInput';

const AddressEdit = (props: EditProps) => {
  return (
    <Edit {...props} title="Edit an Address">
      <SimpleForm>
        <SelectInput source="type" label="Type" choices={SELECT_INPUT} required />
        <CustomArrayInput source="coordinates" xAxis="xAxis" yAxis="yAxis" />
        <TextInput source="popupText" label="Popup text" required />
      </SimpleForm>
    </Edit>
  );
};

export default AddressEdit;
