import React from "react";
import AdminLayout from "../layout/Admin/Admin";
import { Redirect } from "react-router-dom";

export const adminRoutes = {
  path: "/admin",
  component: AdminLayout,
  routes: [
    {
      path: "/admin/dashboard",
      exact: true,
      component: React.lazy(() => import("pages/admin/Dashboard/Dashboard")),
    },
    {
      component: () => <Redirect to="/errors/error-404" />,
    },
  ],
};
