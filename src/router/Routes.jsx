import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Main/Home/Home";
import NotFound from "../pages/Others/NotFound";
import Loading from "../pages/Others/LoadingPage";

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
                path: 'h',
                element: <Loading />
            }
        ]

    },
    {
        path: '*',
        element: <NotFound />
    }
]);
