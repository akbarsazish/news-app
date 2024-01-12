import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(null)
  const [isLogedIn, setIsLogedIn] = useState(false)
  const nagigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLogedIn(true)
      nagigate('/')
    } else {
      setIsLogedIn(false)
      setAuthUser(null)
    }
  }, []) 

  const value = { isLogedIn, setIsLogedIn, setAuthUser, authUser }

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}
