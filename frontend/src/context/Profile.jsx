import React from 'react'

import {isLoggedIn, allUsers} from '../requests/get'

export const ProfileContext = React.createContext()

export class ProfileProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      user: '',
      allUsers: ''
    }
  }

  componentDidMount() {
    Promise.all([isLoggedIn(), allUsers()]).then(values => {
      this.setState({user: values[0].data[0], allUsers: values[1].data})
    })
  }

  render() {
    return (<ProfileContext.Provider value={this.state}>
      {this.props.children}
    </ProfileContext.Provider>)
  }
}
