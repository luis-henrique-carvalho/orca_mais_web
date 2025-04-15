// AutoBreadcrumb.tsx
import { useLocation, matchPath, Link } from "react-router-dom";
import { flattenRoutes } from "@/routes/helpers";
import { routes } from "@/routes/config";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";

export function AutoBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const allRoutes = flattenRoutes(routes);

  const breadcrumbs = pathnames.map((_, idx) => {
    const url = `/${pathnames.slice(0, idx + 1).join("/")}`;

    const matchedRoute = allRoutes.find((route) =>
      matchPath({ path: route.path, end: true }, url)
    );


    return {
      label: matchedRoute?.breadcrumbLabel || matchedRoute?.title || url,
      path: url,
    };
  });

  return (
    <Breadcrumb>
      {breadcrumbs.map(({ label, path }) => (
        <BreadcrumbItem key={path}>
          <BreadcrumbLink asChild>
            <Link to={path}>{label}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
