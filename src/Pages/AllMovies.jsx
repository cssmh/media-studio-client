import { useQuery } from "@tanstack/react-query";
import { getTopMovies } from "../Api/movie";
import { Link } from "react-router-dom";
import Loader from "../Component/Loader";

const AllMovies = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["allMovies"],
    queryFn: () => getTopMovies(),
  });

  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Now Playing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {data.map((movie) => (
          <div
            key={movie._id}
            className="relative bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full h-[350px] object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 flex flex-col justify-end p-4 transition-opacity duration-300">
              <h3 className="text-lg font-bold text-white">{movie.name}</h3>
              <p className="text-sm text-gray-300 capitalize">
                {movie.media} Movie
              </p>
              <p className="text-sm text-gray-300">{movie.releaseDate}</p>
              <div className="mt-4 flex items-center justify-between">
                <Link
                  to={`/details/${movie._id}`}
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  View Details
                </Link>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {movie.rating}
                </span>
              </div>
            </div>
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Now Showing
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
