import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import AppLayout from "../components/AppLayout";
import Home from "../components/Home";

const useRoute = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return appRoute;
};

export default useRoute;
