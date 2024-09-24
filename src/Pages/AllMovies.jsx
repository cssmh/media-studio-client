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
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Now Playing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((movie) => (
          <div key={movie._id} className="bg-white p-4 rounded shadow-md">
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full h-64 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">{movie.name}</h3>
            <Link
              to={`/details/${movie._id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
