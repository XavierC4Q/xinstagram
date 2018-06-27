import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

import UserPage from './UserPage'
import UserEdit from './UserEdit'

import {postPhoto} from '../../requests/post'

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  userPage = props => {
    const {userID} = props.match.params
    return (<UserPage user={this.props.profile} id={userID} postPhoto={postPhoto}/>)
  }

  userEdit = () => {
    return (<UserEdit user={this.props.profile}/>)
  }

  render() {
    return (<div>
      <Switch>
        <Route exact path='/profile/page/:userID' render={this.userPage}/>
        <Route path='/profile/edit' render={this.userEdit}/>
      </Switch>
    </div>)
  }
}

export default UserProfile
