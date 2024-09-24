import banner1 from "../assets/banner_1.jpg";
import banner2 from "../assets/banner_2.jpg";

const SpecialOffer = () => {
  return (
    <div className="flex justify-center items-center my-9 w-full overflow-hidden">
      <img
        src={banner1}
        className="w-full h-[200px] md:h-[300px] object-cover"
        alt="Offer 1"
      />
      <img
        src={banner2}
        className="w-full h-[200px] md:h-[300px] object-cover"
        alt="Offer 2"
      />
    </div>
  );
};

export default SpecialOffer;
