import express from 'express'
import cors from 'cors'

const app = express()

function createApp () {
  app.use(cors())
  app.use(express.json({ limit: '50mb' }))

  app.get('/', async (req, res) => {
    res.send('Hello from DALL-E!')
  })
  return app
}

export { createApp }
