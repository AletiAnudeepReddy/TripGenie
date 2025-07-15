"use client";
import { useState } from "react";
import { FaMapMarkedAlt, FaBed, FaHotel, FaLandmark } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaSuitcaseRolling } from "react-icons/fa";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt, FaCalendarAlt, FaRegCommentDots } from "react-icons/fa";


export default function ItineraryPage() {
    const [activeTab, setActiveTab] = useState("map");

    const tabs = [
        { id: "map", label: "Map", icon: <FaMapMarkedAlt className="text-xl" /> },
        { id: "stay", label: "Stay", icon: <FaBed className="text-xl" /> },
        { id: "hotels", label: "Hotels", icon: <FaHotel className="text-xl" /> },
        { id: "places", label: "Places", icon: <FaLandmark className="text-xl" /> },
    ];

    return (
        <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-screen">
            <div className="flex flex-col pt-13 md:flex-row min-h-screen bg-transparent text-white">

                {/* Left 1/3 Input Panel */}
                <div className="md:w-1/3 w-full bg-[#0b1625] text-white p-9 border-r border-white/10 md:sticky top-16 h-[calc(100vh-4rem)]">
                    <div className="flex items-center gap-3 mb-4">
                        <FaSuitcaseRolling className="text-cyan-400 text-xl" />
                        <h2 className="text-2xl font-semibold text-cyan-300">Trip Details</h2>
                    </div>

                    <form className="space-y-4">
                        <div className="relative">
                            <FaMapMarkerAlt className="absolute left-3 top-3.5 text-cyan-400" />
                            <input
                                type="text"
                                placeholder="From (Your City)"
                                className="w-full pl-10 py-2 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div className="relative">
                            <FaMapMarkedAlt className="absolute left-3 top-3.5 text-cyan-400" />
                            <input
                                type="text"
                                placeholder="To (Destination)"
                                className="w-full pl-10 py-2 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div className="relative">
                            <FaCalendarAlt className="absolute left-3 top-3.5 text-cyan-400" />
                            <input
                                type="number"
                                placeholder="Number of Days"
                                className="w-full pl-10 py-2 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div className="relative">
                            <FaRegCommentDots className="absolute left-3 top-3.5 text-cyan-400" />
                            <textarea
                                placeholder="Additional preferences"
                                className="w-full pl-10 py-2 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 transition rounded-md font-semibold"
                        >
                            ✨ Generate Itinerary
                        </button>
                    </form>

                </div>


                {/* Right 2/3 Result Panel */}
                <div className="md:w-2/3 w-full p-6">
                    {/* Tab Navigation */}
                    <div className="z-10 sticky top-20 flex items-center gap-6 mb-8 border-b border-white/10 pb-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200
    ${activeTab === tab.id
                                        ? " text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-cyan-400 after:rounded-full "
                                        : "text-white/60 hover:text-white"
                                    }
  `}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>

                        ))}
                    </div>

                    {/* Tab Content (Placeholder) */}
                    <div className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-md">
                        {activeTab === "map" && <p>🗺️ Your interactive trip map will appear here.</p>}
                        {activeTab === "stay" && <p>🛏️ Recommended stays and areas to stay near your destination.</p>}
                        {activeTab === "hotels" && <p>🏨 Curated hotel suggestions with ratings and location.</p>}
                        {activeTab === "places" && <p>📍 Top places to visit with reasons to explore them.</p>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
