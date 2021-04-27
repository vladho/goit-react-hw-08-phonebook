import React, { Suspense } from "react";
// import { Route } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

const NavigationRoutes = () => {
  const isAuth = true;
  return (
    <Suspense fallback={<h2>loading..</h2>}>
      <Switch>
        {/* {mainRoutes.map(({ path, exact, component, isRestricted }) =>
          isAuth && isRestricted ? (
            <Redirect to="/contacts" />
          ) : (
            <Route key={path} path={path} exact={exact} component={component} />
          )
        )} */}

        {mainRoutes.map(({ path, exact, component, isRestricted }) =>
          isAuth && isRestricted ? (
              <Redirect to="/contacts" />
            //    console.log("true")
            <Route key={path} path={path} exact={exact} component={component} />
          ) : (
            // console.log("false")
          )
        )}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;
