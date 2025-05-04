import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/global.css';
import { AuthProvider } from '@lib/services/store/AuthContext';
import Layout from '@lib/components/common/components/Layout';
import { ThemeProvider } from '@mui/material';
import { theme } from '@lib/styles/componentsStyles';
import RootLayout from '@lib/components/common/components/RootLayout';
import { DefaultSeo } from 'next-seo';
import defaultSEO from '../next-seo.config';
import { I18nextProvider } from 'react-i18next';
import i18n from '@lib/i18n';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function Azatazen({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isAdminPage = router.pathname.startsWith('/admin');

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag?.('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <DefaultSeo {...defaultSEO} />
        <ThemeProvider theme={theme}>
          <RootLayout>
            <AuthProvider>
              {isAdminPage ? (
                <Component {...pageProps} />
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )}
            </AuthProvider>
          </RootLayout>
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
}

export default Azatazen;
