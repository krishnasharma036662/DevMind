/**
 * DevMind - Database Configuration
 *
 * This file is responsible for establishing and managing
 * the MongoDB connection used by DevMind.
 *
 * Database:
 * - MongoDB
 * - Mongoose
 *
 * Design principle:
 * Other parts of the application should NOT directly access
 * process.env or create their own MongoDB connections.
 *
 * They should use the centralized database configuration
 * provided by this file.
 */

import mongoose from 'mongoose';

import { config } from './environment.js';


// --------------------------------------------------
// Database Connection
// --------------------------------------------------

/**
 * Establishes a connection with MongoDB.
 *
 * Mongoose manages the underlying MongoDB connection and
 * provides the object-document mapping layer used by DevMind.
 *
 * @returns {Promise<void>} Resolves when the connection succeeds.
 *
 * @throws {Error} Throws an error if MongoDB connection fails.
 */
export async function connectDatabase() {
  try {
    await mongoose.connect(config.database.mongoUri);

    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection failed.');
    console.error(error.message);

    throw error;
  }
}


// --------------------------------------------------
// Database Disconnection
// --------------------------------------------------

/**
 * Closes the active MongoDB connection.
 *
 * This is mainly useful during:
 * - Application shutdown
 * - Automated testing
 * - Graceful process termination
 *
 * @returns {Promise<void>} Resolves when the connection closes.
 */
export async function disconnectDatabase() {
  try {
    await mongoose.disconnect();

    console.log('MongoDB disconnected successfully.');
  } catch (error) {
    console.error('MongoDB disconnection failed.');
    console.error(error.message);

    throw error;
  }
}


// --------------------------------------------------
// Connection Status
// --------------------------------------------------

/**
 * Returns the current MongoDB connection state.
 *
 * Mongoose connection states:
 *
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 *
 * @returns {number} Current Mongoose connection state.
 */
export function getDatabaseState() {
  return mongoose.connection.readyState;
}