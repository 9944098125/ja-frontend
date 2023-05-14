import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";

import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import Navbar from "../Components/Navbar";
import Jobs from "../Pages/Jobs";
import Profile from "../Pages/Profile";
import JobDetails from "../Pages/JobDetails";

const Layout = () => {
  return (
    <React.Fragment>
      <div className="fixed_navbar">
        <Navbar />
      </div>
      <div className="scrollable_content">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

const routes = createBrowserRouter([
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={routes} />;
}
