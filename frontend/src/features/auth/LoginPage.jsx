import React, { useState } from "react";
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
  const [showPassword, setShowPassword] = useState(false);

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

      if (response?.token) {
        localStorage.setItem("devmind_token", response.token);
      }

      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message ||
          error?.message ||
          "Unable to sign in. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

        {/* =========================================================
            LEFT PANEL
        ========================================================= */}
        <section className="hidden min-h-screen bg-slate-50 lg:flex">

          <div
            className="
              flex
              min-h-screen
              w-full
              flex-col
              px-[clamp(2rem,5vw,5.5rem)]
              py-[clamp(2rem,4vw,4rem)]
            "
          >

            {/* ---------- Header ---------- */}
            <header className="flex items-center justify-between">

              <Link
                to="/"
                className="flex items-center gap-3"
                aria-label="DevMind home"
              >
                <DevMindLogo />

                <span
                  className="
                    text-[clamp(1.15rem,1.5vw,1.45rem)]
                    font-semibold
                    tracking-[-0.02em]
                  "
                >
                  DevMind
                </span>
              </Link>

              

            </header>


            {/* ---------- Main content ---------- */}
            <div
              className="
                flex
                flex-1
                flex-col
                justify-center
                py-[clamp(3rem,5vh,5rem)]
              "
            >

              <div className="w-full max-w-[clamp(28rem,36vw,38rem)]">

                {/* Hero heading */}
                <h1
                  className="
                    text-[clamp(2.2rem,3.2vw,4rem)]
                    font-semibold
                    leading-[0.98]
                    tracking-[-0.045em]
                  "
                >
                  Your Code.
                  <br />

                  Deeper Insights.
                  <br />

                  <span className="text-slate-500">
                    Better Decisions.
                  </span>
                </h1>


                {/* Description */}
                <p
                  className="
                    mt-[clamp(1.25rem,2vw,1.75rem)]
                    max-w-[34rem]
                    text-[clamp(0.9rem,1vw,1.05rem)]
                    leading-[1.65]
                    text-slate-500
                  "
                >
                  DevMind analyzes your entire codebase, uncovers
                  architecture, detects patterns, and helps you build
                  better software with the power of AI.
                </p>


                {/* Features */}
                <div className="mt-[clamp(2rem,3vw,3rem)] space-y-[clamp(1.1rem,1.8vw,1.7rem)]">

                  <FeatureItem
                    icon={<RepositoryIcon />}
                    title="Understand Your Repository"
                    description="Get a complete visual and structural view of your codebase."
                  />

                  <FeatureItem
                    icon={<InsightsIcon />}
                    title="Discover Engineering Insights"
                    description="Health, patterns, dead code, impact and more."
                  />

                  <FeatureItem
                    icon={<AIIcon />}
                    title="Powered by AI"
                    description="Get clear explanations, documentation and answers about your code."
                  />

                </div>


                {/* Decorative visual */}
                <div className="mt-10 space-y-6">
</div>

{/* Decorative visual */}
<div className="relative mt-12 h-[155px] w-full overflow-visible">
  <img
    src="/src/assets/devmind-code-visual.png"
    alt="DevMind code intelligence visualization"
    className="absolute left-1/2 top-1/2 w-[390px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
  />
