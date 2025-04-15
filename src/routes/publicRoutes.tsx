import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function PublicRoutes() {
    const { authStage } = useAuth()

    return authStage.authenticated ? <Navigate to='/' /> : <Outlet />
}

export default PublicRoutes
