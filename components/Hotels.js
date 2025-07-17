"use client";
import { useEffect, useState } from "react";

const Hotels = ({ location }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    if (!window.google || !location) return;

    const map = new google.maps.Map(document.createElement("div"));
    const service = new google.maps.places.PlacesService(map);

    const request = {
      query: `hotels in ${location}`,
      fields: ["name", "formatted_address", "rating", "photos"],
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setHotels(results.slice(0, 6));
      }
    });
  }, [location]);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {hotels.map((hotel, index) => (
        <div
          key={index}
          className="bg-white/10 border border-white/20 p-4 rounded-lg text-white shadow-md backdrop-blur-md"
        >
          {hotel.photos?.[0] ? (
            <img
              src={hotel.photos[0].getUrl()}
              alt={hotel.name}
              className="w-full h-40 object-cover rounded"
            />
          ) : (
            <div className="h-40 bg-white/10 rounded flex items-center justify-center text-white/50">
              No Image
            </div>
          )}
          <h3 className="mt-2 text-lg font-semibold">{hotel.name}</h3>
          <p className="text-sm">{hotel.formatted_address}</p>
          <p className="text-sm text-yellow-300">⭐ {hotel.rating}</p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              hotel.formatted_address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline mt-2 inline-block text-sm"
          >
            Get Directions →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
