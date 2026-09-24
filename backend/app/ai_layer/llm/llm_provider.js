// Provider abstraction for OpenAI OR Gemini.
export async function generateGroundedResponse({ question, evidence, analysis }) {
  throw new Error('LLM provider not configured yet');
}
