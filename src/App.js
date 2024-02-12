import React from "react";

import Home1 from "./Home1";
import ProductPage from "./components/component/ProductPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home1 />,
  },
  {
    path: "/ProductPage",
    element: <ProductPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
