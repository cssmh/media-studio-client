import { useQuery } from "@tanstack/react-query";
import { getFeaturedMovies } from "../Api/movie";
import { Link } from "react-router-dom";

const FeaturedMovies = () => {
  const { data = [] } = useQuery({
    queryKey: ["featuredMovies"],
    queryFn: () => getFeaturedMovies(),
  });

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-white mb-8">
          Featured Movies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.slice(0, 12).map((movie) => (
            <Link
              key={movie._id}
              to={`/details/${movie._id}`}
              className="block"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-800 text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl max-w-xs mx-auto">
                <img
                  src={movie.image}
                  alt={movie.name}
                  className="w-full h-44 object-cover transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 truncate">
                      {movie.name}
                    </h3>
                    <p className="text-sm mb-2 line-clamp-2">
                      {movie.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="block text-lg font-semibold">
                      Price: ${movie.price}
                    </span>
                    <span className="block text-lg font-semibold">
                      Rating: {movie.rating} ★
                    </span>
                    <span className="block text-sm text-gray-300">
                      Media: {movie.media}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovies;
