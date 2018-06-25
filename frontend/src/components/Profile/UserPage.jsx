import React from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

const UserPage = ({user, id}) => {

  return (<div>
    <div>
      <h1>{user.user.username}</h1>
      <div>
        <div>
          <img src={user.user.profile_pic} alt='profile_pic' />
        </div>
      </div>
    </div>
    <div>
      images will be here
    </div>
    <div>
      {
        user.user.user_id === Number(id) ? <Link to='/profile/edit'>Edit</Link> : ''
      }
    </div>
  </div>)
}

export default UserPage
