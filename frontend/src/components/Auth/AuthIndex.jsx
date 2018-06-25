import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {AuthProvider, AuthContext} from '../../context/Auth'

import Login from './Login'
import Register from './Register'

const Home = ({auth}) => {

  return (<div>
    {
      auth.loggedIn
        ? (<Redirect to='/feed/user'/>)
        : <div>
            <nav>
              <Link to='/login'>Login Here</Link>
              {" "}
              <Link to='/register'>Register Here</Link>
            </nav>
            <h1>XInstagram: A React Context Project</h1>
          </div>
    }
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
