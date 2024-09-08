import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    quote:
      "This is the best movie streaming service I've ever used! Highly recommended.",
    author: "Jane Doe",
  },
  {
    id: 2,
    quote: "Amazing selection of movies and user-friendly interface.",
    author: "John Smith",
  },
  {
    id: 3,
    quote: "I love the exclusive offers and high-quality streaming.",
    author: "Sarah Lee",
  },
  {
    id: 4,
    quote:
      "This is the best movie streaming service I've ever used! Highly recommended.",
    author: "Jane Doe",
  },
  {
    id: 5,
    quote: "Amazing selection of movies and user-friendly interface.",
    author: "John Smith",
  },
  {
    id: 6,
    quote: "I love the exclusive offers and high-quality streaming.",
    author: "Sarah Lee",
  },
];

const Testimonials = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <Swiper
          speed={300}
          grabCursor={true}
          autoplay={{
            delay: 1000, // Adjust delay as needed
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimony) => (
            <SwiperSlide key={testimony.id}>
              <div className="p-8 rounded-lg shadow-xl text-center">
                <FaQuoteLeft className="text-5xl mb-4 mx-auto" />
                <p className="text-lg font-semibold mb-4">
                  {testimony.quote}
                </p>
                <p className="text-sm font-medium">
                  {testimony.author}
                </p>
                <FaQuoteRight className="text-5xl mt-4 mx-auto" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
