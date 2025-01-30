import { createContext, useState } from "react";
// import { authContext } from "./AuthContext";
import NotificationsData from "../data/notifications.json"

export const notificationContext = createContext()

const NotificationProvider = ({children})=>{
    const [notifications, setNotifications] = useState([])
    const [loadingNotifications, setLoadingNotifications] = useState(false)
    // const {user} = useContext(au
    // thContext)

    // FETCH NOTIFICATIONS 
    const fetchNotifications = async () => {
        setLoadingNotifications(true)
        try {
            setTimeout(()=>{
                setLoadingNotifications(false)
            },[3000])
            setNotifications(NotificationsData)
        } catch (error) {
            
        } finally {

        }
    }

    const value ={
        notifications,
        loadingNotifications,
        fetchNotifications
    }
    return <notificationContext.Provider value={value}>{children}</notificationContext.Provider>
}

export default NotificationProvider