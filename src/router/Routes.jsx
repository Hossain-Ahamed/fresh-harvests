import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Main/Home/Home";
import NotFound from "../pages/Others/NotFound";
import Error from "../pages/Others/Error";
import ProductDetail from "../pages/Main/ProductDetail/ProductDetail";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'product/:id',
                element: <ProductDetail />
            },
            {
                path: 'h',
                element: <Error />
            }
        ]

    },
    {
        path: '*',
        element: <NotFound />
    }
]);
