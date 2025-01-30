import { createContext, useState } from "react";

export const authContext = createContext()

const AuthProvider = ({children})=>{
    const [user, setUser] = useState({})
    const [token, setToken] = useState("sgaio786yrt")
    const [loadinAuth, setLoadingAuth] = useState(false)

    const login = async (formData) => {
        // alert('login in...')
    }
    const signup = async (formData) => {
        setUser(data)
    }
        
    const value = {
        user,
        token,
        loadinAuth,
        login,
        signup
    }
    return <authContext.Provider value={value}>{children}</authContext.Provider>

}

export default AuthProvider