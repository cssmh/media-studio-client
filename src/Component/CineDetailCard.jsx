import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
const CineDetailCard = ({ getCard }) => {
  //   console.log(getCard);
  const { _id, name, image, media, media_type, price, description, rating } =
    getCard;

  const navigateTo = useNavigate();
  const handleBack = () => {
    navigateTo(-1);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure data-aos="zoom-in">
        <img src={image} alt="cine" className="w-52 pt-5" />
      </figure>
      <div className="card-body px-11 py-5 font-semibold">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>
          <span className="text-green-500">{media}</span>{" "}
          <span className="text-red-500">{media_type}</span>{" "}
        </p>
        <p>
          Price: <span className="text-blue-500">{price}</span> BDT
        </p>
        <p>
          Rating: <span className="text-yellow-700">{rating}</span>
        </p>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <Link to={`/details/${_id}`}>
            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Details
            </button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Update
            </button>
          </Link>
          <button
            onClick={handleBack}
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

CineDetailCard.propTypes = {
  getCard: PropTypes.object,
};

export default CineDetailCard;
