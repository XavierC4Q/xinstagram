import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {AuthProvider, AuthContext} from '../../context/Auth'

import Login from './Login'
import Register from './Register'

const Home = ({auth}) => {

  return (<div>
    {
      !auth.loggedIn
        ? <nav>
            <Link to='/login'>Login</Link>
            {" "}
            <Link to='/register'>Register</Link>
          </nav>
        : <nav>
            <Link to='/profile/userpage'>Profile</Link>
            {" "}
            <Link to='/feed/userfeed'>Feed</Link>
            {" "}
          </nav>
    }
    <h1>Xinstagram: A React Context Project</h1>
  </div>)
}

class AuthIndex extends React.Component {

  mainPage = () => {
    return (<div>
      <Home auth={this.props.auth}/>
    </div>)
  }

  loginPage = () => {
    return (<div>
      <Login auth={this.props.auth}/>
    </div>)
  }

  registerPage = () => {
    return (<div>
      <Register auth={this.props.auth}/>
    </div>)
  }

  render() {
    return (<Switch>
      <Route exact="exact" path='/' render={this.mainPage}/>
      <Route path='/login' render={this.loginPage}/>
      <Route path='/register' render={this.registerPage}/>
    </Switch>)
  }
}

export default AuthIndex
