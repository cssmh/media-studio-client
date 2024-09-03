import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "../Component/ErrorPage";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Component/AddProduct";
import MyCart from "../Pages/MyCart";
import CineDetails from "../Component/CineDetails";
import CineUpdate from "../Component/CineUpdate";
import DetailsPage from "../Component/DetailsPage";
import MyProfile from "../Component/MyProfile";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
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
        element: <CineDetails />,
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
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Root;
