import { ReactNode } from 'react';

import Navbar from '@lib/components/common/components/Navbar';
import Footer from '@lib/components/common/components/Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
