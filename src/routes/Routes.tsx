import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import AddRecipesPage from "../pages/AddRecipesPage";
import MyRecipesPage from "../pages/MyRecipesPage";
import AllRecipesPage from "../pages/AllRecipesPage";
import RecipeDetailsPage from "../pages/RecipeDetailsPage";
import RecipeCuisinePage from "../pages/RecipeCuisinePage";
import RecipeCategoryPage from "../pages/RecipeCategoryPage";


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
      },
      {
        path: '/recipe-details/:title',
        Component: RecipeDetailsPage
      },
      {
        path: '/recipe-category/:category',
        Component: RecipeCategoryPage
      },
      {
        path: '/recipe-cuisine/:country',
        Component: RecipeCuisinePage
      }
    ]
  }
])