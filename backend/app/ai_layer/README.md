# AI Explanation Layer

AI is downstream of deterministic DevMind analysis.

Flow:
RKM + repository evidence + verified analysis results
-> retrieval
-> LangChain
-> OpenAI or Gemini
-> grounded explanation

Sentence Transformers is the planned semantic-embedding component. Keep the
embedding provider behind this layer so the deterministic engineering engine
never depends on the LLM.
