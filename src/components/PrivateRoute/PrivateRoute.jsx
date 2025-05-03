import React, { useContext } from 'react';
import { ValueContext } from '../../RootLayout/RootLayout';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    console.log(children);
    const { user, loading } = useContext(ValueContext);
    const { pathname } = useLocation();
    
    if (loading) {
        return <div>Loading..</div>
    }
    if (!user || !user?.email) {
        return <Navigate state={{ from:location.pathname }} to="/signin"></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;