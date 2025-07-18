// app/[username]/page.tsx

'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import VantaBackground from '@/components/VantaBackground'
import VantaBackground2 from '@/components/VantaBackground2'
import Footer from '@/components/Footer'
import { MapPin } from "lucide-react";

export default function UserDashboard() {
    const { username } = useParams()
    const [tripHistory, setTripHistory] = useState([
        { destination: 'Goa', days: 3 },
        { destination: 'Manali', days: 5 },
        { destination: 'Kerala', days: 4 },
        { destination: 'Chennai', days: 2 }
    ]) // Replace with real fetch later

    const totalTrips = tripHistory.length
    const totalDays = tripHistory.reduce((sum, trip) => sum + trip.days, 0)

    return (
        <div className="bg-[#000000] z-0 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-[100vh] text-white font-sans">
            {/* Cover + Profile Image */}
            <div className="cover relative">
                <div className="w-full h-48 md:h-[350px] relative z-1"
                    data-aos="zoom-in"
                    data-aos-delay="150">
                    <img
                        className="object-cover w-full h-48 md:h-[350px]"
                        src="/trav.jpg"
                        alt="Cover"
                    />
                </div>

                <div className="absolute -bottom-20 right-[32%] z-10 md:right-[45%] border-white/50 border-4 overflow-hidden rounded-full shadow-lg"
                    data-aos="zoom-out"
                    data-aos-delay="200">
                    <img
                        className="overflow-hidden rounded-full opacity-70"
                        width={165}
                        height={165}
                        src="/images.jpeg"
                        alt="User"
                    />
                </div>
            </div>

            {/* Info Section */}
            <div className="info flex flex-col justify-center items-center mt-24 gap-2 text-center">
                <div className="text-white font-bold text-lg"
                    data-aos="fade-right"
                    data-aos-delay="300">
                    Welcome, @{username}
                </div>

                <div className="text-slate-400 font-medium"
                    data-aos="fade-left"
                    data-aos-delay="350">
                    Let’s explore the world, one trip at a time 🌍
                </div>

                <div className="text-slate-400"
                    data-aos="fade-right"
                    data-aos-delay="400">
                    {totalTrips} Trips Planned · {totalDays} Days Traveled
                </div>

                {/* Plan a New Trip */}
                <Link href="/itinerary"
                    data-aos="fade-down"
                    data-aos-delay="100">
                    <button className="bg-cyan-900 hover:bg-cyan-700 text-white py-2 px-4 rounded-full mt-4 shadow-md transition duration-300">
                        ✈️ Plan a New Trip
                    </button>
                </Link>
            </div>

            {/* Recent Trips */}
            <div className="mt-12 w-full max-w-xl mx-auto px-4">
                <h3 data-aos="fade-down"
                data-aos-delay="100" className="text-white font-semibold text-lg mb-3 border-b border-white/20 pb-2 text-center">
                    🗺️ Your Recent Trips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {tripHistory.map((trip, index) => (
                        <div
                            key={index}
                            data-aos="zoom-out"
                data-aos-delay="150"
                            className="bg-white/5 p-4 rounded-xl border border-white/5 shadow-sm hover:shadow-md transition duration-300"
                        >
                            <h3 className="text-white text-center text-lg font-semibold flex justify-center items-center gap-2">
                                <MapPin className="w-5 h-5 text-yellow-400" />
                                {trip.destination}
                            </h3>
                            <p className="text-slate-300 text-center text-sm">{trip.days} days</p>
                        </div>
                    ))}
                </div>

            </div>
            <Footer />
        </div>
    )
}
