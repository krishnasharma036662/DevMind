import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage("");

    if (!formData.email || !formData.password) {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await login(formData);

      /*
       * Authentication state will eventually be handled
       * by the application auth layer.
       *
       * For now, the backend response is expected to
       * contain the authenticated user/session information.
       */
      if (response?.token) {
        localStorage.setItem("devmind_token", response.token);
      }

      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(
        error?.message || "Unable to sign in. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Product introduction */}
        <section className="hidden bg-slate-50 px-12 py-12 lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white">
                D
              </div>

              <span className="text-2xl font-semibold">DevMind</span>
            </div>

            <div className="mt-24 max-w-xl">
              <h1 className="text-5xl font-semibold leading-tight tracking-tight">
                Your Code.
                <br />
                Deeper Insights.
                <br />
                <span className="text-slate-500">Better Decisions.</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                DevMind understands your repository, discovers engineering
                insights, and helps you make better decisions about your code.
              </p>

              <div className="mt-10 space-y-6">
                <FeatureItem
                  title="Understand Your Repository"
                  description="Get a complete structural view of your codebase."
                />

                <FeatureItem
                  title="Discover Engineering Insights"
                  description="Analyze health, patterns, dead code, impact and similarity."
                />

                <FeatureItem
                  title="Powered by AI"
                  description="Get grounded explanations and documentation from your repository."
                />
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500">
            “A clearer codebase leads to a brighter tomorrow.”
            <span className="ml-2">— DevMind</span>
          </p>
        </section>

        {/* Login */}
        <section className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <div className="mb-10 lg:hidden">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white">
                  D
                </div>

                <span className="text-2xl font-semibold">DevMind</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-8">
                <h2 className="text-3xl font-semibold">Welcome back</h2>

                <p className="mt-2 text-slate-500">
                  Sign in to your DevMind account
                </p>
              </div>

              {errorMessage && (
                <div
                  role="alert"
                  className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                  />
                </div>

                <div className="flex justify-end">
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-slate-600 hover:text-slate-900"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>
              </form>

              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-xs text-slate-400">
                  OR CONTINUE WITH
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-medium transition hover:bg-slate-50"
                >
                  GitHub
                </button>

                <button
                  type="button"
                  className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-medium transition hover:bg-slate-50"
                >
                  Google
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-slate-900 hover:underline"
                >
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function FeatureItem({ title, description }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700">
        ✓
      </div>

      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default LoginPage;