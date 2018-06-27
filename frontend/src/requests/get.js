import axios from 'axios'

export const isLoggedIn = async function() {
  let user = await axios.get('/get/user')
  return user
}

export const singleUser = async function(id) {
  let path = `/get/singleuser/${id}`
  let user = await axios.get(path)
  return user
}

export const allUsers = async function() {
  let users = await axios.get('/get/allusers')
  return users
}

export const getUserPhotos = async function(id) {
  let path = `/get/getuserphotos/${id}`
  let userPhotos = await axios.get(path)
  return userPhotos
}

export const allFollows = async function(id) {
  let path = `/get/allfollows/${id}`
  let follows = await axios.get(path)
  return follows
}

export const allFollowers = async function(id) {
  let path = `/get/allfollowers/${id}`
  let followers = await axios.get(path)
  return followers
}
