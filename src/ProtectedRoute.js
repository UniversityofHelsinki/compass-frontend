import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ component: Component }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // or a loading spinner
    }

    return user ? <Component /> : <Navigate to="/Shibboleth.sso/Login" replace />;
};

export default ProtectedRoute;
