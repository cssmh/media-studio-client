import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const movies = [
  {
    name: "Captain America Civil War (2016)",
    image:
      "https://new.circleftp.net:5000/uploads/622819ac-26fc-4e6d-b80a-6e6b216b511a.jpeg",
  },
  {
    name: "Saripodhaa Sanivaaram",
    image:
      "https://new.circleftp.net:5000/uploads/bbe2385d-db3b-4b04-86ce-8eefdbb3fc28.jpeg",
  },
  {
    name: "Avengers Endgame (2019)",
    image:
      "https://new.circleftp.net:5000/uploads/12ae6fa7-f4e0-40ba-8a1b-8fb4813c48b3.jpeg",
  },
  {
    name: "Raayan (2024)",
    image:
      "https://new.circleftp.net:5000/uploads/aec744d9-9c66-4cf1-a79b-3cf12b4b6684.jpeg",
  },
  {
    name: "Satyabhama (2024)",
    image:
      "https://new.circleftp.net:5000/uploads/c6d48fae-e134-40fe-a0ba-6ada24c2fb11.jpeg",
  },
  {
    name: "Avengers Infinity War (2018)",
    image:
      "https://new.circleftp.net:5000/uploads/1d7f4e65-502c-416b-a177-dc7da334ee4a.jpeg",
  },
  {
    name: "Captain America: The Winter Soldier (2014)",
    image:
      "https://new.circleftp.net:5000/uploads/b360f694-7b12-4e1c-bec1-316b078277fc.jpeg",
  },
  {
    name: "Bad Newz (2024)",
    image:
      "https://new.circleftp.net:5000/uploads/9d960b56-01e0-4fcf-875a-f5dc79310fc2.jpeg",
  },
  {
    name: "Ranarangam (2019)",
    image:
      "https://new.circleftp.net:5000/uploads/156cc530-8800-4afc-a294-6903e70f4c4d.jpeg",
  },
];

const LatestMovies = () => {
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
        {movies.map((movie, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative overflow-hidden rounded-lg bg-gray-800 text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full object-cover transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-xl font-semibold">{movie.name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestMovies;
