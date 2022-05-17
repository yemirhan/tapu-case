import React, { useState, useContext, useEffect } from "react";

interface AuthContextState {
    user: User | null,
    loading: boolean,
    setUser: (user: User) => void,
    logout: () => void,
}
const contextDefaultValues: AuthContextState = {
    user: null,
    loading: true,
    setUser: (user: User) => { },
    logout: () => { },
};
export const AuthContext = React.createContext<AuthContextState>(
    contextDefaultValues,
);
export const useAuthContext = (): AuthContextState => useContext(AuthContext);
type User = {
    username: string,
    password: string,
    email: string,
    locale: string,
}
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<null | User>(null)
    const [loading, setLoading] = useState(true)
    const createUser = (u: User) => {
        setLoading(true)
        setUser(u)
        localStorage.setItem("user", JSON.stringify(u))
        setLoading(false)
    }
    const logout = () => {
        setLoading(true)
        setUser(null)
        localStorage.removeItem("user")
        setLoading(false)
    }
    useEffect(() => {
        setLoading(true)
        const u = localStorage.getItem("user")
        setUser(u !== null ? JSON.parse(u) : null)
        setLoading(false)
        return () => {
            setUser(null)
        }
    }, [])

    const value = { user, loading, setUser: createUser, logout };
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    );
};

