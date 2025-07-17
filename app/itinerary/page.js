"use client";
import { useState } from "react";
import { FaMapMarkedAlt, FaBed, FaHotel, FaLandmark } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaSuitcaseRolling } from "react-icons/fa";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt, FaCalendarAlt, FaRegCommentDots, FaUtensils } from "react-icons/fa";
import MapLoader from "@/components/MapLoader";
import Restaurants from "@/components/Restaurants";
import Hotels from "@/components/Hotels";
import FamousPlaces from "@/components/FamousPlaces";



export default function ItineraryPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [tripDetails, setTripDetails] = useState({
        from: "",
        to: "",
        days: "",
        preferences: ""
    });
    const [activeTab, setActiveTab] = useState("map");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Do whatever processing you need with tripDetails here
        console.log("User submitted:", tripDetails);

        // ✅ Reset the form state
        setTripDetails({
            from: "",
            to: "",
            days: "",
            preferences: ""
        });
    };

    const tabs = [
        { id: "map", label: "Map", icon: <FaMapMarkedAlt className="text-xl" /> },
        { id: "stay", label: "Stay", icon: <FaBed className="text-xl" /> },
        { id: "hotels", label: "Hotels", icon: <FaHotel className="text-xl" /> },
        { id: "restaurants", label: "Restaurants", icon: <FaUtensils className="text-xl" /> },
        { id: "places", label: "Places", icon: <FaLandmark className="text-xl" /> },
    ];

    return (
        <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-screen">
            <div className="flex flex-col pt-13 md:flex-row min-h-screen bg-transparent text-white">

                {/* Left 1/3 Input Panel */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="0" className="md:w-1/3 w-full bg-[#0b1625] text-white p-9 border-r border-white/10 md:sticky top-16 h-[calc(100vh-4rem)]">
                    <div className="flex items-center gap-3 mb-4"
                        data-aos="zoom-out"
                        data-aos-delay="100" >
                        <FaSuitcaseRolling className="text-cyan-400 text-xl" />
                        <h2 className="text-2xl font-semibold text-cyan-300">Trip Details</h2>
                    </div>

                    <form
                        className="space-y-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setFormSubmitted(true);
                            setActiveTab("map");
                            setTripDetails({
                                from: "",
                                to: "",
                                days: "",
                                preferences: ""
                            });
                        }}
                    >
                        <div className="relative"
                            data-aos="fade-right"
                            data-aos-delay="150" >
                            <FaMapMarkerAlt className="absolute left-3 top-3.5 text-cyan-400" />
                            <input
                                type="text"
                                placeholder="From (Your City)"
                                value={tripDetails.from}
                                onChange={(e) => setTripDetails({ ...tripDetails, from: e.target.value })}
                                className="w-full pl-10 py-2 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div className="relative"
                            data-aos="fade-left"
                            data-aos-delay="200" >
                            <FaMapMarkedAlt className="absolute left-3 top-3.5 text-cyan-400" />
                            <input
                                type="text"
                                placeholder="To (Destination)"
                                value={tripDetails.to}
                                onChange={(e) => setTripDetails({ ...tripDetails, to: e.target.value })}
                                className="w-full pl-10 py-2 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div className="relative"
                            data-aos="fade-right"
                            data-aos-delay="250" >
                            <FaCalendarAlt className="absolute left-3 top-3.5 text-cyan-400" />
                            <input
                                type="number"
                                placeholder="Number of Days"
                                value={tripDetails.days}
                                onChange={(e) => setTripDetails({ ...tripDetails, days: e.target.value })}
                                className="w-full pl-10 py-2 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div className="relative"
                            data-aos="fade-left"
                            data-aos-delay="300" >
                            <FaRegCommentDots className="absolute left-3 top-3.5 text-cyan-400" />
                            <textarea
                                placeholder="Additional preferences"
                                value={tripDetails.preferences}
                                onChange={(e) => setTripDetails({ ...tripDetails, preferences: e.target.value })}
                                className="w-full pl-10 py-2 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            ></textarea>
                        </div>

                        <button
                            data-aos="fade-up"
                            data-aos-delay="300"
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
                        {tabs.map((tab, index) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.4, ease: "easeOut" }}
                                className={`relative flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200
      ${activeTab === tab.id
                                        ? "text-white border-b-2 backdrop-blur-xl bg-white/3 border-cyan-400 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-cyan-400 after:rounded-full scale-[1.05] shadow-cyan-400/20"
                                        : "text-white/60 hover:text-white"
                                    }
    `}
                            >
                                {tab.icon}
                                {tab.label}
                            </motion.button>
                        ))}

                    </div>

                    {/* Tab Content (Placeholder) */}
                    <div className="p-4 border border-white/10 rounded-lg bg-white/3" data-aos="fade-up"
                        data-aos-delay="200" >
                        {activeTab === "map" && (
                            <>
                                {formSubmitted ? (
                                    <MapLoader from={tripDetails.from} to={tripDetails.to} />
                                ) : (
                                    <p>🗺️ Your interactive trip map will appear here after submitting the form.</p>
                                )}
                            </>
                        )}
                        {activeTab === "stay" && <p>🛏️ Recommended stays and areas to stay near your destination.</p>}
                        {activeTab === "hotels" && (
                            formSubmitted ? (
                                <Hotels location={tripDetails.to} />
                            ) : (
                                <p>🏨 Enter trip details to see hotels near your destination.</p>
                            )
                        )}
                        {activeTab === "places" && (
                            formSubmitted ? (
                                <FamousPlaces location={tripDetails.to} />
                            ) : (
                                <p>🗺️ Enter trip details to see top sights near your destination.</p>
                            )
                        )}
                        {activeTab === "restaurants" && (
                            <>
                                {formSubmitted ? (
                                    <Restaurants location={tripDetails.to} />
                                ) : (
                                    <p>🍽️ Enter trip details to see restaurants near your destination.</p>
                                )}
                            </>
                        )}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
