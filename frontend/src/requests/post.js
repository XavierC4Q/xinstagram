import axios from 'axios'

export const postPhoto = async function(url,id){
  let postedPhoto = await axios.post('/post/postphoto',{
    user_id: id,
    url: url
  })
  return postedPhoto
}

export const followUser = async function(userID, follows_user){
  let followRequest = await axios.post('/post/follow',{
    user_id: userID,
    follows_user: follows_user
  })
  return followRequest
}
