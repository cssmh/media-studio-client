import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import SmallLoader from "../Component/SmallLoader";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />
      <div className="min-h-[80vh]">
        {navigation.state === "loading" ? <SmallLoader /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
