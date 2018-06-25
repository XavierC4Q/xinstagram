import React from 'react'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'

export const Main = ({ info }) => {
  let profilePath = `/profile/page/${info.user.user_id}`
  return(
    <div>
      <nav>
        <Link to={profilePath}>Profile</Link>
      </nav>
      <div>
        <h1>User Feed</h1>
      </div>
    </div>
  )
}
