import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../assets/banner1.jpg";
import Image2 from "../assets/banner2.jpg";
import Image3 from "../assets/banner3.avif";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Exclusive",
    title: "Marvel",
    title2: "Sony",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Exclusive",
    title: "Horror",
    title2: "Netflix",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Exclusive",
    title: "Hollywood",
    title2: "Warner",
  },
];

const Banner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden rounded-3xl min-h-[250px] sm:min-h-[450px] bg-black flex justify-center items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-black to-red-900 opacity-60"></div>
      <div className="container pb-8 sm:pb-0 relative z-10">
        <Slider {...settings}>
          {HeroData.map((data) => (
            <div key={data.id} className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text content section */}
                <div className="flex flex-col justify-center gap-6 sm:pl-8 pt-12 sm:pt-16 text-center sm:text-left relative z-20">
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-once="true"
                    className="text-lg sm:text-2xl lg:text-3xl font-semibold text-red-400 uppercase tracking-wide"
                  >
                    {data.subtitle}
                  </h2>
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="200"
                    data-aos-once="true"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg"
                  >
                    {data.title}
                  </h1>
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="400"
                    data-aos-once="true"
                    className="text-6xl sm:text-8xl lg:text-9xl font-bold uppercase text-red-500"
                  >
                    {data.title2}
                  </h1>
                  <button
                    className="md:w-1/2 mb-8 md:mb-12 px-8 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    Buy Tickets Now
                  </button>
                </div>
                {/* Image section */}
                <div className="order-1 sm:order-2 flex justify-center items-center">
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-full h-full object-cover mx-auto drop-shadow-2xl"
                      style={{ maxWidth: "600px", maxHeight: "400px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
