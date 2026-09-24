# DevMind — Final Architecture

This package contains the frozen project skeleton:

- `backend/` — Node.js + Express + MongoDB/Mongoose + Tree-sitter + RKM + deterministic engineering modules + AI layer.
- `frontend/` — React + TypeScript + Tailwind CSS dashboard.

Core flow:

Repository
-> Repository Intelligence Engine
-> Repository Knowledge Model (RKM)
-> Health / Pattern / Dead Code / Impact / Similarity / Evolution
-> AI Explanation Layer
-> Developer Dashboard

AI is downstream of deterministic repository understanding and analysis.

## Six-month build order

Month 1: Architecture, RKM contract, backend/frontend foundation
Month 2: Repository ingestion, Tree-sitter parsing, entity extraction
Month 3: RKM graph + Health + Pattern + Dead Code
Month 4: Impact + Similarity + Evolution
Month 5: AI/RAG + grounded explanations + documentation/diagrams
Month 6: Dashboard integration, testing, evaluation and final demo

This is the starting architecture skeleton, not a claim that every feature is already implemented.
