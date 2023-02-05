import express from 'express'
import cors from 'cors'
import { routerApi } from './src/routes/index.js'

const app = express()

function createApp () {
  app.use(cors())
  app.use(express.json({ limit: '50mb' }))

  app.get('/', async (req, res) => {
    res.send('Hello from DALL-E!')
  })

  routerApi(app)
  return app
}

export { createApp }
