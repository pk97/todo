import {createContext, useContext, useState} from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {

    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);

    return(
  <AuthContext.Provider value={{authenticated, setAuthenticated, username, setUsername}}>
      {children}
  </AuthContext.Provider>
    );
}