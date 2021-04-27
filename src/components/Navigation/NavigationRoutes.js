import React, { Suspense } from "react";
// import { Route } from "react-router";
import { Route, Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

const NavigationRoutes = () => {
  return (
    <Suspense fallback={<h2>loading..</h2>}>
      <Switch>
        {mainRoutes.map(({ path, exact, component }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;
