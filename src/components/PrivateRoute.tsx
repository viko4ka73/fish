import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const PrivateRoute = () => {

    const {isAuthenticated} = useAuth()

    const location = useLocation()

    return (
        isAuthenticated ?
            <Outlet/>
            :
            <Navigate to="/auth" state={{from: location}} replace/>
    )
}