import React, { createContext, useContext, useState, useEffect } from 'react';
import useUser from './hooks/useUser';
import { ROLE_TEACHER } from '../src/Constants'; // Assuming your hook fetches and handles user logic

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

    const isTeacher = user?.eduPersonAffiliation?.includes(ROLE_TEACHER);

    return (
        <AuthContext.Provider value={{ user: (user && { ...user, isTeacher }) || null, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
