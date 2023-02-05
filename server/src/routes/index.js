import { Router } from 'express'
import dalleRouter from './dalle.router.js'

function routerApi (app) {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/dalle', dalleRouter)
}

export { routerApi }
