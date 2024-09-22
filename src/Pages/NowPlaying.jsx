import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getTopMovies } from "../Api/movie";

const NowPlaying = () => {
  const { data = [] } = useQuery({
    queryKey: ["topMovies"],
    queryFn: getTopMovies,
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Now Playing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data?.slice(6, 10).map((movie) => (
            <Link
              key={movie._id}
              to={`/details/${movie._id}`}
              className="relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 bg-white"
            >
              <div className="flex items-center">
                <img
                  src={movie.image}
                  alt={movie.name}
                  className="w-1/3 h-40 object-cover transition-transform duration-300 transform hover:scale-110"
                />
                <div className="p-4 w-2/3">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {movie.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Dual Audio Hindi ORG 1080p, 720p, 480p BluRay x264 ESubs
                  </p>
                  <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full shadow-md hover:bg-red-700 transition duration-200">
                    Watch Now
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-300 hover:opacity-30"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
