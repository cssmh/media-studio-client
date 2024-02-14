import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Component/Footer/Footer";
import { FallingLines } from "react-loader-spinner";
import { useEffect } from "react";

const MainLayout = () => {
  const navigationForSpinner = useNavigation();
  const loc = useLocation()
  console.log(loc);
  useEffect(()=> {
    if(loc.pathname === "/"){
      document.title = "CineMix -Home"
    }else{
      document.title = `CineMIX ${loc.pathname.toUpperCase().replace("/", "-")}`
    }
  },[loc.pathname])
  return (
    <div>
      <div className="max-w-[1310px] mx-auto">
        <Navbar></Navbar>
        <div className="min-h-[80vh]">
          {navigationForSpinner.state === "loading" ? (
            <div className="flex justify-center">
              <FallingLines
                color="#9C27B0"
                width="80"
                visible={true}
                ariaLabel="falling-circles-loading"
              />
            </div>
          ) : (
            <Outlet></Outlet>
          )}
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
