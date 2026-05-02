import mongoose from 'mongoose'

const DEFAULT_DATABASE_NAME = 'resort-sample-web'

let connectionPromise: Promise<typeof mongoose> | null = null

function getMongoConfig() {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    return null
  }

  return {
    uri,
    dbName: process.env.MONGODB_DB ?? DEFAULT_DATABASE_NAME,
  }
}

export async function connectToMongo() {
  const config = getMongoConfig()

  if (!config) {
    return null
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(config.uri, {
      dbName: config.dbName,
    })
  }

  try {
    return await connectionPromise
  } catch (error) {
    connectionPromise = null
    throw error
  }
}

export async function requireMongoConnection(message?: string) {
  const connection = await connectToMongo()

  if (!connection) {
    throw new Error(
      message ?? 'MongoDB is not configured. Add MONGODB_URI to continue.',
    )
  }

  return connection
}
