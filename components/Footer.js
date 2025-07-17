"use client"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // ✅ correct import

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full bg-white/10 backdrop-blur-md text-white mt-10 bottom-0"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Brand and Year */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm text-white/70"
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-cyan-400">TripGenie</span>. All rights reserved.
        </motion.p>

        {/* Right: Links / GitHub */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-5 text-white/80 text-sm"
        >
          <Link href="/" className="hover:text-cyan-300 transition">Home</Link>
          <Link href="/contact" className="hover:text-cyan-300 transition">Contact</Link>
          <Link
            href="https://github.com/AletiAnudeepReddy/TripGenie"
            target="_blank"
            className="hover:text-cyan-300 transition flex items-center gap-1"
          >
            <FaGithub /> GitHub
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
}
