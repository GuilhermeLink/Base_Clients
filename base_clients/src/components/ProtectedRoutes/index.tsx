import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/loginContext'

const ProtectedRoutes = () => {
    const { globalSetLoading, user } = useContext(AuthContext)
    if(globalSetLoading) {
        return null
    }

    return user ? (<Outlet/>) : (<Navigate to='/login' replace />)
}

export default ProtectedRoutes