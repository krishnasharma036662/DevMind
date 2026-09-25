import { NavLink } from 'react-router-dom';

const groups = [
  { label: 'Dashboard', to: '/' },
  { label: 'Repository', to: '/repositories' },
  { label: 'Health', to: '/insights/health' },
  { label: 'Design Patterns', to: '/insights/patterns' },
  { label: 'Dead Code', to: '/insights/dead-code' },
  { label: 'Change Impact', to: '/insights/change-impact' },
  { label: 'Similarity', to: '/insights/similarity' },
  { label: 'Documentation', to: '/documentation' },
  { label: 'Diagrams', to: '/diagrams' },
  { label: 'Ask DevMind', to: '/ask-devmind' },
  { label: 'Settings', to: '/settings' },
  { label: 'Help & Support', to: '/help' },
  { label: 'About', to: '/about' }
];

export default function AppLayout({ children }) {
  return <div className="min-h-screen bg-slate-50 text-slate-900"><aside className="fixed inset-y-0 left-0 hidden w-60 border-r border-slate-200 bg-white p-4 lg:block"><div className="mb-7 px-3 text-xl font-bold">🧠 DevMind</div><nav className="space-y-1">{groups.map(item=><NavLink key={item.to} to={item.to} className={({isActive})=>`block rounded-lg px-3 py-2 text-sm ${isActive?'bg-blue-50 text-blue-700 font-semibold':'text-slate-600 hover:bg-slate-50'}`}>{item.label}</NavLink>)}</nav></aside><div className="lg:pl-60"><header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-6 py-3"><input className="w-full max-w-xl rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none" placeholder="Search repositories, files, or ask anything..." /></header><main className="p-6">{children}</main></div></div>;
}
