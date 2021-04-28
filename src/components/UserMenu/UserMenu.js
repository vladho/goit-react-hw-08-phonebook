import React from "react"
import { connect } from "react-redux"
import { logOut } from "../../redux/auth/authOperation"
import { getUserName } from "../../redux/auth/authSelector"
import styles from "./UserMenu.module.css"

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className={styles.box}>
      <span>{` Welcome, ${name}`}</span>
      <button type="button" onClick={onLogout} className={styles.btn}>
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
