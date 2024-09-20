import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getTopMovies } from "../Api/movie";

const TopMovies = () => {
  const { data = [] } = useQuery({
    queryKey: ["topMovies"],
    queryFn: () => getTopMovies(),
  });

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-center mb-8">
          Top Movies in Theatre
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {data?.slice(0, 12).map((movie) => (
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
                <h3 className="text-lg font-bold text-white">
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

export default TopMovies;
