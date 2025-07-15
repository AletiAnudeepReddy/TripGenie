import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-md text-white  mt-10 bottom-0">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Brand and Year */}
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} <span className="font-semibold text-cyan-400">TripGenie</span>. All rights reserved.
        </p>

        {/* Right: Links / GitHub */}
        <div className="flex items-center gap-5 text-white/80 text-sm">
          <Link href="/" className="hover:text-cyan-300 transition">Home</Link>
          <Link href="/contact" className="hover:text-cyan-300 transition">Contact</Link>
          <Link href="https://github.com/AletiAnudeepReddy/TripGenie" target="_blank" className="hover:text-cyan-300 transition flex items-center gap-1">
            <FaGithub /> GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
