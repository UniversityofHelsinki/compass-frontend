import React from 'react';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';
import eduGAINLogo from './logo/eduGain.png';
import hyLogo from './logo/HY_logo.png';
import './AuthenticationPage.css';

const AuthenticationPage = () => {
    const { user, loading } = useAuth();

    const targetFromQuery = new URLSearchParams(window.location.search).get('target');
    const currentPath = window.location.pathname + window.location.search;

    const modifiedPath = targetFromQuery || currentPath.replace(/login/g, '');
    const encodedTarget = encodeURIComponent(modifiedPath);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return <Navigate to="/" />;
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
        <div className="login-container">
            <div className="login-box">
                <div className="login-left">
                    <h1>Login</h1>
                    <p>Please select your login method by clicking a logo</p>
                </div>
                <div className="login-right">
                    <div className="login-section">
                        <h2>University of Helsinki account</h2>
                        <a href="#" onClick={handleHYLogin}>
                            <img
                                src={hyLogo}
                                alt="University of Helsinki login"
                                className="login-logo-link-hy"
                            />
                        </a>
                    </div>

                    <div className="login-section">
                        <h2>Other methods</h2>
                        <a href="#" onClick={handleEduGAINLogin}>
                            <img
                                src={eduGAINLogo}
                                alt="eduGAIN login"
                                className="login-logo-link-eduGain"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthenticationPage;
