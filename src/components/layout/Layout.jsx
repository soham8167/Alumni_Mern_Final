import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="content-area flex-1 p-4">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
