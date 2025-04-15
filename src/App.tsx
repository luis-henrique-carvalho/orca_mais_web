import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoutes from './routes/privateRoutes';
import AppProviders from './providers/AppProviders';
import { routes } from './routes/config';
import { flattenRoutes } from './routes/helpers';
import PublicRoutes from './routes/publicRoutes';

function App() {
  const flatRoutes = flattenRoutes(routes);

  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          {flatRoutes.map((route) => {
            return (
              <Route
                element={route.isPrivate ? <PrivateRoutes /> : <PublicRoutes />}
              >
                <Route element={<route.component />} path={route.path} />
              </Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
