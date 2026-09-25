/**
 * DevMind - Tree-sitter Parser Adapter
 *
 * Provides one language-independent parsing interface for DevMind.
 *
 * The previous implementation was limited to individual grammar
 * packages. DevMind now uses the Tree-sitter Language Pack so the
 * parser layer can work across its complete supported language catalog.
 */

import { getParser } from '@xberg-io/tree-sitter-language-pack';


/**
 * Parses source code using the Tree-sitter grammar for the requested language.
 *
 * The rest of DevMind should depend on this adapter rather than importing
 * language-specific Tree-sitter grammars directly.
 *
 * @param {string} source - Source code to parse.
 * @param {string} language - Tree-sitter language name.
 * @returns {{ language: string, source: string, tree: object, ast: object }}
 * Parsed source and its syntax tree.
 *
 * @throws {TypeError} When source or language is invalid.
 * @throws {Error} When the requested language parser cannot be loaded.
 */
export function parseSource(source, language) {
  if (typeof source !== 'string') {
    throw new TypeError('Source code must be a string.');
  }

  if (typeof language !== 'string' || language.trim() === '') {
    throw new TypeError('Language must be a non-empty string.');
  }

  const parser = getParser(language);
  const tree = parser.parse(source);

  return {
    language,
    source,
    tree,
    ast: tree.rootNode,
  };
}
