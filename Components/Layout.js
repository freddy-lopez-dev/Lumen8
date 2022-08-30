import React from 'react';
import Navbar from './Navbar';
import Newsletter from './Newsletter';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Newsletter />
    </div>
  );
};

export default Layout;
