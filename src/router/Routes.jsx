import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Main/Home/Home";
import NotFound from "../pages/Others/NotFound";
import ProductDetail from "../pages/Main/ProductDetail/ProductDetail";
import Admin from "../layouts/Admin/Admin";
import Profile from "../pages/Admin/Profile/Profile";
import Category from "../pages/Admin/Category/Category";
import Porducts from "../pages/Admin/Porducts/Porducts";
import Users from "../pages/Admin/Users/Users";
import AdminProtectedRoute from "./AdminProtectedRoute";


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

        ]

    },
    {
        path: '/admin',
        element: <AdminProtectedRoute>
            <Admin />
        </AdminProtectedRoute>,
        children: [
            {
                index: true,
                element: <Profile />
            },
            {
                path: 'category',
                element: <Category />
            },
            {
                path: 'products',
                element: <Porducts />
            },
            {
                path: 'users',
                element: <Users />
            }
        ]

    },
    {
        path: '*',
        element: <NotFound />
    }
]);
