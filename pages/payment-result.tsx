import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function PaymentResultPage() {
  const router = useRouter();
  const { mdOrder, orderId, paymentID } = router.query;
  // The bank API documentation says mdOrder, but in reality it might send orderId or paymentID
  const transactionId = mdOrder || orderId || paymentID;
  const { t } = useTranslation();

  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;
    if (!transactionId) {
      setLoading(false);
      setStatus('FAILED');
      return;
    }

    const verifyPayment = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
        const res = await fetch(`${baseUrl}/payments/verify`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bankOrderId: transactionId }),
        });
        
        if (!res.ok) {
          throw new Error('Verification failed');
        }

        const data = await res.json();
        setStatus(data.status); // PENDING, COMPLETED, FAILED, REFUNDED, REVERSED, EXPIRED
      } catch (error) {
        console.error('Error verifying payment:', error);
        setStatus('FAILED');
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [router.isReady, transactionId]);

  return (
    <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ textAlign: 'center', maxWidth: 600, p: 4, borderRadius: 2, boxShadow: 3, backgroundColor: 'white' }}>
          {loading ? (
            <>
              <CircularProgress size={60} sx={{ mb: 3 }} />
              <Typography variant="h5">{t('payment.processingTitle', 'Processing your payment...')}</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                {t('payment.processingDescription', 'Please wait while we verify your transaction with the bank. Do not close this page.')}
              </Typography>
            </>
          ) : (
            <>
              {status === 'COMPLETED' ? (
                <>
                  <Typography variant="h3" color="success.main" sx={{ mb: 2 }}>✅ {t('payment.successTitle', 'Payment Successful!')}</Typography>
                  <Typography variant="h6" sx={{ mb: 4 }}>
                    {t('payment.successDescription', 'Your application and payment have been successfully received.')}
                  </Typography>
                </>
              ) : status === 'PENDING' ? (
                <>
                  <Typography variant="h3" color="warning.main" sx={{ mb: 2 }}>⏳ {t('payment.pendingTitle', 'Payment Pending')}</Typography>
                  <Typography variant="h6" sx={{ mb: 4 }}>
                    {t('payment.pendingDescription', 'Your payment is currently being processed by the bank. We will update you shortly.')}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="h3" color="error.main" sx={{ mb: 2 }}>❌ {t('payment.failedTitle', 'Payment Failed')}</Typography>
                  <Typography variant="h6" sx={{ mb: 4 }}>
                    {t('payment.failedDescription', 'Unfortunately, your payment could not be processed. Please try again or contact support.')}
                  </Typography>
                </>
              )}

              <Button variant="contained" color="primary" size="large" onClick={() => router.push('/')}>
                {t('payment.returnHome', 'Return to Home')}
              </Button>
            </>
          )}
        </Box>
      </Box>
  );
}
