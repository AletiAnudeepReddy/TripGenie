"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

const MapLoader = ({ from, to }) => {
  const mapRef = useRef(null);

  // Function to initialize the map
  const initializeMap = () => {
    if (!window.google || !mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 20.5937, lng: 78.9629 }, // Default center (India)
      zoom: 5,
    });

    if (from && to) {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      directionsService.route(
        {
          origin: from,
          destination: to,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === "OK") {
            directionsRenderer.setDirections(result);
          } else {
            console.error("Directions request failed:", status);
          }
        }
      );
    }
  };

  useEffect(() => {
    if (window.google) {
      initializeMap();
    }
  }, [from, to]);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAP_API}&libraries=places`}
        strategy="afterInteractive"
        onLoad={initializeMap}
      />
      <div
        ref={mapRef}
        id="map"
        style={{ height: "400px", width: "100%", borderRadius: "12px" }}
      ></div>
    </>
  );
};

export default MapLoader;
