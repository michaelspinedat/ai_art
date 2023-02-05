import { createApp } from './app.js'
import { connectDB } from './src/database/index.js'
import { config } from './src/config/index.js'

const startServer = async () => {
  const app = createApp()
  await connectDB(config.mongoUri)
  app.listen(config.port, () => {
    console.log(`Server:${config.port}`)
  })
}

startServer()
