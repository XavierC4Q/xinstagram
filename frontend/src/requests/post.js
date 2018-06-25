import axios from 'axios'

export const postPhoto = async function(url,id){
  let postedPhoto = await axios.post('/post/postphoto',{
    user_id: id,
    url: url
  })
  return postedPhoto
}
