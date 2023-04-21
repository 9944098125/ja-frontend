import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Pages/Home";
import Registration from "../Pages/Registration";

const routes = createBrowserRouter([
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={routes} />;
}
