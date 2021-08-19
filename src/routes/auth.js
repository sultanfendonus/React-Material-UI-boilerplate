import React from "react";
import HomeLayout from "../layout/home/HomeLayout";
import AuthLayout from "../layout/Auth/Auth";

export const authRoutes = {
  path: "/auth",
  component: AuthLayout,
  routes: [
    {
      path: "/auth/login",
      exact: true,
      component: React.lazy(() => import("pages/auth/Login")),
    },
    {
      path: "/auth/register",
      exact: true,
      component: React.lazy(() => import("pages/auth/Register")),
    },
  ],
};
