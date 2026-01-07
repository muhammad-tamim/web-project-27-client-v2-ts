import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayouts,
    children: [
      {
        index: true,

      }
    ]
  }
])