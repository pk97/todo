import {createContext, useContext, useState} from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {

    const [authenticated, setAuthenticated] = useState(false);

    return(
  <AuthContext.Provider value={{authenticated}}>
      {children}
  </AuthContext.Provider>
    );
}