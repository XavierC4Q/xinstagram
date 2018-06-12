import React from 'react'
import {AuthContext, AuthProvider} from '../context/Auth'

const LoginComponent = ({username, password, login, input}) => {
  console.log(this.props)
  return (<div>
    <h2>Login Here</h2>
    <div>
      <input value={username} onInput={input} name='username' type='text' placeholder='Enter Username'/>
      <input value={password} onInput={input} name='password' type='text' placeholder='Enter Password'/>
    </div>
  </div>)
}

class Login extends React.Component {
  render() {
    return (<AuthContext.Consumer>
      {({username, password, handleInput, handleLogin}) => <LoginComponent username={username} password={password} login={handleLogin} input={handleInput}/>}
    </AuthContext.Consumer>)
  }
}

export default Login
