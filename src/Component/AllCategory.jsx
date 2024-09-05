import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getAllCategory } from "../Api/movie";

const AllCategory = () => {
  const { data = [] } = useQuery({
    queryKey: ["category"],
    queryFn: () => getAllCategory(),
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8">Select Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((category) => (
          <div key={category._id}>
            <Link
              to={`category/${category.name.toLowerCase()}`}
              data-aos="zoom-in-up"
              className="relative p-4 flex flex-col bg-base-300 rounded-lg overflow-hidden group"
            >
              <img
                src={category.image_url}
                className="h-44 mx-auto rounded-lg transition-transform transform group-hover:scale-105"
                alt={category.name}
              />
              <h1 className="text-2xl my-2 font-semibold mx-4 mt-4">
                {category.name}
              </h1>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center p-4">
                  <h2 className="text-xl font-bold mb-2">
                    Explore {category.name}
                  </h2>
                  <p className="text-sm">
                    Discover more about {category.name}. Click to see the latest
                    movies and updates from this category!
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
