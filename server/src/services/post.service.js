import Post from '../models/post.model.js'

class PostService {
  constructor () {
    this.cloud = null
  }

  async uploadPhoto (photo) {
    return await this.cloud.uploader.upload(photo)
  }

  async createPost (postData) {
    const { name, prompt, photo } = postData
    const photoUrl = await this.uploadPhoto(photo)
    const post = new Post({ name, prompt, photo: photoUrl.url })
    const postSaved = await post.save()
    return postSaved
  }

  async getPosts () {
    return await Post.find({})
  }
}

export default PostService
