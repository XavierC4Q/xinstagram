import React from 'react'
import { loginUser } from '../axios/postrequest'

export const AuthContext = React.createContext()

export class AuthProvider extends React.Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: '',
      user: '',
      loggedIn: false
    }
  }

  handleInput = event => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleLogin = () => {
    const { username, password } = this.state

    loginUser(username, password).then(res => {
      this.setState({
        username: '',
        password: '',
        user: res.data[0],
        loggedIn: true
      })
    })
  }

  render(){
    return(
      <AuthProvider value={{
          ...this.state,
          handleLogin: this.handleLogin,
          handleInput: this.handleInput
        }}>
        {this.props.children}
      </AuthProvider>
    )
  }
}
