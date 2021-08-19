import HomeLayout from "../layout/home/HomeLayout";
import React from "react";
import { Redirect } from "react-router-dom";

export const homeRoutes = {
  path: "/",
  exact: true,
  component: () => <Redirect to="/pages/home" />,
};
