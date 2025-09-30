import { useState } from "react"
import { AuthContext } from "./AuthContext"

export const AuthContextProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(true);

  function login() {
    setLoggedIn(true);
    // sessionStorage.setItem("token", ...)
  }

  function logout() {
    setLoggedIn(false);
    // sessionStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{loggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}