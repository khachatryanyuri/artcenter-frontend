import { Show, SimpleShowLayout, TextField, NumberField, DateField, ReferenceField, ShowProps, useRecordContext } from 'react-admin';

const DynamicApplicationReference = () => {
  const record = useRecordContext();
  if (!record) return null;

  if (record.serviceApplicationId) {
    return (
      <ReferenceField 
        source="serviceApplicationId" 
        reference="services-application-request" 
        label="Linked Application"
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
      label="Linked Application"
      emptyText="Deleted / Missing"
      link="show"
    >
      <TextField source="email" />
    </ReferenceField>
  );
};

const PaymentsShow = (props: ShowProps) => {
  return (
    <Show {...props} title="Payment Details">
      <SimpleShowLayout>
        <TextField source="orderNumber" label="Internal Order ID" />
        <TextField source="bankOrderId" label="Bank Transaction ID" />

        <DynamicApplicationReference />

        <NumberField source="amountAMD" label="Amount (AMD)" />
        <TextField source="currency" label="Currency Code" />

        <TextField source="status" label="Payment Status" />
        <NumberField source="bankErrorCode" label="Bank Error Code" />
        <TextField source="bankErrorMessage" label="Bank Error Message" />

        <DateField source="createdAt" label="Created At" showTime />
        <DateField source="updatedAt" label="Last Updated" showTime />
      </SimpleShowLayout>
    </Show>
  );
};

export default PaymentsShow;
