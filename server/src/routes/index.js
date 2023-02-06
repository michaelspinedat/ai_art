import { Router } from 'express'
import dalleRouter from './dalle.router.js'
import postRouter from './post.router.js'

function routerApi (app) {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/dalle', dalleRouter)
  router.use('/posts', postRouter)
}

export { routerApi }
