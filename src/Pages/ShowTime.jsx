import React from "react";

const ShowTime = () => {
  const showTimes = [
    {
      id: 1,
      title: "Morning Show",
      time: "10:00 AM",
      price: 9.99,
      image:
        "https://raw.githubusercontent.com/cssmh/star-cinemix-client/refs/heads/main/src/assets/banner_1.jpg",
    },
    {
      id: 2,
      title: "Evening Show",
      time: "7:00 PM",
      price: 12.99,
      image:
        "https://raw.githubusercontent.com/cssmh/star-cinemix-client/refs/heads/main/src/assets/banner_2.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-5">
      <h2 className="text-2xl font-bold text-center mb-8">Cinemix Showtimes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {showTimes.map((showtime) => (
          <div
            key={showtime.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 transform hover:scale-105"
          >
            <img
              src={showtime.image}
              alt={showtime.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{showtime.title}</h3>
              <p className="text-gray-600 mb-1">Time: {showtime.time}</p>
              <p className="text-gray-600 mb-4">
                Price: ${showtime.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTime;
