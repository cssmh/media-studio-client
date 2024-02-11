import PropTypes from "prop-types";
const CineCard = ({ getMedia }) => {
  // console.log(getMedia);
  const { name, image_url } = getMedia;
  return (
    <div
      data-aos="zoom-in-up"
      className="p-4 flex flex-col bg-base-300 rounded-lg"
    >
      <img src={image_url} className="w-80 flex-grow mx-auto" alt="" />
      <h1 className="text-2xl my-1 font-semibold mx-7">{name}</h1>
    </div>
  );
};

CineCard.propTypes = {
  getMedia: PropTypes.object,
};

export default CineCard;
