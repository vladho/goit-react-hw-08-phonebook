import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
// import { Route } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import { getCurrentUser } from "../../redux/auth/authOperation";
import { getIsAuthenticated } from "../../redux/auth/authSelector";
import { mainRoutes } from "../../routes/mainRoutes";

const NavigationRoutes = ({ isAuth, getUser }) => {
  useEffect(() => {
    console.log("sdf");
    getUser();
  }, []);

  return (
    <Suspense fallback={<h2>loading..</h2>}>
      <Switch>
        {mainRoutes.map(
          ({ path, exact, component, isRestricted }) =>
            ((!isAuth && isRestricted) || (isAuth && !isRestricted)) && (
              <Route
                key={path}
                path={path}
                exact={exact}
                component={component}
              />
            )
        )}
        {isAuth ? <Redirect to="/contacts" /> : <Redirect to="/login" />}
      </Switch>
    </Suspense>
  );
};
const mapStateToProps = (state) => ({
  isAuth: getIsAuthenticated(state),
});

const mapDispatchToProps = { getUser: getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(NavigationRoutes);
