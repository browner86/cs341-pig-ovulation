import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

// Make sure that our .env file has been loaded
const envResult = dotenv.config();
if (envResult.error) {
  throw envResult.error;
}

// For some reason when trying to access env variables with process.env.MONGO_USERNAME it doesn't work...
// We can access them with keys... Like process.env['MONGO_USERNAME'] but that's pretty ugly...
// So for now we'll just use the parsed data from the parsed config file
const env = envResult.parsed;

// Load the URI from Heroku if theres one in the environment
// otherwise build the URI
const MONGODB_URI = 
  process.env.MONGODB_URI ||
  `mongodb+srv://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@main.mlsay.mongodb.net/${env.MONGO_DATABASE}?retryWrites=true&w=majority`;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
    cached = global.mongo = { conn: null, promise: null };
}

// Initialize our connection
export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI)
      .then((client) => {
        return {
          client,
        };
      })
      .catch((error) => {
        console.error(`Failed to connect to MongoDB.\nURI: ${MONGODB_URI}\nError: ${error}`);
      });
  }

  cached.conn = await cached.promise;

  return cached.conn;
}

