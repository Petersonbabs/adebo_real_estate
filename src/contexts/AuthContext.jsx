import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

export const authContext = createContext()
export const useAuthContext = ()=>{
    return useContext(authContext)
}

const AuthProvider = ({children})=>{
    const [user, setUser] = useState({})
    const [token, setToken] = useState("sgaio786yrt")
    const [loadinAuth, setLoadingAuth] = useState(false)
    const [signingUp, setSigningUp] = useState(false)

    const login = async (formData) => {
        // alert('login in...')
    }
    const signup = async (formData) => {
        setSigningUp(true)
        try {
            const response = await fetch(`http://localhost:4001/api/v1/auth/signup`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers:{
                    "Content-Type" : "application/json"
                }
            })
            const data = await response.json()
            console.log(data);
            if(data.status == "success"){
                toast.success(data.message)
            } else{
                toast.error(data.message)
            }
        } catch (error) {
            console.error(error)
        } finally{
            setSigningUp(false)
        }
    }
        
    const value = {
        user,
        token,
        loadinAuth,
        signingUp,
        login,
        signup
    }
    return <authContext.Provider value={value}>{children}</authContext.Provider>

}

export default AuthProvider