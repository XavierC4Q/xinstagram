import axios from 'axios'

export function loginUser(username, password){
  return axios.post('/post/login',{
    username: username,
    password: password
  })
}
