import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import AllCategory from "./AllCategory";
import Services from "./Services";
import LatestMovies from "../Pages/LatestMovies";
import FeaturedMovies from "./FeaturedMovies";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Star CineMix - Book Your Ticket</title>
      </Helmet>
      <Banner />
      <LatestMovies />
      <Services />
      <div className="max-w-6xl mx-auto">
        <AllCategory />
      </div>
      <FeaturedMovies />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
