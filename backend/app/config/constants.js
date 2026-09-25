/**
 * DevMind - Application Constants
 *
 * This file contains the shared values used across the entire backend.
 *
 * Why this file exists:
 * - Prevents different modules from using different names for the same thing.
 * - Keeps RKM entity and relationship types consistent.
 * - Makes future modules depend on one common vocabulary.
 *
 * IMPORTANT:
 * Do not create duplicate versions of these constants inside other modules.
 */

// --------------------------------------------------
// Repository Source Types
// --------------------------------------------------

/**
 * Defines the supported ways a repository can enter DevMind.
 */
export const REPOSITORY_SOURCE_TYPES = Object.freeze({
  GITHUB: 'github',
  ZIP: 'zip',
});


// --------------------------------------------------
// Repository Status
// --------------------------------------------------

/**
 * Represents the current processing state of a repository.
 */
export const REPOSITORY_STATUS = Object.freeze({
  CREATED: 'created',
  PROCESSING: 'processing',
  READY: 'ready',
  FAILED: 'failed',
});


// --------------------------------------------------
// RKM Entity Types
// --------------------------------------------------

/**
 * Defines every type of software entity that can exist inside
 * the Repository Knowledge Model (RKM).
 *
 * All RKM modules must use these values instead of creating
 * their own entity-type strings.
 */
export const RKM_ENTITY_TYPES = Object.freeze({
  REPOSITORY: 'repository',
  DIRECTORY: 'directory',
  FILE: 'file',
  MODULE: 'module',
  CLASS: 'class',
  INTERFACE: 'interface',
  FUNCTION: 'function',
  METHOD: 'method',
  VARIABLE: 'variable',
  API: 'api',
  TEST: 'test',
});


// --------------------------------------------------
// RKM Relationship Types
// --------------------------------------------------

/**
 * Defines the relationships that can exist between RKM entities.
 *
 * Example:
 *
 * File A --IMPORTS--> File B
 * Class A --CONTAINS--> Method A
 * Function A --CALLS--> Function B
 */
export const RKM_RELATIONSHIP_TYPES = Object.freeze({
  CONTAINS: 'contains',
  IMPORTS: 'imports',
  CALLS: 'calls',
  DEPENDS_ON: 'depends_on',
  INHERITS: 'inherits',
  IMPLEMENTS: 'implements',
  EXPOSES: 'exposes',
  TESTS: 'tests',
  DEFINES: 'defines',
  USES: 'uses',
});


// --------------------------------------------------
// Analysis Module Names
// --------------------------------------------------

/**
 * Defines the names of DevMind's engineering-intelligence modules.
 *
 * Keeping these names centralized ensures that the backend,
 * database, API and frontend all refer to the same modules.
 */
export const ANALYSIS_MODULES = Object.freeze({
  HEALTH: 'health',
  PATTERNS: 'patterns',
  DEAD_CODE: 'dead_code',
  IMPACT: 'impact',
  SIMILARITY: 'similarity',
  EVOLUTION: 'evolution',
});


// --------------------------------------------------
// Analysis Result Status
// --------------------------------------------------

/**
 * Defines the lifecycle of an analysis result.
 */
export const ANALYSIS_STATUS = Object.freeze({
  PENDING: 'pending',
  RUNNING: 'running',
  COMPLETED: 'completed',
  FAILED: 'failed',
});


// --------------------------------------------------
// Application Defaults
// --------------------------------------------------

/**
 * Default values used when environment variables are not provided.
 */
export const APP_DEFAULTS = Object.freeze({
  PORT: 5000,
  API_PREFIX: '/api',
});