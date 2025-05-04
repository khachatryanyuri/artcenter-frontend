import HomeComponent from '@lib/components/home/HomeComponent';
import { useEffect } from 'react';
import { parse } from 'cookie';

export async function getServerSideProps({ req }: { req: any }) {
  try {
    const cookies = parse(req.headers.cookie || '');
    const authData = cookies.auth ? JSON.parse(cookies.auth) : null;
    return {
      props: {
        authData,
      },
    };
  } catch (error) {
    console.error('Error parsing cookies:', error);
    return {
      props: {
        authData: null,
      },
    };
  }
}

const HomePage = ({ authData }: { authData: any }) => {
  useEffect(() => {
    if (authData) {
      localStorage.setItem('auth', JSON.stringify(authData));
    }
  }, [authData]);

  return <HomeComponent />;
};

export default HomePage;
