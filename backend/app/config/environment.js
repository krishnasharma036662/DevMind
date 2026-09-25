/**
 * DevMind - Environment Configuration
 *
 * Centralizes all environment variables used by the backend.
 *
 * AI provider:
 * DevMind uses Groq for LLM inference.
 * The selected model is an open-weight GPT-OSS model hosted by Groq.
 *
 * Embeddings:
 * Sentence Transformers will be used separately for repository
 * embeddings and semantic retrieval.
 */

import dotenv from 'dotenv';
import { APP_DEFAULTS } from './constants.js';


// --------------------------------------------------
// Load Environment Variables
// --------------------------------------------------

/**
 * Loads variables from the backend `.env` file.
 */
dotenv.config();


// --------------------------------------------------
// Helper Functions
// --------------------------------------------------

/**
 * Reads an environment variable.
 *
 * @param {string} name - Environment variable name.
 * @param {*} defaultValue - Value used when the variable is missing.
 * @returns {*} Environment value or default value.
 */
function getEnv(name, defaultValue = undefined) {
  const value = process.env[name];

  return value !== undefined && value !== ''
    ? value
    : defaultValue;
}


/**
 * Converts an environment variable into a number.
 *
 * @param {string} name - Environment variable name.
 * @param {number} defaultValue - Default numeric value.
 * @returns {number} Parsed numeric value.
 */
function getNumberEnv(name, defaultValue) {
  const value = getEnv(name, defaultValue);
  const parsedValue = Number(value);

  if (Number.isNaN(parsedValue)) {
    throw new Error(`${name} must be a valid number.`);
  }

  return parsedValue;
}


/**
 * Requires an environment variable to exist.
 *
 * @param {string} name - Required environment variable name.
 * @returns {string} Environment value.
 */
function requireEnv(name) {
  const value = getEnv(name);

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}


// --------------------------------------------------
// Application Configuration
// --------------------------------------------------

/**
 * Centralized DevMind configuration.
 *
 * Other backend modules should import configuration from here
 * instead of accessing process.env directly.
 */
export const config = Object.freeze({

  /**
   * General application configuration.
   */
  app: {
    nodeEnvironment: getEnv('NODE_ENV', 'development'),
    port: getNumberEnv('PORT', APP_DEFAULTS.PORT),
    apiPrefix: getEnv('API_PREFIX', APP_DEFAULTS.API_PREFIX),
  },


  /**
   * MongoDB configuration.
   */
  database: {
    mongoUri: requireEnv('MONGODB_URI'),
  },


  /**
   * AI configuration.
   *
   * Groq is used for LLM inference.
   */
  ai: {
    provider: 'groq',

    /**
     * Groq API key.
     */
    groqApiKey: getEnv('GROQ_API_KEY', null),

    /**
     * Default model for DevMind explanations.
     *
     * This can be changed through .env without modifying
     * application code.
     */
    model: getEnv(
      'GROQ_MODEL',
      'openai/gpt-oss-120b'
    ),
  },
});