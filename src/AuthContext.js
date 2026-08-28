import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import useUser from './hooks/useUser';
import { ROLE_TEACHER } from './Constants';

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

    const value = useMemo(
        () => ({
            user: user
                ? {
                      ...user,
                      isTeacher: ROLE_TEACHER.some((role) =>
                          user.eduPersonAffiliation?.includes(role),
                      ),
                  }
                : null,
            loading,
        }),
        [user, loading],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
