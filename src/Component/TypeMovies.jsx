import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const TypeMovies = () => {
  const { user } = useAuth();
  const admin = user?.email === import.meta.env.VITE_admin;
  const { result, getType } = useLoaderData();
  const [filter, setFilter] = useState(result);
  const navigateTo = useNavigate();

  const handleBack = () => {
    navigateTo(-1);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (!searchTerm) {
      setFilter(result);
    } else {
      const filteredMovies = result.filter((movie) =>
        movie.name.toLowerCase().includes(searchTerm)
      );
      setFilter(filteredMovies);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-center font-semibold mt-4 capitalize">
        {`${getType || "Movie"} Categories`}
      </h1>
      {filter.length === 0 ? (
        <p className="h-[50vh] flex justify-center items-center text-center my-12 text-red-500">
          No data available
        </p>
      ) : (
        <div>
          <div className="text-center my-3">
            <input
              type="text"
              name="search"
              placeholder="Search Here"
              className="input input-bordered w-80 rounded-xl border-purple-500"
              style={{ outline: "none" }}
              onChange={handleSearch}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto my-8">
            {filter.map((movie) => (
              <div key={movie._id} className="card bg-base-100 shadow-xl">
                <figure data-aos="zoom-in">
                  <img src={movie.image} alt="cine" className="w-52 pt-5" />
                </figure>
                <div className="card-body px-11 py-5 font-semibold">
                  <h2 className="card-title text-2xl">{movie.name}</h2>
                  <p>
                    <span className="text-green-500">{movie.media}</span>{" "}
                    <span className="text-red-500">{movie.media_type}</span>{" "}
                  </p>
                  <p>
                    Price: <span className="text-blue-500">{movie.price}</span>{" "}
                    BDT
                  </p>
                  <p>
                    Rating:{" "}
                    <span className="text-yellow-700">{movie.rating}</span>
                  </p>
                  <p>{movie.description}</p>
                  <div className="card-actions justify-center">
                    <Link to={`/details/${movie._id}`}>
                      <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Details
                      </button>
                    </Link>
                    {admin && (
                      <Link to={`/update/${movie._id}`}>
                        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                          Update
                        </button>
                      </Link>
                    )}
                    <button
                      onClick={handleBack}
                      className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TypeMovies;
