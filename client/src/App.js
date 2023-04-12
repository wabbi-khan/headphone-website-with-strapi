import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:id",
    element: <Category />,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
]);

function App() {
  return (
    <main>
      <AppContext>
        <Header />
        <RouterProvider router={router}> </RouterProvider> <Newsletter />
        <Footer />
      </AppContext>{" "}
    </main>
  );
}

export default App;
