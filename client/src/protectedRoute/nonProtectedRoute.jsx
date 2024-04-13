import { Navigate, Outlet } from "react-router-dom"



const NonProtctedRoute = ({auth}) => {
    return (
        !auth ? <Outlet/> : <Navigate replace to="/"/>
    )
}

export default NonProtctedRoute;