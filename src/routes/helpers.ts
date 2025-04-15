// routes/helpers.ts
import { RouteConfig } from "./config";

// Flatten para mapear todas rotas (usado em ProtectedRoutes, Breadcrumbs etc)
export const flattenRoutes = (routes: RouteConfig[]): RouteConfig[] => {
  const result: RouteConfig[] = [];

  const traverse = (routeList: RouteConfig[]) => {
    for (const route of routeList) {
      result.push(route);
      if (route.children) traverse(route.children);
    }
  };

  traverse(routes);
  return result;
};
