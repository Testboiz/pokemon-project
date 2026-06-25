import { createBrowserRouter } from "react-router";
import { DetailPage } from "./pages/DetailPage";
import GlobalLayout from "./layout/layout";
import MainPage from "./pages/MainPage";
import CaughtPage from "./pages/CaughtPage";
import CatchPage from "./pages/CatchPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout/>,
      children: [
        {
          index: true, 
          element: <MainPage />,
        },
        {
            path: "/detail/:id",
            element: <DetailPage/>
        },
        {
          path: "/caught",
          element: <CaughtPage/>
        },
        {
          path: "/catch/:id",
          element: <CatchPage/>
        },
      ],
    },

  ])