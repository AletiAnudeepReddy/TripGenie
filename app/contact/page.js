"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-screen">
    <div className=" px-6 py-10 pt-40  text-white flex flex-col lg:flex-row items-center justify-center gap-16">
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg space-y-8"
      >
        <h2 
        data-aos="fade-down"
                data-aos-delay="100" className="text-5xl font-bold text-white drop-shadow-lg">
          Get in <span className="text-cyan-400">Touch</span>
        </h2>
        <p data-aos="fade-up"
                data-aos-delay="100" className="text-white/80 text-lg">
          Have questions, feedback, or partnership ideas? Our genie is listening. Drop us a line, and we’ll respond like magic ✨
        </p>

        <div className="space-y-4 text-white/90 text-sm">
          <div data-aos="fade-right"
                data-aos-delay="200" className="flex items-center gap-3">
            <FaPhoneAlt className="text-cyan-300" />
            <span>+91 90143 84195</span>
          </div>
          <div data-aos="fade-right"
                data-aos-delay="250" className="flex items-center gap-3">
            <FaEnvelope className="text-cyan-300" />
            <span>support@tripgenie.ai</span>
          </div>
          <div data-aos="fade-right"
                data-aos-delay="300" className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-cyan-300" />
            <span>Hyderabad, Telangana, India</span>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl"
      >
        <h3 data-aos="fade-up"
                data-aos-delay="100" className="text-2xl font-semibold mb-6 text-cyan-300">Send us a message</h3>
        <form className="space-y-5">
          <div>
            <label data-aos="fade-right"
                data-aos-delay="150" className="block text-sm text-white/70 mb-1">Full Name</label>
            <input data-aos="fade-left"
                data-aos-delay="150"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label data-aos="fade-right"
                data-aos-delay="200" className="block text-sm text-white/70 mb-1">Email</label>
            <input data-aos="fade-left"
                data-aos-delay="200"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label data-aos="fade-right"
                data-aos-delay="250" className="block text-sm text-white/70 mb-1">Message</label>
            <textarea data-aos="fade-left"
                data-aos-delay="250"
              rows="4"
              placeholder="Type your message..."
              className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <button data-aos="zoom-out"
                data-aos-delay="300"
            type="submit"
            className="w-full py-2 px-6 bg-cyan-500 hover:bg-cyan-600 transition text-white rounded-md font-semibold"
          >
            ✉️ Send Message
          </button>
        </form>
      </motion.div>
    </div>
    <Footer/>
    </div>
  );
}
