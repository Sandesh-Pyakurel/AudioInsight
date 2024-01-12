import { Outlet } from "react-router-dom";
import useAuth from "./useAuth";
import { Navigate } from "react-router-dom";
const RequireAuth = () =>{
    const {auth} = useAuth();
    return (
        auth?.user ? <Outlet/>
        : <Navigate to ="/"/>

    )
}
export default RequireAuth;