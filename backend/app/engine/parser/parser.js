// Tree-sitter parser adapter.
// Language-specific parsing and AST traversal will be implemented in Phase 2.
export function parseSource(source, language) {
  return { language, source, ast: null };
}
