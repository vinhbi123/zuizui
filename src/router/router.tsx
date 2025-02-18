
import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";

import Nhom from "../pages/Nhom";
import Gioithieu from "../pages/Gioithieu";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/nhom",
    element: <Nhom />,
  },

  {
    path: "/gioithieu",
    element: <Gioithieu />,
  },

];

export default routes;
