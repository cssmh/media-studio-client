import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Entertainment from "../Entertainment/Entertainment";
import MovieReview from "../MovieReview/MovieReview";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-5xl mx-auto">
        <Entertainment />
        <AboutUs />
        <MovieReview />
      </div>
    </div>
  );
};

export default Home;
