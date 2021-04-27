import React from "react"
import { connect } from "react-redux"
import { getIsAuthenticated } from "../../redux/auth/authSelector"
import NavigationLinks from "../Navigation/NavigationLinks"
import UserMenu from "../UserMenu/UserMenu"

const Header = ({ isAuth }) => {
  return (
    <header>
      <NavigationLinks />
      {isAuth && <UserMenu />}
    </header>
  )
}

const mapStateToProps = (state) => ({
  isAuth: getIsAuthenticated(state),
})

export default connect(mapStateToProps)(Header)
