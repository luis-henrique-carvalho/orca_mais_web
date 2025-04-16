import { RouteConfig } from "./config";
import { matchPath } from "react-router-dom";

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

export function findRoutePath(
  routes: RouteConfig[],
  pathname: string
): RouteConfig[] | null {
  for (const route of routes) {
    const match = matchPath({ path: route.path, end: false }, pathname);

    if (match) {
      if (route.children) {
        const childPath = findRoutePath(route.children, pathname);
        if (childPath) {
          return [route, ...childPath];
        }
      }

      const exactMatch = matchPath({ path: route.path, end: true }, pathname);
      if (exactMatch) {
        return [route];
      }
    }
  }
  return null;
}
