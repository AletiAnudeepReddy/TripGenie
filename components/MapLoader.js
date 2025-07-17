"use client";
import Script from "next/script";

const MapLoader = () => {
  const apiKey = process.env.NEXT_PUBLIC_MAP_API;

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
        strategy="beforeInteractive"
      />
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
    </>
  );
};

export default MapLoader;
