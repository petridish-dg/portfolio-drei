import React from 'react';

import Footer from '../Navigation/Footer';
import Navbar from '../Navigation/Navbar';

type LayoutProps = {
    children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
