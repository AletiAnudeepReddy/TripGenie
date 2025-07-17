"use client";
import { useEffect, useState } from "react";

const FamousPlaces = ({ location }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (!window.google || !location) return;

    const map = new google.maps.Map(document.createElement("div"));
    const service = new google.maps.places.PlacesService(map);

    const request = {
      query: `tourist attractions in ${location}`,
      fields: ["name", "formatted_address", "rating", "photos"],
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results.slice(0, 6));
      }
    });
  }, [location]);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {places.map((place, index) => (
        <div
          key={index}
          className="bg-white/10 border border-white/20 p-4 rounded-lg text-white shadow-md backdrop-blur-md"
        >
          {place.photos?.[0] ? (
            <img
              src={place.photos[0].getUrl()}
              alt={place.name}
              className="w-full h-40 object-cover rounded"
            />
          ) : (
            <div className="h-40 bg-white/10 rounded flex items-center justify-center text-white/50">
              No Image
            </div>
          )}
          <h3 className="mt-2 text-lg font-semibold">{place.name}</h3>
          <p className="text-sm">{place.formatted_address}</p>
          <p className="text-sm text-yellow-300">⭐ {place.rating}</p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              place.formatted_address
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

export default FamousPlaces;
