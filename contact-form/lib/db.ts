import mongoose from 'mongoose';

const MONGODB_URI: string = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URL environment variable');
}

let isConnected: boolean = false;

export default async function dbConnect(): Promise<typeof mongoose> {
  if (isConnected) {
    console.log('mongodb is already connected');
    return mongoose;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);

    isConnected = db.connections[0].readyState === 1;

    console.log('Connected to MongoDB');

    return db;
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
}
