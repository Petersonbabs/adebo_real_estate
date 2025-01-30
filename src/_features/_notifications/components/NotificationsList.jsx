import React, { useContext, useEffect } from 'react'
import NoticationCard from './NoticationCard'
import { notificationContext } from '../../../contexts/NotificationContext'

// const notifations = [
//     {message: "A new property was posted by adebo"},
//     {message: "A new property was posted by adebo"},
//     {message: "A new property was posted by adebo"},
//     {message: "A new property was posted by adebo"},
// ]

const NotificationsList = ({num}) => {
     const { notifications, loadingNotifications, fetchNotifications} = useContext(notificationContext)
     useEffect(()=>{
        fetchNotifications()
     },[])
  return (
    <div>
        {
            loadingNotifications ?
            <p>Loading notifications...</p> :
            <section>
                {
                    notifications.length > 0 ?
                    <>  
                        {
                             notifications.map(notification=>(
                                <NoticationCard notification={notification} num={num}/>
                            ))
                        }
                    </> :
                    <div>
                        <p>No notifcation</p>
                    </div>
                }
            </section>
        }
    </div>
  )
}

export default NotificationsList