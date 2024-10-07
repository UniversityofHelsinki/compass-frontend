import React, { createContext, useContext, useState, useEffect } from 'react';
import useUser from './hooks/useUser'; // Assuming your hook fetches and handles user logic

const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, loadUser] = useUser();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                await loadUser();
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    // replace the value with the real deal when it's relevant
    const isTeacher = true;

    return (
        <AuthContext.Provider value={{ user: user && { ...user, isTeacher } || null, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
