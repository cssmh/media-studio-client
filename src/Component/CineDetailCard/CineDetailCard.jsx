import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
const CineDetailCard = ({ getCard }) => {
  //   console.log(getCard);
  const { _id, name, image, media, media_type, price, description, rating } =
    getCard;

  const navigateTo = useNavigate();

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
            <button className="btn bg-green-500 hover:bg-green-500 text-white">
              Details
            </button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn bg-green-500 hover:bg-green-500 text-white">
              Update
            </button>
          </Link>
          <Link to={navigateTo(-1)}>
            <button className="btn bg-green-500 hover:bg-green-500 text-white">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

CineDetailCard.propTypes = {
  getCard: PropTypes.object,
};

export default CineDetailCard;
