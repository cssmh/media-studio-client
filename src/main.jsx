import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Root} />
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProvider>
  </React.StrictMode>
);
