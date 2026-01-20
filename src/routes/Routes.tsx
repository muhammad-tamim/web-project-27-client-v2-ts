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
import NotFoundPage from "../pages/NotFoundPage";
import ErrorElement from "../components/ui/ErrorElement";
import PrivateRoute from "./PrivateRoute";
import RecipeUpdatePage from "../pages/RecipeUpdatePage";


export const routes = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayouts,
    errorElement: <ErrorElement></ErrorElement>,
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
        element: <PrivateRoute><MyRecipesPage></MyRecipesPage></PrivateRoute>
      },
      {
        path: '/add-recipes',
        element: <PrivateRoute><AddRecipesPage></AddRecipesPage></PrivateRoute>
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
        element: <PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>
      },
      {
        path: '/recipe-details/:id',
        element: <PrivateRoute><RecipeDetailsPage></RecipeDetailsPage></PrivateRoute>
      },
      {
        path: '/update-recipe/:id',
        element: <PrivateRoute><RecipeUpdatePage></RecipeUpdatePage></PrivateRoute>
      },
      {
        path: '/recipe-category/:category',
        Component: RecipeCategoryPage
      },
      {
        path: '/recipe-cuisine/:cuisine',
        Component: RecipeCuisinePage
      },
      {
        path: '/*',
        Component: NotFoundPage
      }
    ]
  }
])