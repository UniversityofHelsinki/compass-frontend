import React from 'react';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';

const AuthenticationPage = () => {
    const { user, loading } = useAuth();
    const currentPath = window.location.pathname + window.location.search;
    const modifiedPath = currentPath.replace(/login/g, '');
    const encodedTarget = encodeURIComponent(modifiedPath);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return <Navigate to={`/`} />;
    }

    const handleHYLogin = (e) => {
        e.preventDefault();
        const loginUrl = `/Shibboleth.sso/Login?target=${encodedTarget}`;
        window.location.replace(loginUrl);
    };

    const handleEduGAINLogin = (e) => {
        e.preventDefault();
        const loginUrl = `/Shibboleth.sso/eduGAINLogin`;
        window.location.replace(loginUrl);
    };

    return (
        <div style={{ padding: 40, textAlign: 'center' }}>
            <h1>Select Login Method</h1>
            <div style={{ marginTop: 20 }}>
                <button onClick={handleHYLogin} style={{ marginRight: 20 }}>
                    HY Login
                </button>
                <button onClick={handleEduGAINLogin}>eduGAIN Login</button>
            </div>
        </div>
    );
};

export default AuthenticationPage;
