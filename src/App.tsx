import { Routes, Route, BrowserRouter } from 'react-router';
import PrivateRoutes from './routes/privateRoutes';
import PublicRoutes from './routes/publicRoutes';
import Home from './modules/Auth/Home';
import Login from './modules/Public/Login';
import ErrorComp from './modules/Public/ErrorComp';
import SignUp from './modules/Public/SignUp';
import AppProviders from './providers/AppProviders';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar';
import { AppSidebar } from './components/app-sidebar';
import { SiteHeader } from './components/site-header';

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route element={<Login />} path='/login' />
            <Route element={<SignUp />} path='/signup' />
          </Route>
          <Route
            element={
              <SidebarProvider>
                <AppSidebar variant="inset" />
                <SidebarInset>
                  <SiteHeader />
                  <PrivateRoutes />
                </SidebarInset>
              </SidebarProvider>
            }
          >
            <Route element={<Home />} path='/' />
          </Route>
          <Route element={<ErrorComp />} path='*' />
        </Routes>
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
