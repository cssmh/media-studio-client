import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CineCard = ({ getMedia }) => {
  // console.log(getMedia);
  const { name, image_url } = getMedia;
  return (
    <Link
      to={`/${name}`}
      data-aos="zoom-in-up"
      className="p-4 flex flex-col bg-base-300 rounded-lg"
    >
      <img src={image_url} className="w-80 flex-grow mx-auto" alt="" />
      <h1 className="text-2xl my-1 font-semibold mx-7">{name}</h1>
    </Link>
  );
};

CineCard.propTypes = {
  getMedia: PropTypes.object,
};

export default CineCard;
