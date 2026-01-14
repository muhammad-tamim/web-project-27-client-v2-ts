import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import AddRecipesPage from "../pages/AddRecipesPage";
import MyRecipesPage from "../pages/MyRecipesPage";
import AllRecipesPage from "../pages/AllRecipesPage";


export const routes = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: '/all-recipes',
        Component: AllRecipesPage
      },
      {
        path: '/my-recipes',
        Component: MyRecipesPage
      },
      {
        path: '/add-recipes',
        Component: AddRecipesPage
      },
      {
        path: '/sign-in',
        Component: SignInPage
      },
      {
        path: '/sign-up',
        Component: SignUpPage
      },
      {
        path: '/profile',
        Component: ProfilePage
      }
    ]
  }
])