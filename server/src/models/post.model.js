import { Schema, model } from 'mongoose'

const postSchema = new Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true }
})

export default model('Post', postSchema)
