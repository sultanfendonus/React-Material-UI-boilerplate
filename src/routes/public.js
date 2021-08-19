import React from "react";
import HomeLayout from "../layout/home/HomeLayout";
import Home from "../pages/home/Home";

export const publicRoutes = {
  path: "/pages",
  component: HomeLayout,
  routes: [
    {
      path: "/pages/home",
      exact: true,
      component: React.lazy(() => import("pages/home/Home")),
    },
    {
      path: "/pages/others",
      exact: true,
      component: React.lazy(() => import("pages/home/OtherPage")),
    },
  ],
};

// For future reference
// {
//   path: "/",
//       exact: true,
//     component: () => <Redirect to="/auth/user/login" />,
// },
