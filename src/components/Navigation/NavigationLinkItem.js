import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLinkItem = ({ path, exact, name, isRestricted, isAuth }) => {
  return (
    <>
      {/* {((isAuth && !isRestricted) || (!isAuth && isRestricted)) && ( */}
      <li>
        <NavLink to={path} exact={exact}>
          {name}
        </NavLink>
      </li>
      {/* )} */}
    </>
  );
};

export default NavigationLinkItem;
