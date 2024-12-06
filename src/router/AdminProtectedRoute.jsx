import React from 'react';
import useAuth from '../hooks/useAuth';
import config from '../../config';
import { Navigate } from 'react-router-dom';
import LoadingPage from '../pages/Others/LoadingPage';

const AdminProtectedRoute = ({children}) => {
    const { isLoading, user } = useAuth();

    if (isLoading) {
        return <LoadingPage />
    }


    //todo : remove this
    return children

    //match with admin email
    // if (user && user.email === config.ADMIN_EMAIL) {
    //     return children; 
    // }



    return <Navigate to='/' replace></Navigate>
};

export default AdminProtectedRoute;