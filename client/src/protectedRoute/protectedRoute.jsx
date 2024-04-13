import { Navigate, Outlet } from "react-router-dom"



const ProtectedRoute = ({auth}) => {
    return (
        auth ? <Outlet/> : <Navigate replace to="/login" />
    )
}

export default ProtectedRoute