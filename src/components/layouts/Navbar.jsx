import React from 'react'
import { PrimaryButton } from '../commons/Buttons'
import NotificationsList from '../../_features/_notifications/components/NotificationsList'

const Navbar = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems:"center", padding: "1rem"}}>
        <h1>Logo</h1>
        <PrimaryButton text={'Start for Free'}/>
        <NotificationsList />
    </div>
  )
}

export default Navbar