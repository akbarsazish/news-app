import React from 'react'

import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {
  const { isLogedIn, setIsLogedIn, setAuthUser, authUser } = useAuth()
  // console.log('isLogedIn', isLogedIn)
  const logIn = (e) => {
    e.preventDefault()
    setIsLogedIn(true)
  }

  const logOut = (e) => {
    e.preventDefault()
    setIsLogedIn(false)
    setAuthUser(null)
  }

  return (
    <>
      <span> User is currently : {isLogedIn ? ' loged in' : ' loged Out'}</span>{' '}
      <br />
      {isLogedIn ? <span> User Name : {authUser.Name} </span> : null}
      {isLogedIn ? (
        <button
          style={{
            border: '3px solid green',
            display: 'block',
            backgroundColor: 'red',
          }}
          onClick={(e) => logOut(e)}
        >
          {' '}
          Log Out{' '}
        </button>
      ) : (
        <button
          style={{
            border: '3px solid green',
            display: 'block',
            backgroundColor: 'red',
          }}
          onClick={(e) => logIn(e)}
        >
          {' '}
          Log In{' '}
        </button>
      )}
    </>
  )
}

export default Dashboard
