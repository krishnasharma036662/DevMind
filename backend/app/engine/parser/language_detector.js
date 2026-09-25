/**
 * DevMind - Language Detector
 *
 * Detects the programming language of a repository file without
 * maintaining a small hard-coded four-language list.
 *
 * The Tree-sitter language pack owns the language catalog, allowing
 * DevMind to grow with the complete language registry it supports.
 */

import { detectLanguage as detectTreeSitterLanguage } from '@xberg-io/tree-sitter-language-pack';


/**
 * Detects a programming language from a file path.
 *
 * @param {string} filePath - Repository-relative or absolute file path.
 * @returns {string|null} Normalized Tree-sitter language name.
 */
export function detectLanguage(filePath) {
  if (typeof filePath !== 'string' || filePath.trim() === '') {
    return null;
  }

  const detectedLanguage = detectTreeSitterLanguage(filePath);

  return detectedLanguage || null;
}