</div>

              </div>

            </div>


            {/* ---------- Quote ---------- */}
            <footer className="flex justify-center pb-2">

              <p
                className="
                  text-center
                  text-[clamp(0.65rem,0.75vw,0.8rem)]
                  leading-relaxed
                  text-slate-500
                "
              >
                <span className="block">
                  “A clearer codebase leads to a brighter tomorrow.”
                </span>

                <span className="mt-0.5 block">
                  — DevMind
                </span>
              </p>

            </footer>

          </div>
        </section>


        {/* =========================================================
            RIGHT PANEL
        ========================================================= */}
        <section className="flex min-h-screen flex-col bg-white">

          {/* ---------- Top navigation ---------- */}
          <header
            className="
              flex
              items-center
              justify-end
              px-[clamp(1.5rem,5vw,5.5rem)]
              py-[clamp(1.5rem,3vw,2.75rem)]
            "
          >

            <nav className="flex items-center gap-[clamp(1rem,2vw,2.5rem)]">

              <Link
                to="/"
                className="
                  text-xs
                  font-medium
                  text-slate-500
                  transition
                  hover:text-slate-900
                "
              >
                Understand
              </Link>

              <Link
                to="/"
                className="
                  text-xs
                  font-medium
                  text-slate-500
                  transition
                  hover:text-slate-900
                "
              >
                Analyze
              </Link>

              <Link
                to="/"
                className="
                  text-xs
                  font-medium
                  text-slate-500
                  transition
                  hover:text-slate-900
                "
              >
                Build Better
              </Link>

            </nav>

          </header>


          {/* ---------- Login area ---------- */}
          <div
            className="
              flex
              flex-1
              items-center
              justify-center
              px-[clamp(1.25rem,5vw,5.5rem)]
              py-8
            "
          >

            <div
              className="
                w-full
                max-w-[clamp(22rem,32vw,34rem)]
                rounded-[clamp(0.75rem,1vw,1rem)]
                border
                border-slate-200
                bg-white
                p-[clamp(1.5rem,2.5vw,3rem)]
                shadow-[0_8px_35px_rgba(15,23,42,0.035)]
              "
            >

              {/* Heading */}
              <div className="mb-[clamp(1.75rem,2.5vw,2.5rem)]">

                <h2
                  className="
                    text-[clamp(1.65rem,2.2vw,2.35rem)]
                    font-semibold
                    tracking-[-0.035em]
                  "
                >
                  Welcome back
                </h2>

                <p
                  className="
                    mt-2
                    text-[clamp(0.8rem,0.9vw,0.95rem)]
                    text-slate-500
                  "
                >
                  Sign in to your DevMind account
                </p>

              </div>


              {/* Error */}
              {errorMessage && (
                <div
                  role="alert"
                  className="
                    mb-5
                    rounded-lg
                    border
                    border-red-200
                    bg-red-50
                    px-4
                    py-3
                    text-sm
                    text-red-700
                  "
                >
                  {errorMessage}
                </div>
              )}


              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-[clamp(1rem,1.5vw,1.35rem)]"
              >

                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      text-slate-800
                    "
                  >
                    Email
                  </label>

                  <div className="relative">

                    <MailIcon />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="
                        h-[clamp(2.6rem,3vw,3rem)]
                        w-full
                        rounded-lg
                        border
                        border-slate-300
                        bg-white
                        pl-10
                        pr-4
                        text-sm
                        text-slate-900
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-slate-500
                        focus:ring-2
                        focus:ring-slate-900/5
                      "
                    />

                  </div>

                </div>


                {/* Password */}
                <div>

                  <label
                    htmlFor="password"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      text-slate-800
                    "
                  >
                    Password
                  </label>

                  <div className="relative">

                    <LockIcon />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="
                        h-[clamp(2.6rem,3vw,3rem)]
                        w-full
                        rounded-lg
                        border
                        border-slate-300
                        bg-white
                        pl-10
                        pr-11
                        text-sm
                        text-slate-900
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-slate-500
                        focus:ring-2
                        focus:ring-slate-900/5
                      "
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        transition
                        hover:text-slate-700
                      "
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      <EyeIcon />
                    </button>

                  </div>

                </div>


                {/* Forgot password */}
                <div className="flex justify-end">

                  <Link
                    to="/forgot-password"
                    className="
                      text-xs
                      font-medium
                      text-slate-500
                      transition
                      hover:text-slate-900
                    "
                  >
                    Forgot password?
                  </Link>

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="
                    flex
                    h-[clamp(2.6rem,3vw,3rem)]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-slate-800
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-slate-900
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {isLoading ? "Signing in..." : "Sign in"}

                  {!isLoading && <ArrowIcon />}
                </button>

              </form>


              {/* Divider */}
              <div className="my-[clamp(1.5rem,2vw,2rem)] flex items-center gap-3">

                <div className="h-px flex-1 bg-slate-200" />

                <span className="whitespace-nowrap text-[10px] font-medium text-slate-400">
                  OR CONTINUE WITH
                </span>

                <div className="h-px flex-1 bg-slate-200" />

              </div>


              {/* Social login */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <button
                  type="button"
                  className="
                    flex
                    h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-slate-300
                    bg-white
                    text-xs
                    font-medium
                    text-slate-700
                    transition
                    hover:bg-slate-50
                  "
                >
                  <GitHubIcon />
                  Continue with GitHub
                </button>


                <button
                  type="button"
                  className="
                    flex
                    h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-slate-300
                    bg-white
                    text-xs
                    font-medium
                    text-slate-700
                    transition
                    hover:bg-slate-50
                  "
                >
                  <GoogleIcon />
                  Continue with Google
                </button>

              </div>


              {/* Register */}
              <p
                className="
                  mt-[clamp(1.75rem,2.5vw,2.5rem)]
                  text-center
                  text-xs
                  text-slate-500
                "
              >
                Don't have an account?{" "}

                <Link
                  to="/register"
                  className="
                    font-semibold
                    text-blue-600
                    hover:text-blue-700
                  "
                >
                  Create one
                </Link>
              </p>

            </div>

          </div>


          {/* ---------- Footer ---------- */}
          <footer
            className="
              flex
              items-center
              justify-between
              gap-6
              px-[clamp(1.5rem,5vw,5.5rem)]
              pb-[clamp(1.5rem,3vw,2.75rem)]
              text-[clamp(0.65rem,0.75vw,0.8rem)]
              text-slate-500
            "
          >

            <div className="flex items-center gap-[clamp(1rem,2vw,2rem)]">

              <Link
                to="/privacy"
                className="transition hover:text-slate-900"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="transition hover:text-slate-900"
              >
                Terms
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-slate-900"
              >
                Contact
              </Link>

            </div>

            <span className="whitespace-nowrap">
              © 2025 DevMind. All rights reserved.
            </span>

          </footer>

        </section>

      </div>
    </main>
  );
}


