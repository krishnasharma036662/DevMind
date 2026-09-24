# DevMind

## Repository Intelligence Platform for Software Understanding and Engineering Decision Support

DevMind is a repository intelligence platform that analyses an entire software repository, builds a structured **Repository Knowledge Model (RKM)**, derives engineering insights from that model, and uses AI only to explain those results.

> **Understand the repository first → Analyse it → Let AI explain it.**

---

## Why Are We Building DevMind?

Understanding an unfamiliar codebase is difficult because developers must manually reconstruct:

- repository structure
- dependencies
- function and class relationships
- architecture
- code quality
- unused code
- change impact
- design patterns
- repository evolution

Existing tools address parts of this problem through code search, static analysis, AI chat, dependency graphs, or repository visualisation. :contentReference[oaicite:1]{index=1}

DevMind aims to bring these engineering-understanding capabilities together around **one shared, machine-readable repository model**.

---

## What Are We Adding?

The core contribution of DevMind is not simply another AI code assistant.

We are building:

```text
Repository
     ↓
Repository Intelligence Engine
     ↓
Repository Knowledge Model (RKM)
     ↓
┌──────────┬──────────┬──────────┐
│  Health  │ Patterns │ Dead Code│
└──────────┴──────────┴──────────┘
     ↓
┌──────────┬──────────┐
│  Impact  │Similarity│
└──────────┴──────────┘
     ↓
   Evolution
     ↓
AI Explanation Layer

The RKM acts as the shared source of repository knowledge, allowing multiple engineering analyses to work from the same representation instead of independently interpreting the repository.

This makes DevMind's results more consistent, traceable, and reproducible.

Target Audience

DevMind is designed for:

Software Developers — understand unfamiliar repositories faster.
New Team Members — accelerate codebase onboarding.
Software Engineers — understand dependencies and change impact before modifying code.
Software Architects — explore architecture and structural relationships.
Students & Researchers — study real-world software systems.
Engineering Teams — monitor repository health and evolution.
Core Architecture
Repository
     ↓
Repository Intelligence Layer
     ↓
RKM
     ↓
Engineering Intelligence
     ↓
AI Explanation
     ↓
Developer Dashboard
Repository Intelligence Layer

Built using:

Tree-sitter
AST traversal
entity extraction
relationship extraction
dependency analysis
graph construction

It identifies files, classes, functions, APIs, dependencies, calls and relationships.

Repository Knowledge Model

The RKM represents:

Nodes = Software Entities
Edges = Relationships

Example:

File
 └── contains → Class
                 └── contains → Function
                                  └── calls → Function
Engineering Intelligence

DevMind currently provides:

Repository Health

Measures complexity, duplication, documentation, testing and maintainability-related characteristics.

Design Pattern Detection

Uses AST and structural rules to detect patterns such as Singleton, Factory, Observer, Strategy and MVC.

Dead Code Detection

Uses call graphs and reachability analysis to identify potentially unused entities.

Change Impact Analysis

Traverses dependency and relationship graphs to identify potentially affected components.

Repository Similarity

Converts repository characteristics into feature vectors and calculates weighted similarity.

Repository Evolution

Compares repository states and detects structural, dependency and metric changes.

AI Explanation Layer

AI is not the source of truth.

RKM
 +
Engineering Results
 +
Repository Evidence
        ↓
Retrieval
        ↓
LangChain
        ↓
OpenAI / Gemini
        ↓
Grounded Explanation

AI provides:

Repository Q&A
Documentation
README generation
API documentation
Architecture explanations
Engineering-result explanations

AI does not invent repository entities, relationships, metrics or analysis results.

Technology Stack
Frontend

React + TypeScript + Tailwind CSS

Backend

Node.js + Express.js + REST API

Database

MongoDB + Mongoose

Repository Intelligence

Tree-sitter + Custom Repository Intelligence Engine + Custom RKM

Engineering Intelligence

AST rules + Graph Algorithms + DFS/BFS + Reachability + Dependency Traversal + Feature Vectors + Weighted Similarity + Graph Difference

AI

LangChain + Sentence Transformers + OpenAI API / Google Gemini API

DevMind follows one fundamental rule:

The repository is analysed by our engineering system first. AI explains what the system has already established.

This separation between repository intelligence, engineering analysis, and AI explanation is the foundation of DevMind.