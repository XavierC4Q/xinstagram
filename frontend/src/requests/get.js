import axios from 'axios'

export const isLoggedIn = async function() {
  let user = await axios.get('/get/user')
  return user
}

export const allUsers = async function() {
  let users = await axios.get('/get/allusers')
  return users
}
