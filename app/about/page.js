// app/about/page.js (or pages/about.js)

import Image from "next/image";
import { FaMapMarkedAlt, FaRobot, FaClock, FaMagic, FaMobileAlt } from "react-icons/fa";

export default function About() {
  return (
    
    <div className="text-white min-h-screen px-6 py-16 bg-black bg-opacity-90">
      <div className="max-w-5xl mx-auto space-y-16 mt-15">

        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-5xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
            About <span className="text-cyan-400">TripGenie</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            TripGenie is your AI-powered trip planning assistant. Just tell us your destination and days, and we’ll craft a magical experience — personalized, smart, and easy.
          </p>
        </section>

        {/* How It Works */}
        <section className="grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">🪄 How it Works</h2>
            <ul className="space-y-4 text-white/90">
              <li>✨ Enter a destination & number of days</li>
              <li>🧠 Our AI plans the full itinerary: places, food, stay</li>
              <li>📍 View maps, explore hotel suggestions, weather info</li>
              <li>💾 Save and customize your trip in one click</li>
            </ul>
          </div>
          <Image
            src="/bg.webp" // replace with your own image
            alt="How TripGenie Works"
            width={400}
            height={200}
            className="rounded-xl shadow-lg"
          />
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">✨ Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white/10 rounded-xl shadow-lg">
              <FaMapMarkedAlt className="mx-auto text-4xl text-cyan-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Itinerary</h3>
              <p>AI generates a full plan — no guesswork, just fun.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl shadow-lg">
              <FaRobot className="mx-auto text-4xl text-purple-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Powered</h3>
              <p>Powered by GPT to tailor recommendations to your mood.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl shadow-lg">
              <FaClock className="mx-auto text-4xl text-yellow-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Time Optimized</h3>
              <p>Each day is perfectly balanced — sights, rest & food.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl shadow-lg">
              <FaMagic className="mx-auto text-4xl text-pink-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Magical Experience</h3>
              <p>Genie-inspired UI makes travel feel dreamy & fun.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl shadow-lg">
              <FaMobileAlt className="mx-auto text-4xl text-green-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p>Looks perfect on mobile, tablet, or desktop.</p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-6">🛠 Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-lg">
            <span className="bg-white/10 px-4 py-2 rounded-md">Next.js</span>
            <span className="bg-white/10 px-4 py-2 rounded-md">MongoDB + Mongoose</span>
            <span className="bg-white/10 px-4 py-2 rounded-md">Tailwind CSS</span>
            <span className="bg-white/10 px-4 py-2 rounded-md">React Icons</span>
            <span className="bg-white/10 px-4 py-2 rounded-md">OpenAI GPT</span>
            <span className="bg-white/10 px-4 py-2 rounded-md">Cloud/Vanta Backgrounds</span>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-semibold mb-4">Start your magical journey today</h2>
          <p className="mb-6 text-white/80">It only takes one wish to explore the world. ✨</p>
          <a
            href="/auth"
            className="inline-block px-8 py-3 rounded-xl text-lg font-semibold text-white bg-cyan-500 hover:bg-cyan-600 transition"
          >
            🚀 Try TripGenie Now
          </a>
        </section>
      </div>
    </div>
  );
}
