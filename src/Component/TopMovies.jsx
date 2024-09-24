import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import bg from "../assets/bg_topmovie.png";
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getTopMovies } from "../Api/movie";
import { Link } from "react-router-dom";

const TopMovies = () => {
  const { data = [] } = useQuery({
    queryKey: ["topMovies"],
    queryFn: () => getTopMovies(),
  });

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative max-w-7xl mx-2 md:mx-auto py-12">
        <div className="bg-gradient-to-b from-black/80 to-transparent p-8 rounded-lg">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
            Top Movies in Theatre
          </h2>
          <Swiper
            speed={500}
            grabCursor={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={5}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 9,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              1000: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 9,
              },
            }}
          >
            {data?.map((movie, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative overflow-hidden rounded-lg text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-80 object-cover transition-transform duration-300 ease-in-out rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <span className="text-xl font-semibold text-center">
                      {movie.name}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Link
                      to={`/details/${movie._id}`}
                      className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-700 transition duration-200"
                    >
                      Watch Now
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopMovies;
