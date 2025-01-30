import React from 'react'
import { PrimaryButton } from '../commons/Buttons'

const Footer = () => {
  return (
    <div style={{
        height: "200px",
        background: 'black',
        padding: "4rem 2rem",
        color: "white"
    }}>
        <PrimaryButton text={'Login'}/>
    </div>
  )
}

export default Footer