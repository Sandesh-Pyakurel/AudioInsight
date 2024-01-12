import { createContext, useState } from "react";

const authContext = createContext();
const AuthProvider = ({children}) =>{
    const [auth, setAuth] = useState({});
    return(
        <authContext.Provider value = {{auth, setAuth}}>
        {children}
        </authContext.Provider>
    )
    
}
export default authContext;
export {AuthProvider}