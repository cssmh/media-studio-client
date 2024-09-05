import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image2 from "../assets/film1.jpg";
import Image3 from "../assets/film2.jpg";
import Image5 from "../assets/film3.jpg";

const HeroData = [
  {
    id: 2,
    img: Image2,
    subtitle: "Exclusive",
    title: "Marvel",
    title2: "Sony",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Exclusive",
    title: "Horror",
    title2: "Netflix",
  },
  {
    id: 5,
    img: Image5,
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
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="overflow-hidden rounded-3xl min-h-[250px] sm:min-h-[450px] bg-slate-500 flex justify-center items-center">
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {HeroData.map((data) => (
            <div key={data.id} className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                  >
                    {data.subtitle}
                  </h1>
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                  >
                    {data.title2}
                  </h1>
                  <div
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  ></div>
                  <button
                    className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition duration-300"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    Buy Tickets Now
                  </button>
                </div>
                {/* Img section */}
                <div className="order-1 sm:order-2 flex justify-center items-center">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-full h-full object-cover mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
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
