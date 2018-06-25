import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {Route, Link, Switch} from 'react-router-dom'

import AuthIndex from './components/Auth/AuthIndex'
import ProfileIndex from './components/Profile/ProfileIndex'
import {FeedIndex} from './components/Feed/FeedIndex'

class App extends Component {
  welcomePage = () => {
    if (this.props.auth) {
      if (this.props.auth.loggedIn) {
        return (<Redirect to='/feed/user'/>)
      } else {
        return (<AuthIndex auth={this.props.auth}/>)
      }
    }
  }

  profilePages = () => {
    if (this.props.auth) {
      return (<ProfileIndex/>)
    } else {
      return (<div>loading profile stuff</div>)
    }
  }

  feedPages = () => {
    if (this.props.auth) {
      if (!this.props.auth.loggedIn) {
        return (<Redirect to='/'/>)
      } else {
        return (<FeedIndex/>)
      }
    }
  }

  render() {
    return (<div>
      <Switch>
        <Route exact="exact" path='/' render={this.welcomePage}/>
        <Route path='/login' render={this.welcomePage}/>
        <Route path='/register' render={this.welcomePage}/>
        <Route exact="exact" path='/profile/userpage/' render={this.profilePages}/>
        <Route path='/profile/edit' render={this.profilePages}/>
        <Route path='/profile/page/:userID' render={this.profilePages}/>
        <Route exact="exact" path='/feed/user' render={this.feedPages}/>
      </Switch>
    </div>);
  }
}

export default App;
