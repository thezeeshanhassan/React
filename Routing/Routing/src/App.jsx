import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Root from "./Pages/Root";
import Product from "./Pages/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/product", element: <Product></Product> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
