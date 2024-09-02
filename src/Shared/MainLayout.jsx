import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import SmallLoader from "../Component/SmallLoader";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <div className="max-w-[1310px] mx-auto">
        <Navbar />
        <div className="min-h-[80vh]">
          {navigation.state === "loading" ? <SmallLoader /> : <Outlet />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
