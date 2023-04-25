import {} from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default LayOut;