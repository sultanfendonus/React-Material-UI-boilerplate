import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import StyledLink from "components/StyledLink/StyledLink";

const Topbar = (props) => {
  const { className, ...rest } = props;

  return (
    <AppBar {...rest} sx={{ boxShadow: "none" }} color="primary">
      <Toolbar>
        <StyledLink to="/">
          <Typography sx={{ color: "white" }} variant="h6">
            6amTech
          </Typography>
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
};

export default Topbar;
