import React, {useContext, useState, useEffect} from "react";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export  function AuthProvider(props){
    const [authUser, setAuthUser] = useState(null)
    const [isLogedIn, setIsLogedIn] = useState(false)
    const value = { isLogedIn, setIsLogedIn, setAuthUser, authUser}

    return(
      <AuthContext.Provider value={value}> {props.children}  </AuthContext.Provider>
    )
}
