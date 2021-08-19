import React, { Fragment, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";
import { LinearProgress } from "@material-ui/core";

import Topbar from "./components/Topbar/Topbar";

const AuthLayout = (props) => {
  const { route } = props;

  const token = window.localStorage.getItem("token");

  if (token) {
    props.history.push("/admin/dashboard");
  }

  return (
    <Fragment>
      <Topbar />
      <main
        sx={{
          height: "100%",
          paddingTop: 56,
        }}
      >
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </main>
    </Fragment>
  );
};

AuthLayout.propTypes = {
  route: PropTypes.object,
};

export default AuthLayout;
