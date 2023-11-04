import { createContext, useState } from "react";

type AuthContextType = {
    isAuthenticated: boolean; // флаг, показывающий, аутентифицирован ли пользователь
    setAuth: (auth: boolean) => void; // функция для изменения значения isAuthenticated
};

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setAuth: () => { },
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const [isAuthenticated, setAuth] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

