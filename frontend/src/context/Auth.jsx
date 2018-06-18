import React from 'react'
import axios from 'axios'

export const AuthContext = React.createContext()

export class AuthProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      user: '',
      loggedIn: false
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = (username, password) => {
    axios.post('/post/login', {
      username: username,
      password: password
    }).then(() => {
      this.setState({loggedIn: true})
    })
    .catch(error => {
      console.log('flaw in the login')
    })
  }

  handleRegister = (username, password, email, phone, private ) => {
    axios.post('/post/register', {
      username: username,
      password: password,
      email: email,
      phone: phone,
      private: private
    })
    .then(res => {
      this.setState({user: res.data.data})
    })
    .catch(error => {
      console.log('flaw in the register')
    })
  }

  render() {
    return (<AuthContext.Provider value={{
        ...this.state,
        login: this.handleLogin,
        input: this.handleInput
      }}>
      {this.props.children}
    </AuthContext.Provider>)
  }
}
