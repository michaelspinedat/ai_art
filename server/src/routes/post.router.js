import { Router } from 'express'
import { v2 as cloudinary } from 'cloudinary'
import { config } from '../config/index.js'
import PostService from '../services/post.service.js'
const { cloudName, apiKey, apiSecret } = config.cloudinary
const router = Router()
const service = new PostService()

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
})

service.cloud = cloudinary

router.get('/', async (req, res) => {
  try {
    const posts = await service.getPosts()
    res
      .status(200)
      .json({ success: true, data: posts })
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: error })
  }
})

router.post('/', async (req, res) => {
  try {
    const newPost = await service.createPost(req.body)
    res
      .status(201)
      .json({ success: true, data: newPost })
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: error })
  }
})

export default router
