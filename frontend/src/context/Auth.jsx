import React from 'react'
import axios from 'axios'

export const AuthContext = React.createContext()

export class AuthProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      user: '',
      loggedIn: false,
      message: ''
    }
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

  handleRegister = (username, password, email, phone, privacy ) => {
    axios.post('/post/register', {
      username: username,
      password: password,
      email: email,
      phone: phone,
      private: privacy
    })
    .then(res => {
      this.setState({user: res.data.data, message: 'You have been registered'})
    })
    .catch(error => {
      console.log('flaw in the register')
    })
  }

  render() {
    return (<AuthContext.Provider value={{
        ...this.state,
        login: this.handleLogin,
        register: this.handleRegister
      }}>
      {this.props.children}
    </AuthContext.Provider>)
  }
}