/* ================================================================
   FEATURE COMPONENT
================================================================ */

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex items-start gap-[clamp(0.75rem,1vw,1rem)]">

      <div
        className="
          flex
          h-[clamp(2.35rem,3vw,3rem)]
          w-[clamp(2.35rem,3vw,3rem)]
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-blue-100
          bg-blue-50/50
          text-blue-600
        "
      >
        {icon}
      </div>

      <div className="min-w-0 pt-0.5">

        <h3
          className="
            text-[clamp(0.75rem,0.9vw,0.9rem)]
            font-semibold
            text-slate-800
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            max-w-[28rem]
            text-[clamp(0.65rem,0.75vw,0.78rem)]
            leading-[1.45]
            text-slate-500
          "
        >
          {description}
        </p>

      </div>

    </div>
  );
}


/* ================================================================
   DECORATIVE REPOSITORY VISUAL
================================================================ */

function RepositoryVisual() {
  return (
    <div
      className="
        relative
        h-[clamp(8rem,11vw,11rem)]
        w-full
        max-w-[clamp(18rem,28vw,29rem)]
      "
    >

      {/* Soft glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[75%]
          w-[70%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-100/50
          blur-3xl
        "
      />

      {/* Main code card */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-[clamp(5.5rem,7vw,7rem)]
          w-[clamp(7rem,9vw,9rem)]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-xl
          border
          border-slate-200
          bg-white
          shadow-[0_12px_35px_rgba(59,130,246,0.08)]
        "
      >

        <div
          className="
            flex
            h-[65%]
            w-[65%]
            items-center
            justify-center
            rounded-lg
            bg-slate-50
          "
        >
          <span
            className="
              font-mono
              text-[clamp(1.7rem,3vw,2.7rem)]
              font-medium
              text-blue-300
            "
          >
            {"</>"}
          </span>
        </div>

      </div>


      {/* Analyze */}
      <div
        className="
          absolute
          left-[4%]
          top-[8%]
          rounded-lg
          border
          border-blue-100
          bg-white/95
          px-[clamp(0.65rem,1vw,1rem)]
          py-[clamp(0.35rem,0.6vw,0.55rem)]
          text-[clamp(0.55rem,0.7vw,0.7rem)]
          font-medium
          text-blue-500
          shadow-sm
        "
      >
        Analyze
      </div>


      {/* Understand */}
      <div
        className="
          absolute
          bottom-[8%]
          left-0
          rounded-lg
          border
          border-blue-100
          bg-white/95
          px-[clamp(0.65rem,1vw,1rem)]
          py-[clamp(0.35rem,0.6vw,0.55rem)]
          text-[clamp(0.55rem,0.7vw,0.7rem)]
          font-medium
          text-blue-500
          shadow-sm
        "
      >
        Understand
      </div>


      {/* Improve */}
      <div
        className="
          absolute
          right-[2%]
          top-[16%]
          rounded-lg
          border
          border-blue-100
          bg-white/95
          px-[clamp(0.65rem,1vw,1rem)]
          py-[clamp(0.35rem,0.6vw,0.55rem)]
          text-[clamp(0.55rem,0.7vw,0.7rem)]
          font-medium
          text-blue-500
          shadow-sm
        "
      >
        Improve
      </div>


      {/* Connection nodes */}
      <div className="absolute left-[29%] top-[39%] h-2 w-2 rounded-full bg-blue-200" />
      <div className="absolute right-[27%] top-[50%] h-2 w-2 rounded-full bg-blue-200" />
      <div className="absolute bottom-[22%] left-[35%] h-2 w-2 rounded-full bg-blue-200" />

    </div>
  );
}


/* ================================================================
   DEV MIND LOGO
================================================================ */

function DevMindLogo() {
  return (
    <div className="flex h-9 w-9 items-center justify-center">
      <svg
        viewBox="0 0 40 40"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 7C15.2 3.7 8.5 6.2 7.3 11.9C3.4 13.3 2.2 18.5 5 21.5C2.8 25.9 5.9 31 10.8 31.4C12.2 36.4 18.2 38 20 33.7"
          stroke="#2563EB"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        <path
          d="M20 7C24.8 3.7 31.5 6.2 32.7 11.9C36.6 13.3 37.8 18.5 35 21.5C37.2 25.9 34.1 31 29.2 31.4C27.8 36.4 21.8 38 20 33.7"
          stroke="#2563EB"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        <path
          d="M20 8V33"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle cx="13" cy="15" r="1.6" fill="#60A5FA" />
        <circle cx="27" cy="15" r="1.6" fill="#60A5FA" />
        <circle cx="11" cy="24" r="1.6" fill="#60A5FA" />
        <circle cx="29" cy="24" r="1.6" fill="#60A5FA" />
      </svg>
    </div>
  );
}


/* ================================================================
   ICONS
================================================================ */

function MailIcon() {
  return (
    <svg
      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}


function LockIcon() {
  return (
    <svg
      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}


function EyeIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}


function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h13" />
      <path d="m13 7 5 5-5 5" />
    </svg>
  );
}


function GitHubIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" />
    </svg>
  );
}


function GoogleIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
    >
      <path
        fill="#4285F4"
        d="M21.35 12.27c0-.78-.07-1.53-.22-2.27H12v4.3h5.23a4.47 4.47 0 0 1-1.94 2.93v2.42h3.14c1.84-1.69 2.92-4.18 2.92-7.38Z"
      />

      <path
        fill="#34A853"
        d="M12 21.99c2.63 0 4.84-.87 6.45-2.34l-3.14-2.42c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.5A9.74 9.74 0 0 0 12 21.99Z"
      />

      <path
        fill="#FBBC05"
        d="M6.54 14.12A5.86 5.86 0 0 1 6.23 12c0-.74.13-1.46.31-2.12V7.38H3.3A9.99 9.99 0 0 0 2.25 12c0 1.61.39 3.13 1.05 4.62l3.24-2.5Z"
      />

      <path
        fill="#EA4335"
        d="M12 5.85c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.83 2.94 14.63 2 12 2a9.74 9.74 0 0 0-8.7 5.38l3.24 2.5C7.31 7.57 9.46 5.85 12 5.85Z"
      />
    </svg>
  );
}


function RepositoryIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="5" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M12 7v4M12 11l-6 5M12 11l6 5" />
    </svg>
  );
}


function InsightsIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M5 19V11" />
      <path d="M12 19V6" />
      <path d="M19 19V3" />
    </svg>
  );
}


function AIIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M5 5h14v11H9l-4 3V5Z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  );
}


export default LoginPage;