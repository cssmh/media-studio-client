import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getLatestMovies } from "../Api/movie";

const LatestMovies = () => {
  const { data = [] } = useQuery({
    queryKey: ["latestMovies"],
    queryFn: () => getLatestMovies(),
  });

  return (
    <div className="max-w-7xl mx-2 md:mx-auto py-9">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Movies</h2>
      <Swiper
        speed={200}
        grabCursor={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {data?.map((movie, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative overflow-hidden rounded-lg text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <img
                src={movie.image}
                alt={movie.name}
                className="w-3/4 mx-auto lg:w-full object-cover transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-base md:text-xl font-semibold">
                  {movie.name}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestMovies;
