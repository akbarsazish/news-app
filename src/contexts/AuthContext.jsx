import React, { useContext, useState, useEffect } from 'react'

const AuthContext = React.createContext()
import { useNavigate } from 'react-router-dom'
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
  }, []) // Empty dependency array means this effect runs once on component mount

  const value = { isLogedIn, setIsLogedIn, setAuthUser, authUser }

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}
