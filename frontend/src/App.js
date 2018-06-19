import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { Route, Link, Switch } from 'react-router-dom'

import AuthIndex from './components/Auth/AuthIndex'
import ProfileIndex from './components/Profile/ProfileIndex'

class App extends Component {
  loggedOutPages = () => {
    return(
      <AuthIndex auth={this.props.auth} />
    )
  }

  profilePages = () => {
    if(this.props.auth){
      return(<ProfileIndex />)
    } else {
      return (<div>loading profile stuff</div>)
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={this.loggedOutPages} />
          <Route path='/login' render={this.loggedOutPages} />
          <Route path='/register' render={this.loggedOutPages} />
          <Route exact path='/profile/userpage' render={this.profilePages}/>
        </Switch>
      </div>
    );
  }
}

export default App;
