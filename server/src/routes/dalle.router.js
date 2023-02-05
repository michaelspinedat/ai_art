import { Router } from 'express'
import { Configuration, OpenAIApi } from 'openai'
import { config } from '../config/index.js'

const router = Router()
const openaiConfig = new Configuration({
  apiKey: config.openaiApiKey
})

const openai = new OpenAIApi(openaiConfig)

router.get('/', async (req, res) => {
  res.send('Hello from DALL-E')
})

router.post('/', async (req, res) => {
  const { prompt } = req.body
  try {
    const aiRes = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    })

    const image = aiRes.data.data[0].b64_json
    res
      .status(200)
      .json({ photo: image })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .send(error?.response.data.error.message)
  }
})

export default router
