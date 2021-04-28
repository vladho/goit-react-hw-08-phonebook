import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.css"

const NavigationLinkItem = ({ path, exact, name, isRestricted, isAuth }) => {
  return (
    <>
      {/* {((!isAuth && isRestricted) || (isAuth && !isRestricted)) && ( */}
      {!isAuth && isRestricted && (
        <li className={styles.item}>
          <NavLink
            to={path}
            exact={exact}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            {name}
          </NavLink>
        </li>
      )}
    </>
  )
}

export default NavigationLinkItem
