import React, { useState } from 'react'
import { PrimaryButton } from '../commons/Buttons'
import NotificationsList from '../../_features/_notifications/components/NotificationsList'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [numOfNotification, setyNumOfNotifications] = useState(9)
  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems:"center", padding: "1rem"}}>
        <h1>Logo</h1>
        <PrimaryButton text={'Start for Free'}/>
        <Link to={'/notifications'}>Notifications</Link>
    </div>
  )
}

export default Navbar