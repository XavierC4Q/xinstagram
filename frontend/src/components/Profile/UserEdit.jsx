import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      profile_pic: '',
      password: '',
      email: '',
      phone: '',
      privacy: false,
      message: ''
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSelect = event => {
    if (event.target.value === 'Yes') {
      this.setState({privacy: true})
    } else {
      this.setState({privacy: false})
    }
  }

  handleUserEdit = () => {
    const {username, profile_pic, password, email, phone, privacy, message} = this.state
    const info = this.props.user.user
    axios.patch(`/patch/useredit/${info.user_id}`, {
      username: username
        ? username
        : info.username,
      profile_pic: profile_pic
        ? profile_pic
        : info.profile_pic,
      email: email
        ? email
        : info.email,
      phone: phone
        ? phone
        : info.phone,
      private: privacy
    }).then(() => {
      this.setState({
        username: '',
        profile_pic: '',
        password: '',
        email: '',
        phone: '',
        privacy: false,
        message: 'Changes made'
      })
    })
    .then(() => {
      this.props.user.update()
    }).catch(error => {
      console.log('flaw in the user edit')
    })
  }

  render() {
    const { username, profile_pic, password, email, phone, privacy, message } = this.state
    let profilePath = `/profile/page/${this.props.user.user.user_id}`
    return (<div>
      <h1>Edit Your Profile</h1>
      <form onSubmit={event => {
          event.preventDefault()
          this.handleUserEdit()
        }}>
        <div>
          <label>
            Username:
            {" "}
          </label>
          <input type='text' value={username} onInput={this.handleInput} name='username' />
        </div>
        <div>
          <label>
            Password:
            {" "}
          </label>
          <input type='text' value={password} onInput={this.handleInput} name='password' />
        </div>
        <div>
          <label>
            Profile Picture:
            {" "}
          </label>
          <input type='text' value={profile_pic} onInput={this.handleInput} name='profile_pic' />
        </div>
        <div>
          <label>
            Email:
            {" "}
          </label>
          <input type='text' value={email} onInput={this.handleInput} name='email' />
        </div>
        <div>
          <label>
            Phone Number:
            {" "}
          </label>
          <input type='text' value={phone} onInput={this.handleInput} name='phone' />
        </div>
        <div>
          <label>
            Privacy Setting:
            {" "}
          </label>
          <select onChange={this.handleSelect}>
            <option value='No'>No</option>
            <option value='Yes'>Yes</option>
          </select>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
        <div>
          {message}
          <Link to={profilePath}>Back to Profile</Link>
        </div>
      </form>
    </div>)
  }
}

export default UserEdit
