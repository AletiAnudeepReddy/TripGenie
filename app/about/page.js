// app/about/page.js (or pages/about.js)

import Footer from "@/components/Footer";
import Image from "next/image";
import { FaMapMarkedAlt, FaRobot, FaClock, FaMagic, FaMobileAlt } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-screen">
    <div className="text-white min-h-screen px-6 py-16 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
    >
      <div className="max-w-5xl mx-auto space-y-16 mt-15">

        {/* Header Section */}
        <section className="text-center">
          <h1 className="text-5xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]" data-aos="zoom-out"
                data-aos-delay="200">
            About <span className="text-cyan-400">TripGenie</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          data-aos="zoom-in"
                data-aos-delay="200">
            TripGenie is your AI-powered trip planning assistant. Just tell us your destination and days, and we’ll craft a magical experience — personalized, smart, and easy.
          </p>
        </section>

        {/* How It Works */}
        <section className="grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4"
            data-aos="fade-up"
                data-aos-delay="100">🪄 How it Works</h2>
            <ul className="space-y-4 text-white/90">
              <li data-aos="fade-right"
                data-aos-delay="200">✨ Enter a destination & number of days</li>
              <li data-aos="fade-right"
                data-aos-delay="250">🧠 Our AI plans the full itinerary: places, food, stay</li>
              <li data-aos="fade-right"
                data-aos-delay="300">📍 View maps, explore hotel suggestions, weather info</li>
              <li data-aos="fade-right"
                data-aos-delay="350">💾 Save and customize your trip in one click</li>
            </ul>
          </div>
          <Image
          data-aos="fade-left"
                data-aos-delay="250"
            src="/bg.webp" // replace with your own image
            alt="How TripGenie Works"
            width={400}
            height={200}
            className="rounded-xl shadow-lg"
          />
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10"
          data-aos="fade-up"
                data-aos-delay="150">✨ Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div
            data-aos="fade-right"
                data-aos-delay="200" className="p-6 bg-white/10 rounded-xl shadow-lg">
              <FaMapMarkedAlt className="mx-auto text-4xl text-cyan-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Itinerary</h3>
              <p>AI generates a full plan — no guesswork, just fun.</p>
            </div>
            <div
            data-aos="zoom-in"
                data-aos-delay="200" className="p-6 bg-white/10 rounded-xl shadow-lg">
              <FaRobot className="mx-auto text-4xl text-purple-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Powered</h3>
              <p>Powered by GPT to tailor recommendations to your mood.</p>
            </div>
            <div
            data-aos="fade-left"
                data-aos-delay="200" className="p-6 bg-white/10 rounded-xl shadow-lg">
              <FaClock className="mx-auto text-4xl text-yellow-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Time Optimized</h3>
              <p>Each day is perfectly balanced — sights, rest & food.</p>
            </div>
            <div
            data-aos="fade-right"
                data-aos-delay="200" className="p-6 bg-white/10 rounded-xl shadow-lg">
              <FaMagic className="mx-auto text-4xl text-pink-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Magical Experience</h3>
              <p>Genie-inspired UI makes travel feel dreamy & fun.</p>
            </div>
            <div
            data-aos="zoom-in"
                data-aos-delay="200" className="p-6 bg-white/10 rounded-xl shadow-lg">
              <FaMobileAlt className="mx-auto text-4xl text-green-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p>Looks perfect on mobile, tablet, or desktop.</p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-6"
          data-aos="zoom-out"
                data-aos-delay="200">🛠 Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-lg">
            <span className="bg-white/10 px-4 py-2 rounded-md"
            data-aos="fade-up"
                data-aos-delay="200">Next.js</span>
            <span className="bg-white/10 px-4 py-2 rounded-md"
            data-aos="fade-up"
                data-aos-delay="250">MongoDB + Mongoose</span>
            <span className="bg-white/10 px-4 py-2 rounded-md"
            data-aos="fade-up"
                data-aos-delay="300">Tailwind CSS</span>
            <span className="bg-white/10 px-4 py-2 rounded-md"
            data-aos="fade-up"
                data-aos-delay="350">React Icons</span>
            <span className="bg-white/10 px-4 py-2 rounded-md"
            data-aos="fade-up"
                data-aos-delay="400">OpenAI GPT</span>
            <span className="bg-white/10 px-4 py-2 rounded-md"
            data-aos="fade-up"
                data-aos-delay="450">Cloud/Vanta Backgrounds</span>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center mt-16"
      >
          <h2 data-aos="fade-right"
                data-aos-delay="200" className="text-3xl font-semibold mb-4"
          >Start your magical journey today</h2>
          <p className="mb-6 text-white/80"
          data-aos="fade-left"
                data-aos-delay="200">It only takes one wish to explore the world. ✨</p>
          <a
            href="/auth"
            className="inline-block px-8 py-3 rounded-xl text-lg font-semibold text-white bg-cyan-500 hover:bg-cyan-600 transition"
            data-aos="fade-up"
                data-aos-delay="250"
          >
            🚀 Try TripGenie Now
          </a>
        </section>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
