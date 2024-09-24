import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getNowPlaying } from "../Api/movie";

const ShowTime = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: getNowPlaying,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Loading Showtimes...</h2>
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Error fetching showtimes</h2>
        <p className="text-gray-600">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-8">
        Available Showtimes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slice(0, 6).map((showtime) => (
          <div
            key={showtime.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{showtime.movie}</h3>
            <p className="text-gray-700 mb-1">Time: {showtime.time}</p>
            <p className="text-gray-700 mb-4">Price: ${showtime.price}</p>
            <button className="w-full bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTime;
