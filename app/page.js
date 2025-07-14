// app/page.js or pages/index.js
import VantaBackground from "@/components/VantaBackground";

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
        <h1>Cloudy Welcome</h1>
      </div>
    </div>
  );
}
