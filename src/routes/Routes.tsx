import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import HomePage from "../pages/HomePage";

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: HomePage
      },
    ]
  }
])