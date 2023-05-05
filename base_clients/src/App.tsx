import React, { useContext } from 'react';
import Login from './pages/login_page';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/register_page';
import { Navbar } from './components/navbar';
import { AuthContext } from './context/AuthContext';
import { ProfileViewUserPage } from './pages/profile_view_user_page';
import { ProtectedRoutes } from './components/protected_routes';


function App() {
  const { userAuthenticated } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Navbar userAuthenticated={userAuthenticated} />
      <Routes>
        <Route path='' element={ userAuthenticated? <Navigate to='/announce-detail' />:<Login />} />
        <Route path='/register' element={ userAuthenticated? <Navigate to='/announce-detail' />:<RegisterPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/profile/:id' element={<ProfileViewUserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
