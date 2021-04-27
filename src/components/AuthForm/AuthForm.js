import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { register, login } from "../../redux/auth/authOperation"

class AuthForm extends Component {
  initialState = {
    name: "",
    email: "",
    password: "",
  }
  state = {
    ...this.initialState,
  }

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onHandleSubmit = (e) => {
    e.preventDefault()
    this.props.location.pathname.slice(1) === "login" ? this.props.onLogin(this.state) : this.props.onRegister(this.state)
    this.setState({ ...this.initialState })
  }
  render() {
    const currentPage = this.props.location.pathname.slice(1)
    const isLoginPage = currentPage === "login" ? "Pls, SingIn" : "Pls, SingUp"

    return (
      <div>
        <h1> {isLoginPage}</h1>
        <div>
          <form onSubmit={this.onHandleSubmit}>
            {currentPage === "register" && (
              <label>
                <p>Name</p>
                <input type="name" name="name" value={this.state.name} required onChange={this.onHandleChange} />
              </label>
            )}
            <label>
              <p>Email</p>
              <input type="email" name="email" value={this.state.email} required onChange={this.onHandleChange} />
            </label>
            <label>
              <p>Password</p>
              <input type="text" name="password" value={this.state.password} required onChange={this.onHandleChange} />
            </label>

            <button type="submit">{currentPage}</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  onRegister: register,
  onLogin: login,
}
export default connect(null, mapDispatchToProps)(withRouter(AuthForm))
