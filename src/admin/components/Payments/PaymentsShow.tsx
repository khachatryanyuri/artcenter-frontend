import { Show, SimpleShowLayout, TextField, NumberField, DateField, ReferenceField, ShowProps, useRecordContext, TopToolbar, useNotify, useRefresh, fetchUtils } from 'react-admin';
import { Button } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import { useState } from 'react';

const PaymentsShowActions = () => {
  const record = useRecordContext();
  const notify = useNotify();
  const refresh = useRefresh();
  const [loading, setLoading] = useState(false);

  if (!record) return null;

  const handleAction = async (action: 'refund' | 'reverse') => {
    if (!window.confirm(`Are you sure you want to ${action} this payment?`)) return;
    
    setLoading(true);
    try {
      const { token } = JSON.parse(localStorage.getItem('auth') || '{}');
      await fetchUtils.fetchJson(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api'}/payments/${record.id}/${action}`,
        {
          method: 'POST',
          body: JSON.stringify({ amountAMD: record.amountAMD }),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })
        }
      );
      
      notify(`Payment successfully ${action}ed`, { type: 'success' });
      refresh();
    } catch (error: any) {
      notify(`Failed to ${action} payment: ${error.message}`, { type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <TopToolbar>
      {(record.status === 'COMPLETED' || record.status === 'PARTIALLY_REFUNDED') && (
          <Button 
            color="primary" 
            onClick={() => handleAction('refund')} 
            disabled={loading}
            startIcon={<MoneyOffIcon />}
          >
            Refund
          </Button>
      )}
      {record.status === 'COMPLETED' && (
          <Button 
            color="secondary" 
            onClick={() => handleAction('reverse')} 
            disabled={loading}
            startIcon={<UndoIcon />}
          >
            Reverse
          </Button>
      )}
    </TopToolbar>
  );
};

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
    <Show {...props} actions={<PaymentsShowActions />} title="Payment Details">
      <SimpleShowLayout>
        <TextField source="orderNumber" label="Internal Order ID" />
        <TextField source="bankOrderId" label="Bank Transaction ID" />

        <DynamicApplicationReference />

        <NumberField source="amountAMD" label="Amount (AMD)" />
        <NumberField source="refundedAmountAMD" label="Refunded Amount (AMD)" />
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
