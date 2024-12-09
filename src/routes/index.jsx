import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Contact from "../pages/Contact";
import Home from "../components/Home";
import Guest from "../pages/Guest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/host",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/guest",
        element: <Guest />,
      },
    ],
  },
]);

export default router;

