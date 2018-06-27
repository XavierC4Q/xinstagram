import React from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

import {allFollows, allFollowers, singleUser} from '../../requests/get'
import {followUser} from '../../requests/post'

class UserPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      img: '',
      pageOwner: '',
      follows: '',
      followers: ''
    }
  }

  componentDidMount() {
    Promise.all([
      allFollows(this.props.id),
      allFollowers(this.props.id),
      singleUser(this.props.id)
    ]).then(values => {
      this.setState({follows: values[0].data, followers: values[1].data, pageOwner: values[2].data[0]})
    }).then(() => {
      this.props.user.update()
    })
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handlePhotoPost = () => {
    const {img} = this.state
    this.props.postPhoto(img, this.props.id).then(() => {
      this.setState({img: ''})
    })
  }

  render() {
    const user = this.props.user
    const id = this.props.id
    const postPhoto = this.props.postPhoto
    const {img, pageOwner} = this.state
    return (<div>
      <div>
        <h1>{pageOwner.username}</h1>
        <div>
          <div>
            <img src={pageOwner.profile_pic} alt='profile_pic'/>
          </div>
        </div>
      </div>
      <div>
        images will be here
      </div>
      <div>
        {
          user.user.user_id === Number(id)
            ? <Link to='/profile/edit'>Edit</Link>
            : ''
        }
      </div>
      <div>
        {
          user.user.user_id !== Number(id)
            ? <button onClick={() => {
                  followUser(user.user.user_id, id)
                }}>Follow</button>
            : ''
        }
      </div>
      <div>
        <input type='text' name='img' value={img} onInput={this.handleInput} placeholder='Place image here'/>
        <button onClick={this.handlePhotoPost}>Submit Image</button>
      </div>
    </div>)
  }
}

export default UserPage
