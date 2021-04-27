import React from "react"
import { NavLink } from "react-router-dom"

const NavigationLinkItem = ({ path, exact, name, isRestricted, isAuth }) => {
  console.log(path)
  return (
    <>
      {((!isAuth && isRestricted) || (isAuth && !isRestricted)) && (
        <li>
          <NavLink to={path} exact={exact}>
            {name}
          </NavLink>
        </li>
      )}
      {/* {isRestricted && ( */}
      {/* <li>
        <NavLink to={path} exact={exact}>
          {name}
        </NavLink>
      </li> */}
      {/* )} */}
    </>
  )
}

export default NavigationLinkItem
