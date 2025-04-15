import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function PublicRoutes() {
    const { authStage, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <div>Loading...</div>;
    }

    const isLoginOrSignup = location.pathname === '/login' || location.pathname === '/signup'

    return authStage.authenticated && isLoginOrSignup ? <Navigate to='/' /> : <Outlet />
}

export default PublicRoutes
