import { Link } from "react-router-dom";

const categories = [
  "Disney",
  "Netflix",
  "Sony Pictures",
  "Spotify",
  "Time Warner",
  "Warner Bros",
];

const getCategoryColor = (name) => {
  switch (name) {
    case "Disney":
      return "bg-gradient-to-r from-blue-400 to-blue-600";
    case "Netflix":
      return "bg-gradient-to-r from-red-600 to-red-800";
    case "Sony Pictures":
      return "bg-gradient-to-r from-purple-500 to-purple-700";
    case "Spotify":
      return "bg-gradient-to-r from-green-400 to-green-600";
    case "Time Warner":
      return "bg-gradient-to-r from-orange-500 to-orange-700";
    case "Warner Bros":
      return "bg-gradient-to-r from-yellow-500 to-yellow-700";
    default:
      return "bg-gradient-to-r from-gray-400 to-gray-600";
  }
};

const AllCategory = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-8 text-gradient">
        Select Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={category}
            className="relative group overflow-hidden rounded-lg bg-white shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 100}
          >
            <Link
              to={`category/${category.toLowerCase().replace(/ /g, "-")}`}
              className={`flex flex-col items-center justify-center h-full p-8 text-center ${getCategoryColor(
                category
              )} hover:scale-105 transition-all duration-300 rounded-lg`}
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <h1 className="text-5xl font-bold text-white mb-4">{category}</h1>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center p-4">
                  <h2 className="text-xl font-bold text-white mb-2">
                    Explore {category}
                  </h2>
                  <p className="text-sm text-gray-200">
                    Discover more about {category}. Click to see the latest
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
