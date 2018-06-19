import React from 'react'
import {Redirect} from 'react-router-dom'

class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      confirmPass: '',
      email: '',
      confirmEmail: '',
      phone: '',
      privacy: false
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

  render() {
    const {
      username,
      password,
      confirmPass,
      email,
      confirmEmail,
      privacy,
      phone
    } = this.state
    let matchingPass = password === confirmPass
    let matchingEmail = email === confirmEmail
    if (this.props.auth) {
      if (this.props.auth.loggedIn) {
        return (<Redirect to='/'/>)
      } else {
        return (<div className='register-form-container'>
          <h1 className='register-form-header'>Register for an Account Here</h1>
          <form className='register-form' onSubmit={event => {
              event.preventDefault()
              this.props.auth.register(username, password, email, phone, privacy)
            }}>
            <div className='register-form-section'>
              <label>
                Username: {" "}
              </label>
              <input type='text' name='username' value={username} onInput={this.handleInput} placeholder='Enter a username'/>
            </div>
            <div className='register-form-section'>
              <label>
                Password: {" "}
              </label>
              <input type='text' name='password' value={password} onInput={this.handleInput} placeholder='Enter a password'/>
            </div>
            <div className='register-form-section'>
              <label>
                Confirm Password: {" "}
              </label>
              <input type='text' name='confirmPass' value={confirmPass} onInput={this.handleInput} placeholder='Confirm your password'/>
            </div>
            <div className='register-form-section'>
              <label>
                Email: {" "}
              </label>
              <input type='text' name='email' value={email} onInput={this.handleInput} placeholder='Enter a email'/>
            </div>
            <div className='register-form-section'>
              <label>
                Confirm Email: {" "}
              </label>
              <input type='text' name='confirmEmail' value={confirmEmail} onInput={this.handleInput} placeholder='Confirm your email'/>
            </div>
            <div className='register-form-section'>
              <label>
                Phone Number: {" "}
              </label>
              <input type='text' name='phone' value={phone} onInput={this.handleInput} placeholder='Enter a phone number'/>
            </div>
            <div className='register-form-section'>
              <label>
                Private Account?: {" "}
              </label>
              <select onChange={this.handleSelect}>
                <option value='No'>No</option>
                <option value='Yes'>Yes</option>
              </select>
            </div>
            <div>
              {
                password
                  ? email
                    ? matchingPass
                      ? matchingEmail
                        ? <button type='submit' className='register-form-button'>Register</button>
                        : 'Emails must match'
                      : 'Passwords must match'
                    : ''
                  : ''
              }
            </div>
            {this.props.auth.message}
          </form>
        </div>)
      }
    } else {
      return (<div>loading register</div>)
    }
  }
}

export default Register
