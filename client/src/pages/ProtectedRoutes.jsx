import React, { useEffect } from 'react'
import { useUserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    const {user} = useUserContext()

    if(!user){
        return <Navigate to="/login" />
    }
  return (
    <>{children}</>
  )
}

export default ProtectedRoutes