import React from "react";
const topRatedItems = [
  {
    id: 1,
    title: "Inception",
    rating: 9.0,
    image:
      "https://m.media-amazon.com/images/I/919mVr6ikcL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    rating: 9.0,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    rating: 8.6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmS2fXunDUEBghw03CwGihiiA4FZlQMgy7Q&s",
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    rating: 9.3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedrmI4UWd0pcjDF13LrFcXUHLq3FlhNTOTg&s",
  },
];

const TopRated = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Top Rated Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topRatedItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-yellow-400 font-bold">Rating: {item.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
