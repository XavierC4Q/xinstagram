import React from 'react'
import {AuthContext} from '../context/Auth'
import {Redirect} from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    let credentials = ['username', 'password']
    const { username, password } = this.state
    if (auth) {
      return (<div>
        <form onSubmit={() => {
            auth.auth.login(username, password)
          }}>
          <h1>Please Login</h1>
          {
            credentials.map(field => (<div className='login-form-section' key={field}>
              <label>
                <span className='form-section-field'>{field}</span>
                {""}
                <div>
                  <input value={this.state[field]} name={field} onInput={this.handleInput} type='text'/>
                </div>
              </label>
            </div>))
          }
          <label>
            <button type='submit' className='login-form-submit'>Submit</button>
          </label>
        </form>
      </div>)
    } else {
      return (<div>loading</div>)
    }
  }
}

export default Login
