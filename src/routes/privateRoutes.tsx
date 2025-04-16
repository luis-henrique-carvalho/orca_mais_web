import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext'
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { AppSidebar } from "@/components/app-sidebar";
import ContainerLayout from "@/components/container-layout";

function PrivateRoutes() {
  const { authStage, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return authStage.authenticated ? (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <ContainerLayout>
          <Outlet />
        </ContainerLayout>
      </SidebarInset>
    </SidebarProvider>
  ) : <Navigate to="/login" />;
}

export default PrivateRoutes;
