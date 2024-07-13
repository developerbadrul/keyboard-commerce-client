
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import DashboardPage from "../pages/DashboardPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "product-details",
                element: <ProductDetailsPage />,
            },
            {
                path: "cart",
                element: <CartPage />,
            },
            {
                path: "checkout",
                element: <CheckoutPage />,
            },
            {
                path: "about-us",
                element: <AboutPage />,
            },
            {
                path: "contact-us",
                element: <ContactPage />,
            },
        ],  
    },
    {
        path: "dashboard",
        element: <DashboardPage />,
        children: [
            {
                index: true,
                element: <>this is dashboard item</>
            }
        ]
    },
]);

export default router;
