import React from 'react';
import { useAuth } from './AuthContext';
import { useLocation, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        // Redirect to /login, preserving the current path in the query param "target"
        const target = encodeURIComponent(location.pathname + location.search);
        return <Navigate to={`/login?target=${target}`} replace />;
    }

    return children;
};

export default ProtectedRoute;
