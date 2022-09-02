import React from 'react';
import Navbar from './NavBar.jsx';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Navbar />
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
