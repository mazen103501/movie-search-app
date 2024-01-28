import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Favourite from "./components/Favourite/Favourite";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "details/:id",
        element: <Details></Details>
      },
      {
        path: "/favourite",
        element: <Favourite></Favourite>
      }
    ]
  },

]);