import React from 'react'
import UserProfile from './UserProfile'
import {ProfileContext, ProfileProvider} from '../../context/Profile'

const ProfileIndex = () => {
  return (<div>
    <ProfileProvider>
      <ProfileContext.Consumer>
        {value => (<UserProfile profile={value}/>)}
      </ProfileContext.Consumer>
    </ProfileProvider>
  </div>)
}

export default ProfileIndex
