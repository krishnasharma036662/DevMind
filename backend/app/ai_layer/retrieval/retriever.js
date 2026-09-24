// Retrieval must return repository evidence before an LLM is called.
export async function retrieveEvidence(query, repositoryId) {
  return { query, repositoryId, evidence: [] };
}
