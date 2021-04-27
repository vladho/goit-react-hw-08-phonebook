import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationLinkItem from "./NavigationLinkItem";

const NavigationLinks = () => {
  const isAuth = true;
  return (
    <nav>
      <ul>
        {mainRoutes.map((route) => (
          <NavigationLinkItem key={route.path} isAuth {...route} />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLinks;
