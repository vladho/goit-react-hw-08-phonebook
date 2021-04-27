import React from "react"
import { connect } from "react-redux"
import { logOut } from "../../redux/auth/authOperation"
import { getUserName } from "../../redux/auth/authSelector"

const UserMenu = ({ name, onLogout }) => {
  console.log(name)
  return (
    <div>
      <span>{` Welcome, ${name}`}</span>
      <button type="button" onClick={onLogout}>
        LogOut
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: getUserName(state),
})

const mapDispatchToProps = {
  onLogout: logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
