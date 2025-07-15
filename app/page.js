// app/page.js or pages/index.js
import VantaBackground from "@/components/VantaBackground";
import Link from "next/link";
import FaGithub from "react-icons"
import { Github } from "lucide-react";

export default function Home() {
  return (
    <div>
      <VantaBackground />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          top: "28vh",
          transform: "translateY(-50%)",
          color: "#fff",
        }}
      >
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="row1 h-8">
            <div className="row1 h-8">
              <div className="relative p-0 inline-block group">


                <Link href={"/about"}>
                  <div data-aos="zoom-in"
                    data-aos-delay="300" className="relative border hover:border-2 inline-flex cursor-pointer justify-center rounded-full text-white px-5 py-[6px] text-md font-medium
               backdrop-blur-xl transition duration-300 bg-white/10 shadow-2xl">
                    Discover TripGenie⚡️
                    <span className="inline-flex items-center pl-2 text-md text-gray-800"
                      data-aos="fade-left"
                      data-aos-delay="300">
                      Read more
                      <svg
                        className="ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-[10vw] row2 p-10"
              >
                <h2
                  className="drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] text-center text-5xl font-medium text-white sm:text-7xl"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Your next adventure is just{' '}
                  <span
                    className="inline-flex items-center animate-text-gradient bg-[200%_auto] bg-clip-text leading-tight text-transparent bg-gradient-to-r from-white via-cyan-200 to-white"
                  >
                    one wish away
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-14 h-14 ml-2 mt-2 text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] transition-transform duration-300 hover:scale-110"

                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                      />
                    </svg>
                  </span>
                </h2>

                <p className="mx-[10vw] mt-6 text-center text-xl leading-6 text-gray-800 "
                  data-aos="fade-left"
                  data-aos-delay="500">
                  TripGenie transforms your dream destinations into smart, AI-planned itineraries. Just tell us where, and your genie does the rest — hotels, food, sights, magic.

                </p>
              </div>
              <div className="row-3 m-4">
                <div
                  className="flex flex-wrap justify-center gap-4 items-center"
                  data-aos="fade-up"
                data-aos-delay="600">
                  <Link href="/auth">
                    <button className="flex items-center gap-2 border border-white bg-white/10 hover:bg-white/20 text-white rounded-xl px-5 py-2 text-lg font-semibold shadow-md transition duration-200">
                      <span><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10l18-6-6 18-2-8-8-4z" />
                      </svg></span> Try Now
                    </button>
                  </Link>

                  <Link href="https://github.com/AletiAnudeepReddy/TripGenie" target="_blank">
                    <button className="flex items-center gap-2 bg-white/10 border border-white hover:bg-white/20 text-white rounded-xl px-5 py-2 text-lg font-semibold shadow-md transition duration-200">
                      <span><Github className="drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] w-5 h-5 transition-transform duration-200" /></span>GitHub
                    </button>
                  </Link>

                </div></div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
