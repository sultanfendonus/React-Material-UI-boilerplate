import React, { Suspense } from "react";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";
import { LinearProgress } from "@material-ui/core";

const HomeLayout = (props) => {
  const { route } = props;

  return (
    <main sx={{ height: "100%" }}>
      <Suspense fallback={<LinearProgress />}>
        {renderRoutes(route.routes)}
      </Suspense>
    </main>
  );
};

HomeLayout.propTypes = {
  route: PropTypes.object,
};

export default HomeLayout;
