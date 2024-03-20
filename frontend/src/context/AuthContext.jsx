import { createContext, useContext, useState } from "react";


// @ts-ignore
export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    // @ts-ignore
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)
    // @ts-ignore
    return <AuthContext.Provider value={{ authUser, setAuthUser }}>
        {children}
    </AuthContext.Provider>
}   