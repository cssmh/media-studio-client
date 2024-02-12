import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import AddProduct from "../Component/AddProduct/AddProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyCart from "../Component/MyCart/MyCart";
import CineDetails from "../Component/CineDetails/CineDetails";
import CineUpdate from "../Component/CineUpdate/CineUpdate";
import DetailsPage from "../Component/DetailsPage/DetailsPage";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/:id",
        element: <CineDetails></CineDetails>,
        loader: () => fetch("http://localhost:5000/cine"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <CineUpdate />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cine/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cine/${params.id}`),
      },
    ],
  },
]);

export default Root;
