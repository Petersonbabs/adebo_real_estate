import React from 'react'
import NoticationCard from './NoticationCard'

const notifations = [
    {message: "A new property was posted by adebo"},
    {message: "A new property was posted by adebo"},
    {message: "A new property was posted by adebo"},
    {message: "A new property was posted by adebo"},
]

const NotificationsList = () => {
  return (
    <div>
        {
            notifations.map(notification=>(
                <NoticationCard notification={notification}/>
            ))
        }
    </div>
  )
}

export default NotificationsList