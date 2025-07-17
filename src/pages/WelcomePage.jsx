/* src/pages/WelcomePage.jsx */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
//import aiHero from "../assets/ai-hero.gif";

/* ---------- helpers ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const users = [
  { email: "user1@example.com", password: "user123", role: "user" },
  { email: "admin@example.com", password: "admin123", role: "admin" }
];

/* ---------- main ---------- */
const WelcomePage = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false); // false = login, true = signup
  const [role, setRole] = useState("user"); // 'user' | 'admin'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
     e.preventDefault(); // prevent default form submission
    const matchedUser = users.find(
      user => user.email === email && user.password === password && user.role === role
    );

    if (!matchedUser) {
      alert("Invalid credentials or role mismatch");
      return;
    }

    // Successful user login
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", matchedUser.role);
    if (matchedUser.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/home");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: real auth here
    if (role === "admin") navigate("/admin/dashboard");
    else navigate("/home");
  };

  return (
    <main className="relative min-h-screen text-white isolate overflow-hidden ">
      {/* animated gradient + orbs background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0d0c] via-[#1a1a1a] to-[#0c0d0c]" />
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              />
            </filter>
          </defs>
          <g filter="url(#goo)">
            <motion.circle
              cx="25%"
              cy="20%"
              r="120"
              fill="#e3d271"
              animate={{ cy: [20, 25, 20] }}
              transition={{ repeat: Infinity, duration: 10 }}
            />
            <motion.circle
              cx="75%"
              cy="80%"
              r="140"
              fill="#e3d271"
              animate={{ cy: [80, 75, 80] }}
              transition={{ repeat: Infinity, duration: 12 }}
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="100"
              fill="#e3d271"
              animate={{ cx: [50, 55, 50] }}
              transition={{ repeat: Infinity, duration: 8 }}
            />
          </g>
        </svg>
      </div>

      {/* hero words */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="pt-32 pb-20 px-4 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#e3d271]">
          AI Tools Suite
        </h1>
        <p className="text-lg md:text-xl text-[#ffffff]/70 max-w-xl mx-auto">
          The fastest way to build, deploy and scale artificial-intelligence
          products. Sign in or create an account to get started.
        </p>
      </motion.section>

      {/* glass card container */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-sm mx-auto pb-24"
      >
        <div
          className="relative w-full h-[480px] transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ---------- LOGIN SIDE ---------- */}
          <form
            onSubmit={handleLogin}
            className="absolute inset-0 w-full h-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <h2 className="text-2xl font-bold text-[#e3d271] mb-6 text-center">
              Sign In
            </h2>

            {/* role selector */}
            <div className="flex justify-center gap-4 mb-4">
              {["user", "admin"].map((r) => (
                <label key={r} className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value={r}
                    checked={role === r}
                    onChange={() => setRole(r)}
                    className="accent-[#e3d271]"
                  />
                  <span className="capitalize text-sm">{r}</span>
                </label>
              ))}
            </div>

            <input
              type="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              className="mb-4 p-3 bg-[#1a1a1a]/50 rounded-xl border border-transparent focus:border-[#e3d271] outline-none transition placeholder-[#808080]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              className="mb-6 p-3 bg-[#1a1a1a]/50 rounded-xl border border-transparent focus:border-[#e3d271] outline-none transition placeholder-[#808080]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#e3d271] text-black font-semibold py-3 rounded-xl hover:bg-[#e3d271]/80 transition"
            >
              Login
            </button>

            <p className="text-center text-sm mt-4 text-[#ffffff]/60">
              Don’t have an account?
              <button
                type="button"
                onClick={() => setIsFlipped(true)}
                className="ml-1 text-[#e3d271] underline"
              >
                Sign up
              </button>
            </p>
          </form>

          {/* ---------- SIGNUP SIDE ---------- */}
          <form
            onSubmit={handleSubmit}
            className="absolute inset-0 w-full h-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h2 className="text-2xl font-bold text-[#e3d271] mb-6 text-center">
              Create Account
            </h2>
            <input
              type="text"
              placeholder="Name"
              className="mb-3 p-3 bg-[#1a1a1a]/50 rounded-xl border border-transparent focus:border-[#e3d271] outline-none transition placeholder-[#808080]"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="mb-3 p-3 bg-[#1a1a1a]/50 rounded-xl border border-transparent focus:border-[#e3d271] outline-none transition placeholder-[#808080]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-3 p-3 bg-[#1a1a1a]/50 rounded-xl border border-transparent focus:border-[#e3d271] outline-none transition placeholder-[#808080]"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="mb-6 p-3 bg-[#1a1a1a]/50 rounded-xl border border-transparent focus:border-[#e3d271] outline-none transition placeholder-[#808080]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#e3d271] text-black font-semibold py-3 rounded-xl hover:bg-[#e3d271]/80 transition"
            >
              Sign Up
            </button>

            <p className="text-center text-sm mt-4 text-[#ffffff]/60">
              Already have an account?
              <button
                type="button"
                onClick={() => setIsFlipped(false)}
                className="ml-1 text-[#e3d271] underline"
              >
                Sign in
              </button>
            </p>
          </form>
        </div>
      </motion.section>
    </main>
  );
};

export default WelcomePage;