import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="max-w-[1310px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default MainLayout;
