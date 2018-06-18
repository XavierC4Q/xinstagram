import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {AuthProvider, AuthContext} from '../context/Auth'

import Login from './Login'

class Main extends React.Component {

  mainPage = () => {
    return(
      <div>
        <h1>Main Page</h1>
        <p>test test</p>
        <Link to='/login'>Login Here</Link>
      </div>
    )
  }

  loginPage = () => {
    return(
      <div>
        <AuthProvider>
          <AuthContext.Consumer>
            {value => (
              <Login auth={value} />
            )}
          </AuthContext.Consumer>
        </AuthProvider>
      </div>
    )
  }


  render(){
    return(
      <Switch>
        <Route exact path='/' render={this.mainPage} />
        <Route path='/login' component={this.loginPage} />
      </Switch>
    )
  }
}

export default Main
