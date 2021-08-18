import React from "react";
import HomeLayout from "../layout/home/HomeLayout";
import Home from "../pages/home/Home";

export const publicRoutes = {
  path: "/",
  component: HomeLayout,
  routes: [
    {
      path: "/others",
      exact: true,
      component: React.lazy(() => import("pages/home/Home")),
    },
  ],
};

// For future reference
// {
//   path: "/",
//       exact: true,
//     component: () => <Redirect to="/auth/user/login" />,
// },
