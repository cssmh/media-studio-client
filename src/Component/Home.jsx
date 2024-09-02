import Banner from "../Banner/Banner";
import Entertainment from "../Entertainment/Entertainment";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-5xl mx-auto">
        <Entertainment />
      </div>
    </div>
  );
};

export default Home;
