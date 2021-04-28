import React from "react";
import { connect } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/authSelector";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationLinkItem from "./NavigationLinkItem";

const NavigationLinks = ({ isAuth }) => {
  return (
    <nav>
      <ul>
        {mainRoutes.map((route) => (
          <NavigationLinkItem key={route.path} isAuth={isAuth} {...route} />
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuth: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(NavigationLinks);
