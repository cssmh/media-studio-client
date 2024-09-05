const Newsletter = () => {
  return (
    <div className="py-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="container mx-auto px-4">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl font-bold text-center text-white mb-8"
        >
          Subscribe to Our Newsletter
        </h2>
        <form
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="flex flex-col md:flex-row items-center justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-4 rounded-lg border border-transparent bg-white shadow-md mb-4 md:mb-0 md:mr-4 w-full md:w-1/2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition duration-300"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
