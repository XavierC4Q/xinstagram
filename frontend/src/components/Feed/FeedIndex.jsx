import React from 'react'
import {ProfileContext, ProfileProvider} from '../../context/Profile'

import Feed from './Feed'

export const FeedIndex = () => {
  return(
    <div>
      <ProfileProvider>
        <ProfileContext.Consumer>
          {value => (
            <Feed context={value} />
          )}
        </ProfileContext.Consumer>
      </ProfileProvider>
    </div>
  )
}
