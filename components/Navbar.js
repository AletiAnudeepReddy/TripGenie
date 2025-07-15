// components/Navbar.jsx
import Link from "next/link";
import { Home, Mail, Github, LogIn } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="w-full px-8 py-4 fixed top-0 h-16 left-0 z-50 flex justify-between items-center bg-white/10 backdrop-blur-md rounded-b-xl shadow-md">
            {/* Logo */}
            
            <Link href={"/"}>
            <div className="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>



                <h1 className="text-white text-xl font-bold tracking-wide ">
                    TripGenie
                </h1>
                </div>
                </Link>
            

            <div className="hidden md:flex gap-6 text-white">
                <Link href="/" title="Home">
                    <Home className="drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] w-5 h-5 hover:text-cyan-400 hover:scale-110 transition-transform duration-200" />
                </Link>
                <Link href="/contact" title="Contact Us">
                    <Mail className="drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] w-5 h-5 hover:text-cyan-400 hover:scale-110 transition-transform duration-200" />
                </Link>
                <a
                    href="https://github.com/AletiAnudeepReddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                >
                    <Github className="drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] w-5 h-5 hover:text-cyan-400 hover:scale-110 transition-transform duration-200" />
                </a>
                <Link href="/auth" title="Login">
                    <LogIn className="drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] w-5 h-5 hover:text-cyan-400 hover:scale-110 transition-transform duration-200" />
                </Link>
            </div>


        </nav>
    );
};

export default Navbar;
