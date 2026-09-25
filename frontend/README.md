# DevMind Frontend

Final frontend foundation for DevMind.

## Locked stack
- React.js + JavaScript
- Tailwind CSS
- Axios for REST communication
- React Router

## Architecture

```text
Pages / UI
    ↓
Feature Modules
    ↓
Services
    ↓
API Client
    ↓
Node.js + Express REST API
```

The frontend is presentation-only. Repository parsing, RKM construction, deterministic analysis, scoring, graph processing and AI explanation remain backend responsibilities.

## Principles
- JavaScript only (`.js` / `.jsx`)
- SOLID-oriented separation of concerns
- No hard-coded engineering results
- No analysis algorithms in the browser
- API communication isolated in `src/api`
- Business-facing frontend operations isolated in `src/services`
- Reusable layout/UI isolated in `src/components`
- Features organized under `src/features`
- Pages remain composition/presentation layers

## Backend contract
Set `VITE_API_URL` to the DevMind Express REST API base URL. The login service currently expects `POST /auth/login`; other services should be added only when the corresponding backend API is implemented.
