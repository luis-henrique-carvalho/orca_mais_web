import { useLocation } from "react-router-dom";
import { findRoutePath } from "@/routes/helpers";
import { routes } from "@/routes/config";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import React from "react";

export function AutoBreadcrumb() {
  const location = useLocation();
  const routePath = findRoutePath(routes, location.pathname) || [];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {routePath.map((route, idx) => {
          const isLast = idx === routePath.length - 1;

          return (
            <React.Fragment key={route.path}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>
                    {route.breadcrumbLabel || route.title}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={route.path}>
                    {route.breadcrumbLabel || route.title}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
