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
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import MyProfile from "../Component/MyProfile/MyProfile";

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
        loader: () => fetch("http://localhost:5000/cart"),
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
