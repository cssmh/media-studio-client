import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-[1310px] mx-auto">
        <Navbar></Navbar>
        <div className="min-h-[80vh]">
          <Outlet></Outlet>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
