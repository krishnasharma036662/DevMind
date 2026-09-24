// Adapter boundary for Sentence Transformers embeddings.
// The concrete embedding service will be connected during the AI phase.
export async function embedTexts(texts) {
  throw new Error('Embedding provider not configured yet');
}
