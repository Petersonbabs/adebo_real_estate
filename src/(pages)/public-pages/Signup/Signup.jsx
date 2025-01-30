import React, { useContext, useEffect } from 'react'
import { authContext } from '../../../contexts/AuthContext'

const Signup = () => {
    const {token, login} = useContext(authContext)
    console.log(token);

    useEffect(()=>{
        login()
    },[])
    


  return (
    <div>Signup</div>
  )
}

export default Signup