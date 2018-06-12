import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'

import Login from './Login'

class Main extends React.Component {

  mainpage = () => {
    return(
      <div>
        <h1>Main Page</h1>
        <p>test test</p>
        <Link to='/login'>Login Here</Link>
      </div>
    )
  }
  render(){
    return(
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' render={this.mainpage} />
      </Switch>
    )
  }
}

export default Main
