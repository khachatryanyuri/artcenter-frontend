import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Button, CircularProgress, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function CheckoutServicePage() {
  const router = useRouter();
  const { id } = router.query;
  const { t } = useTranslation();

  const [payment, setPayment] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!router.isReady) return;
    if (!id) {
      setError(t('invoice.invalidLink'));
      setLoading(false);
      return;
    }

    const fetchPayment = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
        const res = await fetch(`${baseUrl}/payments/public/${id}`);
        
        if (!res.ok) {
          throw new Error(t('invoice.notFound'));
        }

        const data = await res.json();
        setPayment(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPayment();
  }, [router.isReady, id, t]);

  const handlePay = async () => {
    setProcessing(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
      const res = await fetch(`${baseUrl}/payments/initiate-service`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentId: id })
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || t('invoice.failedInitiate'));
      }

      const data = await res.json();
      if (data.formUrl) {
        window.location.href = data.formUrl;
      } else {
        throw new Error(t('invoice.invalidResponse'));
      }
    } catch (err: any) {
      setError(err.message);
      setProcessing(false);
    }
  };

  if (loading) {
    return (
        <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
    );
  }

  if (error) {
    return (
        <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ textAlign: 'center', p: 4 }}>
            <Typography variant="h4" color="error.main" sx={{ mb: 2 }}>{t('invoice.errorTitle')}</Typography>
            <Typography variant="h6">{error}</Typography>
          </Box>
        </Box>
    );
  }

  const application = payment?.serviceApplicationId;

  return (
      <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 8 }}>
        <Card sx={{ maxWidth: 600, width: '100%', boxShadow: 3, borderRadius: 2 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
              {t('invoice.title')}
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary">{t('invoice.orderNumber')}</Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>{payment.orderNumber}</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary">{t('invoice.serviceDetails')}</Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {application?.fieldOfService}
              </Typography>
            </Box>

            <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5">{t('invoice.totalAmount')}</Typography>
              <Typography variant="h4" color="primary.main" sx={{ fontWeight: 'bold' }}>
                {payment.amountAMD} AMD
              </Typography>
            </Box>

            <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                fullWidth 
                onClick={handlePay}
                disabled={processing || payment.status !== 'PENDING'}
                sx={{ py: 1.5, fontSize: '1.1rem' }}
              >
                {processing ? <CircularProgress size={24} color="inherit" /> : 
                 payment.status === 'PENDING' ? t('invoice.payNow') : `${t('invoice.paymentStatus')}${payment.status}`}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
  );
}
