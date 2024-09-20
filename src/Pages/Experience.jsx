import img1 from "../assets/img_30.jpg";
import img2 from "../assets/img_53.jpg";
import img3 from "../assets/img_55.jpg";
import img4 from "../assets/img_59.jpg";
import img5 from "../assets/img_60.jpg";
import img6 from "../assets/img_52.jpg";

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl text-yellow-500 mb-3 font-semibold">
            Videos and photos
          </h1>
          <img
            src={img1}
            alt="Experience Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-lg text-gray-700 mt-6 leading-relaxed">
            Discover the unmatched beauty and craftsmanship in every detail. Our
            experience offers you a glimpse into a world of endless
            possibilities, bringing art, culture, and adventure to life.
          </p>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={img2}
            alt="Experience Image 2"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={img3}
            alt="Experience Image 3"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={img4}
            alt="Experience Image 4"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={img5}
            alt="Experience Image 5"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={img1}
            alt="Experience Image 5"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={img6}
            alt="Experience Image 5"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
