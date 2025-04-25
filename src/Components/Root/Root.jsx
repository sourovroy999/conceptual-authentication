import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;