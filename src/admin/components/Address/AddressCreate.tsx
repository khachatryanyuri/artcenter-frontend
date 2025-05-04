import React from 'react';
import { Create, SimpleForm, TextInput, Loading, SelectInput, CreateProps } from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';
import { CustomArrayInput } from '@lib/src/admin/components/Address/CustomArrayInput';
import { SELECT_INPUT } from '@lib/src/admin/components/Address/constants/selectInputData';

const AddressCreate = (props: CreateProps) => {
  const { isLoading } = useLanguages();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Create title="Create an Address" {...props}>
      <SimpleForm>
        <SelectInput source="type" label="Type" choices={SELECT_INPUT} required />
        <CustomArrayInput source="coordinates" xAxis="xAxis" yAxis="yAxis" />
        <TextInput source="popupText" label="Popup text" required />
      </SimpleForm>
    </Create>
  );
};

export default AddressCreate;
