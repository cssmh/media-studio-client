import PropTypes from "prop-types";
const MedCard = ({ getMedia }) => {
  // console.log(getMedia);
  const { name, image_url } = getMedia;
  return (
    <div className="p-4 mt-5 flex flex-col bg-base-300 rounded-lg">
      <img src={image_url} className="w-80 flex-grow" alt="" />
      <h1 className="text-xl my-2 font-semibold">{name}</h1>
    </div>
  );
};

MedCard.propTypes = {
  getMedia: PropTypes.object,
};

export default MedCard;
