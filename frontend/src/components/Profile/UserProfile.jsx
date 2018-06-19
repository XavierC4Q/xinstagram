import React from 'react'
import {Route, Switch} from 'react-router-dom'

import UserPage from './UserPage'

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  userPage = () => {
    return (<UserPage user={this.props.profile}/>)
  }

  render() {
    return (<div>
      <Switch>
        <Route exact="exact" path='/profile/userpage' render={this.userPage}/>
      </Switch>
    </div>)
  }
}

export default UserProfile
