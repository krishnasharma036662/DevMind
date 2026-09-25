import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [state, setState] = useState({ loading: false, error: '' });

  const submit = async (event) => {
    event.preventDefault();
    setState({ loading: true, error: '' });
    try {
      await authService.login(form);
      navigate('/');
    } catch (error) {
      setState({ loading: false, error: error.response?.data?.message || 'Unable to sign in. Please check your credentials.' });
    }
  };

  return <main className="min-h-screen bg-white flex items-center justify-center p-6">
    <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8"><div className="text-2xl font-bold text-slate-900">🧠 DevMind</div><h1 className="mt-8 text-3xl font-bold text-slate-900">Welcome back</h1><p className="mt-2 text-slate-500">Sign in to your DevMind account</p></div>
      <form onSubmit={submit} className="space-y-5">
        <label className="block"><span className="text-sm font-semibold text-slate-700">Email</span><input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-700" placeholder="you@example.com" /></label>
        <label className="block"><span className="text-sm font-semibold text-slate-700">Password</span><input required type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-700" placeholder="Enter your password" /></label>
        {state.error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{state.error}</p>}
        <button disabled={state.loading} className="w-full rounded-xl bg-slate-900 py-3 font-semibold text-white disabled:opacity-60">{state.loading ? 'Signing in…' : 'Sign in →'}</button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-500">Authentication is connected to the backend REST API.</p>
    </section>
  </main>;
}
