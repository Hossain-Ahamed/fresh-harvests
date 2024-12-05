import React from 'react';
import useAuth from '../hooks/useAuth';
import config from '../../config';
import { Navigate } from 'react-router-dom';
import LoadingPage from '../pages/Others/LoadingPage';

const AdminProtectedRoute = () => {
    const { isLoading, user } = useAuth();

    if (isLoading) {
        return <LoadingPage />
    }

    //match with admin email
    if (user.email === config.ADMIN_EMAIL) {
        return children; 
    }

    return <Navigate to='/' replace></Navigate>
};

export default AdminProtectedRoute;