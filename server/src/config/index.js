import * as dotenv from 'dotenv'
dotenv.config()

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI,
  dbName: process.env.MONGO_DB_NAME,
  host: process.env.HOST
}

export { config }
