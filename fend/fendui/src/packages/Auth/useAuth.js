import { useContext } from "react";
import authContext from "../context/auth";
const useAuth = () =>{
    return useContext(authContext);
}
export default useAuth;