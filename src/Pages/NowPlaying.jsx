import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getTopMovies } from "../Api/movie";

const NowPlaying = () => {
  const { data = [] } = useQuery({
    queryKey: ["topMovies"],
    queryFn: getTopMovies,
  });

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-5 text-gray-800">
          Now Playing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.slice(6, 10).map((movie) => (
            <Link
              key={movie._id}
              to={`/details/${movie._id}`}
              className="relative block rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 bg-white"
            >
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {movie.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  Dual Audio Hindi ORG 1080p, 720p, 480p BluRay x264 ESubs
                </p>
                <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-700 transition duration-200">
                  Watch Now
                </span>
              </div>
              <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-300 hover:opacity-40"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
