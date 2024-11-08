import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getNowPlaying } from "../Api/movie";

const NowPlaying = () => {
  const { data = [] } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: getNowPlaying,
  });

  return (
    <div className="my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          Now Playing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.slice(0, 4).map((movie) => (
            <Link
              key={movie._id}
              to={`/details/${movie._id}`}
              className="relative block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105 "
            >
              <div className="relative h-60 overflow-hidden group">
                <img
                  src={movie.image}
                  alt={movie.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-100 opacity-80">
                  <h3 className="text-2xl font-bold text-white">
                    {movie.name}
                  </h3>
                  <p className="text-sm text-gray-200">{movie.genre}</p>
                </div>
              </div>
              <div className="p-4  transition-all duration-300 group-hover:bg-gray-100">
                <p className="text-sm mb-3">
                  Dual Audio Hindi ORG 1080p, 720p, 480p BluRay x264 ESubs
                </p>
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-gradient-to-r from-red-600 to-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-gradient-to-r hover:from-red-700 hover:to-pink-600 transition duration-300 transform hover:scale-105">
                    Watch Now
                  </span>
                  <span className="text-sm text-gray-500 italic">
                    Rating: {movie.rating}⭐
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
