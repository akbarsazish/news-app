import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import ForgotPass from './components/ForgotPass'
import Header from './components/generalComponent/Header'
import { AuthProvider } from './contexts/AuthContext'
import Dashboard from './components/Dashboard'

function App() {
  const navigate = useNavigate();
 
 
  return (
    <>
     <Header />
     <AuthProvider >
       <Dashboard />
     </AuthProvider>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-pass' element={<ForgotPass />} />
      </Routes> */}
    </>
  )
} 

export default App
