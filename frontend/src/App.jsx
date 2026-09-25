import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import LoginPage from './features/auth/LoginPage';
import Dashboard from './pages/Dashboard';
import PageShell from './pages/PageShell';

const pages = {
  '/repositories': ['Repositories', 'Manage and analyze your code repositories.'],
  '/repository': ['Repository', 'Repository structure, entities and relationships.'],
  '/insights/health': ['Repository Health', 'Analyze code quality and maintainability.'],
  '/insights/patterns': ['Design Patterns', 'Detect structural design patterns.'],
  '/insights/dead-code': ['Dead Code', 'Find potentially unused code.'],
  '/insights/change-impact': ['Change Impact Analysis', 'Understand how a change can affect the repository.'],
  '/insights/similarity': ['Code Similarity', 'Compare repository and code structure.'],
  '/documentation': ['Documentation', 'Repository-grounded documentation generated through the AI layer.'],
  '/diagrams': ['Diagrams', 'Visualize repository architecture and relationships.'],
  '/ask-devmind': ['Ask DevMind', 'Ask questions grounded in repository data and verified analysis.'],
  '/settings': ['Settings', 'Manage account and application preferences.'],
  '/help': ['Help & Support', 'Find help for using DevMind.'],
  '/about': ['About DevMind', 'Learn about the DevMind platform.']
};

function GenericPage({ title, description }) { return <PageShell title={title} description={description}><div className="rounded-xl border border-slate-200 bg-white p-8 text-sm text-slate-500">Live data and actions will come from the corresponding REST API. No engineering result is calculated in the browser.</div></PageShell>; }

export default function App() { return <BrowserRouter><Routes><Route path="/" element={<LoginPage />} /><Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />{Object.entries(pages).map(([path, [title, description]]) => <Route key={path} path={path} element={<AppLayout><GenericPage title={title} description={description} /></AppLayout>} />)}</Routes></BrowserRouter> }
