/**
 * DevMind - Repository Model
 *
 * Represents a repository registered inside DevMind.
 *
 * A Repository is the top-level object that identifies a codebase.
 *
 * Example:
 *
 * Repository
 * ├── id
 * ├── name
 * ├── sourceType
 * ├── source
 * └── latestVersionId
 *
 * A repository can have multiple RepositoryVersions.
 *
 * Repository
 *      │
 *      ├── Version 1
 *      ├── Version 2
 *      └── Version 3
 *
 * This separation is important because DevMind's
 * Repository Knowledge Model (RKM) and analysis results
 * are version-specific.
 */

import mongoose from 'mongoose';

import {
  REPOSITORY_SOURCE_TYPES,
} from '../../config/constants.js';


// --------------------------------------------------
// Repository Schema
// --------------------------------------------------

/**
 * Defines the MongoDB structure for a repository.
 *
 * The schema intentionally contains only repository-level
 * information.
 *
 * Version-specific information belongs in RepositoryVersion.
 */
const repositorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    sourceType: {                      // Defines how the repository was imported.
      type: String,
      required: true,
      enum: Object.values(REPOSITORY_SOURCE_TYPES),
    },
    source: {
      type: String,            // Stores the repository source.
      required: true,
      trim: true,
    },

    // A repository can be analysed many times as it changes.Instead of putting the entire version inside the Repository document, we store only its ID
    
    latestVersionId: {                       
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RepositoryVersion',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

repositorySchema.index({   // The name itself is not globally unique because different
  name: 1,                 // users or sources may contain repositories with the same name.
});


const Repository = mongoose.model(
  'Repository',
  repositorySchema
);


export default Repository;