// app/[username]/page.tsx

'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import VantaBackground from '@/components/VantaBackground'
import VantaBackground2 from '@/components/VantaBackground2'
import Footer from '@/components/Footer'

export default function UserDashboard() {
    const { username } = useParams()
    const [tripHistory, setTripHistory] = useState([
        { destination: 'Goa', days: 3 },
        { destination: 'Manali', days: 5 },
    ]) // Replace with real fetch later

    const totalTrips = tripHistory.length
    const totalDays = tripHistory.reduce((sum, trip) => sum + trip.days, 0)

    return (
        <div className="bg-[#000000] z-0 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-[100vh] text-white font-sans">
            {/* Cover + Profile Image */}
            <div className="cover relative">
                <div className="w-full h-48 md:h-[350px] relative z-1">
                    <img
                        className="object-cover w-full h-48 md:h-[350px]"
                        src="/trav.jpg"
                        alt="Cover"
                    />
                </div>

                <div className="absolute -bottom-20 right-[32%] z-10 md:right-[45%] border-white border-4 overflow-hidden rounded-full shadow-lg">
                    <img
                        className="overflow-hidden rounded-full"
                        width={165}
                        height={165}
                        src="/images.jpeg"
                        alt="User"
                    />
                </div>
            </div>

            {/* Info Section */}
            <div className="info flex flex-col justify-center items-center mt-24 gap-2 text-center">
                <div className="text-white font-bold text-lg">
                    Welcome, @{username}
                </div>

                <div className="text-slate-400 font-medium">
                    Let’s explore the world, one trip at a time 🌍
                </div>

                <div className="text-slate-400">
                    {totalTrips} Trips Planned · {totalDays} Days Traveled
                </div>

                {/* Plan a New Trip */}
                <Link href="/generate">
                    <button className="bg-cyan-900 hover:bg-cyan-700 text-white py-2 px-4 rounded-full mt-4 shadow-md transition duration-300">
                        ✈️ Plan a New Trip
                    </button>
                </Link>
            </div>

            {/* Recent Trips */}
            <div className="mt-12 w-full max-w-xl mx-auto px-4">
                <h3 className="text-white font-semibold text-lg mb-3 border-b pb-2">
                    🗺️ Your Recent Trips
                </h3>
                <ul className="text-slate-300 list-disc list-inside space-y-1">
                    {tripHistory.map((trip, index) => (
                        <li key={index}>
                            <span className="font-semibold text-white">{trip.destination}</span> — {trip.days} days
                        </li>
                    ))}
                </ul>
            </div>
            <Footer/>
        </div>
    )
}
