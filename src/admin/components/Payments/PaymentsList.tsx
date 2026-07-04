import { Datagrid, List, ListProps, TextField, NumberField, DateField, ReferenceField, ShowButton, useRecordContext } from 'react-admin';

const DynamicApplicationReference = () => {
  const record = useRecordContext();
  if (!record) return null;

  if (record.serviceApplicationId) {
    return (
      <ReferenceField 
        source="serviceApplicationId" 
        reference="services-application-request" 
        label="Application"
        emptyText="Deleted / Missing"
        link="show"
      >
        <TextField source="email" />
      </ReferenceField>
    );
  }

  return (
    <ReferenceField 
      source="applicationId" 
      reference="courses-application-request" 
      label="Application"
      emptyText="Deleted / Missing"
      link="show"
    >
      <TextField source="email" />
    </ReferenceField>
  );
};

const PaymentsList = (props: ListProps) => {
  return (
    <List {...props} title="Payments" perPage={25}>
      <Datagrid bulkActionButtons={false} rowClick="show">
        <TextField source="orderNumber" label="Order ID" />
        <TextField source="bankOrderId" label="Bank Transaction ID" />
        <DynamicApplicationReference />
        <NumberField source="amountAMD" label="Amount (AMD)" />
        <TextField source="status" label="Status" />
        <DateField source="createdAt" label="Created At" showTime />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default PaymentsList;
