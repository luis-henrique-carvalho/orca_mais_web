import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext'

function PrivateRoutes() {
  const { authStage } = useAuth()

  return authStage.authenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
