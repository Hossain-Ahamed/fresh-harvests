import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Main/Home/Home";
import NotFound from "../pages/Shared/NotFound";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : 'home/jkdas',
                element : <Home/>
            }
        ]

    },
    {
        path : '*',
        element : <NotFound/>
    }
]);
