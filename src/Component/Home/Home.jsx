import Banner from "../../assets/banner/2.jpg";
import Entertainment from "../Entertainment/Entertainment";

const Home = () => {
  return (
    <div>
      <img src={Banner} alt="" />
      <Entertainment></Entertainment>
    </div>
  );
};

export default Home;
