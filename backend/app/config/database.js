import mongoose from 'mongoose';
import { env } from './environment.js';

export async function connectDatabase() {
  await mongoose.connect(env.mongoUri);
  console.log('MongoDB connected');
}
