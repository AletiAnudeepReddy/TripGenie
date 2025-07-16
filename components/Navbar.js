'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Home, Mail, Github, LogIn, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [userEmail, setUserEmail] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
      setUsername(email.split('@')[0]);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUserEmail('');
    setUsername('');
    window.location.href = '/auth'; // or use router.push('/auth') if you’re using useRouter()
  };

  return (
    <nav className="w-full px-8 py-4 fixed top-0 h-16 left-0 z-50 flex justify-between items-center bg-white/8 backdrop-blur-md rounded-b-xl shadow-md"
      data-aos="fade-down">
      
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            data-aos="zoom-in" data-aos-delay="300">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
          </svg>
          <h1 className="text-white text-xl font-bold tracking-wide" data-aos="zoom-out" data-aos-delay="300">TripGenie</h1>
        </div>
      </Link>

      {/* Navigation Items */}
      <div className="hidden md:flex gap-6 text-white items-center">
        <Link href="/" title="Home" data-aos="fade-left" data-aos-delay="300">
          <Home className="drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] w-5 h-5 hover:text-cyan-400 hover:scale-110 transition-transform duration-200" />
        </Link>
        <Link href="/contact" title="Contact Us" data-aos="fade-left" data-aos-delay="400">
          <Mail className="drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] w-5 h-5 hover:text-cyan-400 hover:scale-110 transition-transform duration-200" />
        </Link>
        <a href="https://github.com/AletiAnudeepReddy" target="_blank" rel="noopener noreferrer" title="GitHub" data-aos="fade-left" data-aos-delay="500">
          <Github className="drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] w-5 h-5 hover:text-cyan-400 hover:scale-110 transition-transform duration-200" />
        </a>

        {!userEmail ? (
          <Link href="/auth" title="Login" data-aos="fade-left" data-aos-delay="600">
            <LogIn className="drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] w-5 h-5 hover:text-cyan-400 hover:scale-110 transition-transform duration-200" />
          </Link>
        ) : (
          <>
            <Link href={`/${username}`} title="Profile" data-aos="fade-left" data-aos-delay="600">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-indigo-600 px-3 py-1 rounded-full text-white font-semibold hover:scale-105 transition">
                <User className="w-4 h-4" />
                {username}
              </div>
            </Link>
            <button
              onClick={handleLogout}
              title="Logout"
              className=" p-1 rounded-full"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              <LogOut className="text-red-500 w-5 h-5 hover:scale-110 transition-transform" />
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
