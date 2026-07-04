import { Box, Typography, Button, TextField as MuiTextField, CircularProgress, Link } from '@mui/material';
import { Show, SimpleShowLayout, TextField, DateField, EmailField, useRecordContext, useNotify, fetchUtils } from 'react-admin';
import { useCourses } from '../CoursesApplication/CoursesApplicationEdit';
import { useState } from 'react';

export const ServiceField = () => {
  const record = useRecordContext();
  const { courses, isLoading } = useCourses();

  if (!record) return null;

  const course = courses.find((c) => String(c.id) === String(record.fieldOfService));

  return <Typography>{isLoading ? 'Loading...' : course ? course.name : 'Unknown course'}</Typography>;
};

export const GenerateInvoicePanel = () => {
  const record = useRecordContext();
  const notify = useNotify();
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentLink, setPaymentLink] = useState('');

  if (!record) return null;

  const handleGenerate = async () => {
    if (!amount || isNaN(Number(amount))) return;
    setLoading(true);
    try {
      const { token } = JSON.parse(localStorage.getItem('auth') || '{}');
      const response = await fetchUtils.fetchJson(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api'}/payments/create-service-invoice`,
        {
          method: 'POST',
          body: JSON.stringify({ serviceApplicationId: record.id, amountAMD: Number(amount) }),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })
        }
      );
      const data = response.json;
      const url = `${window.location.origin}/checkout/service?id=${data.paymentId}`;
      setPaymentLink(url);
      notify('Invoice generated successfully', { type: 'success' });
    } catch (error: any) {
      notify(error.message || 'Failed to generate invoice', { type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 2, p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
      <Typography variant="h6" gutterBottom>Generate Payment Link</Typography>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <MuiTextField 
          label="Amount (AMD)" 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          size="small"
        />
        <Button variant="contained" onClick={handleGenerate} disabled={loading || !amount}>
          {loading ? <CircularProgress size={24} /> : 'Generate'}
        </Button>
      </Box>
      {paymentLink && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">Payment Link:</Typography>
          <Link href={paymentLink} target="_blank">{paymentLink}</Link>
        </Box>
      )}
    </Box>
  );
};

const ServicesApplicationShow = () => (
  <Show title="Service Application Details">
    <SimpleShowLayout>
      <TextField source="name" />
      <EmailField source="email" />
      <Box>
        <Typography variant="body2" sx={{ fontSize: '12px !important', opacity: 0.6 }}>
          Field of Service
        </Typography>
        <ServiceField />
      </Box>

      <TextField source="wishes" />
      <DateField source="deadline" />
      <TextField source="whatsapp" />
      <TextField source="telegram" />
      <TextField source="paymentStatus" label="Payment Status" />
      <GenerateInvoicePanel />
    </SimpleShowLayout>
  </Show>
);

export default ServicesApplicationShow;
