import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import ProtectedRoutes from '../components/ProtectedRoutes'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const RoutesMain = () => {

  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<Register />} />
        <Route path='*' element={<Navigate to='/login' />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/clients' element={<Home />} />
        </Route>
    </Routes>
  )
}

export default RoutesMain