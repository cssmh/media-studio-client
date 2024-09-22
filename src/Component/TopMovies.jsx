import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import bg from "../assets/bg_topmovie.png";
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getNowPlaying } from "../Api/movie";

const TopMovies = () => {
  const { data = [] } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: () => getNowPlaying(),
  });

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative max-w-7xl mx-2 md:mx-auto py-9">
        <div className="bg-black bg-opacity-10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Top Movies in Theatre
          </h2>
          <Swiper
            speed={200}
            grabCursor={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={7}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1000: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
          >
            {data?.map((movie, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative overflow-hidden rounded-lg text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-72 object-cover transition-transform duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <span className="text-lg md:text-2xl font-semibold">
                      {movie.name}
                    </span>
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
