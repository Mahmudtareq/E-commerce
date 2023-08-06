import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
import About from "../components/About/About";
import Contacts from "../components/Contacts/Contacts";
import Posts from "../components/Posts/Posts";
import PostDetails from "../components/PostDetails/PostDetails";
import Products from "../components/Products/Products";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Foods from "../components/Foods/Foods";
import MealsDetails from "../components/MealsDetails/MealsDetails";
import Orders from "../components/Orders/Orders";
import Shop from "../components/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contacts />,
      },
      {
        path: "posts",
        element: <Posts />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "post/:postId",
        element: <PostDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "products",
        element: <Products />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "foods",
        element: <Foods />,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s"),
      },
      {
        path: "foods/:foodId",
        element: <MealsDetails />,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`
          ),
      },
      {
        path: "orders",
        element: <Orders />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "shop",
        element: <Shop />,
        loader: () => fetch("/products.json"),
      },
    ],
  },
]);
export default router;
