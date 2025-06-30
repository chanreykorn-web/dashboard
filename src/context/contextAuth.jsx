import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🟡 Runs once on page load (after refresh)
    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const res = await api.get("/auth/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(res.data); // ✅ Set user if valid token
            } catch (err) {
                console.error("Error validating token:", err.message);
                localStorage.removeItem("token");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const login = async (name, password) => {
        const res = await api.post("/auth/login", { name, password });
        localStorage.setItem("token", res.data.token);

        // ✅ Immediately fetch and set user
        const userRes = await api.get("/auth/me", {
            headers: {
                Authorization: `Bearer ${res.data.token}`,
            },
        });
        setUser(userRes.data);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);