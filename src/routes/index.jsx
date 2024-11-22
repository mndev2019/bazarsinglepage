import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Contact from "../pages/Contact";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;

