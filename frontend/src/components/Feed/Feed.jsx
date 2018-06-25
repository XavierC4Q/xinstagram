import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {Main} from './Main'

class Feed extends React.Component {

  mainFeed = () => {
    return(
      <Main info={this.props.context} />
    )
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <Switch>
          <Route exact path='/feed/user' render={this.mainFeed} />
        </Switch>
      </div>
    )
  }
}

export default Feed
