"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VantaBackground from "@/components/VantaBackground";
import Navbar from "@/components/Navbar";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { usePathname } from 'next/navigation'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const pathname = usePathname()
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar key={pathname}/>
        {children}
      </body>
    </html>
  );
}
