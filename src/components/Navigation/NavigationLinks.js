import React from "react"
import { connect } from "react-redux"
import { getIsAuthenticated } from "../../redux/auth/authSelector"
import { mainRoutes } from "../../routes/mainRoutes"
import NavigationLinkItem from "./NavigationLinkItem"
import styles from "./Navigation.module.css"

const NavigationLinks = ({ isAuth }) => {
  return (
    <nav>
      <ul className={styles.list}>
        {mainRoutes.map((route) => (
          <NavigationLinkItem key={route.path} isAuth={isAuth} {...route} />
        ))}
      </ul>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  isAuth: getIsAuthenticated(state),
})

export default connect(mapStateToProps)(NavigationLinks)
