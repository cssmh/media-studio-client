import { Link } from "react-router-dom";

const CineCard = ({ getMedia }) => {
  const { name, image_url } = getMedia;

  return (
    <Link
      to={`/${name}`}
      data-aos="zoom-in-up"
      className="relative p-4 flex flex-col bg-base-300 rounded-lg overflow-hidden group"
    >
      <img
        src={image_url}
        className="h-44 mx-auto rounded-lg transition-transform transform group-hover:scale-105"
        alt={name}
      />
      <h1 className="text-2xl my-2 font-semibold mx-4 mt-4">{name}</h1>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center p-4">
          <h2 className="text-xl font-bold mb-2">Explore {name}</h2>
          <p className="text-sm">
            Discover more about {name}. Click to see the latest movies and
            updates from this category!
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CineCard;
