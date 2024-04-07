import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
