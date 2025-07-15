// app/page.js or pages/index.js
import VantaBackground from "@/components/VantaBackground";
import Link from "next/link";
import FaGithub from "react-icons"

export default function Home() {
  return (
    <div>
      <VantaBackground />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          top: "50vh",
          transform: "translateY(-50%)",
          color: "#fff",
        }}
      >
      </div>
    </div>
  );
}
