import { FaFilm, FaTicketAlt, FaStar, FaHeadphones } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaFilm className="text-4xl text-blue-600" />,
    title: "Wide Selection",
    description:
      "Choose from a wide range of movies, including the latest releases and classics.",
  },
  {
    id: 2,
    icon: <FaTicketAlt className="text-4xl text-green-600" />,
    title: "Easy Booking",
    description:
      "Book your tickets easily through our user-friendly website or app.",
  },
  {
    id: 3,
    icon: <FaStar className="text-4xl text-yellow-500" />,
    title: "Exclusive Offers",
    description:
      "Enjoy exclusive offers and discounts for our loyal customers.",
  },
  {
    id: 4,
    icon: <FaHeadphones className="text-4xl text-red-600" />,
    title: "Top-Notch Sound",
    description:
      "Experience movies with high-quality sound and visuals for an immersive experience.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
