"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function TripGenieAuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate validation
    if (!email || !password || (!isLogin && (!fullname || !confirmPassword))) {
      setMessage("Please fill in all required fields.");
      return;
    }
    if (!isLogin && password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    setMessage("✅ Form submitted successfully.");
  };

  return (
    <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-screen">
    <div className="flex items-center justify-center px-4 pt-40 pb-25">
      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? "login" : "signup"}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl overflow-hidden"
        >
          <div className="text-center py-6 bg-white/8 bg-opacity-90 text-white rounded-t-2xl">
            <h2 className="text-2xl drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] font-bold tracking-wide">
              {isLogin
                ? "Welcome back to TripGenie ✨"
                : "Create your TripGenie account"}
            </h2>
            <p className="text-sm text-white/80 mt-1">
              {isLogin
                ? "Plan your next trip in one wish"
                : "Let AI plan your travel journey"}
            </p>
          </div>

          <div className="px-6 py-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="relative">
                  <FaUser className="absolute left-3 top-3.5 text-cyan-300" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              )}

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3.5 text-cyan-300" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-3 top-3.5 text-cyan-300" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {!isLogin && (
                <div className="relative">
                  <FaLock className="absolute left-3 top-3.5 text-cyan-300" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg font-semibold transition duration-200"
              >
                {isLogin ? "Login" : "Create My Trip Plan"}
              </button>
            </form>

            {message && (
              <p className="mt-4 text-center text-sm text-red-400">{message}</p>
            )}

            <p className="mt-6 text-center text-sm text-white/70">
              {isLogin ? (
                <>
                  Don’t have an account?{" "}
                  <span
                    onClick={() => {
                      setIsLogin(false);
                      setMessage("");
                    }}
                    className="text-cyan-300 font-semibold cursor-pointer hover:underline"
                  >
                    Sign up here
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    onClick={() => {
                      setIsLogin(true);
                      setMessage("");
                    }}
                    className="text-cyan-300 font-semibold cursor-pointer hover:underline"
                  >
                    Log in here
                  </span>
                </>
              )}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
    <Footer/>
    </div>
  );
}
