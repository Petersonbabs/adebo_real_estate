import React from 'react'
import "../styles/NotificationStyle.css"

const NoticationCard = ({notification}) => {
  return (
    <div className='notification-card'>
        <h2>{notification.message}</h2>
    </div>
  )
}

export default NoticationCard