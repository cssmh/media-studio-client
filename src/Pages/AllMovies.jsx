import { useQuery } from "@tanstack/react-query";
import { getTopMovies } from "../Api/movie";
import { Link } from "react-router-dom";

const AllMovies = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["allMovies"],
    queryFn: () => getTopMovies(),
  });

  if (isLoading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="py-3 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {data.map((movie) => (
            <Link
              key={movie._id}
              to={`/details/${movie._id}`}
              className="relative block overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <h3 className="text-md font-bold text-white">
                  {movie.name} Dual Audio Hindi ORG 1080p 720p 480p BluRay x264
                  ESubs
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
