import React, { createContext, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import config from '../../../config';
import LoadingPage from '../../pages/Others/LoadingPage';
export const AuthContext = createContext();
const AuthProvider = () => {
    const axiosSecure = useAxiosSecure();

    const [isLoading, setIsLoading] = useState(false);
    const ParsingData = () => {
        try {
            return JSON.parse(CryptoJS.AES.decrypt(Cookies.get('_userData'), config.DATA_ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8))
        } catch (error) {
            Cookies.remove('_userData');
            return null;
        }
    }
    //set email address to get the admin profile match
    const [user, setUser] = useState(Cookies.get('_userData') ? ParsingData() : null);


    // Login function
    const loginByEmailPass = (email, password) => {
        setIsLoading(true);

        axiosSecure.post(`/auth/login`,
            {
                email: email,
                password: password,
            },
            {
                withCredentials: true,
            })
            .then((data) => {
                // set Data to the state
                const userData = { email: email };
                setAdmin(userData);
                const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(adminData), config.DATA_ENCRYPTION_KEY).toString();
                Cookies.set('_userData', encryptedData, {
                    secure: true,
                    sameSite: 'Strict',
                });

                //store the authorization token to localstorage to add in header
                const token = data.data?.token || '';
                localStorage.setItem('harvest_auth_token', token);

            })
            .catch((e) => console.error(e))
            .finally(() => setIsLoading(false))

    };


    const value = {
        user,
        isLoading,
        setIsLoading,
        loginByEmailPass,
    };

    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <AuthContext.Provider>

        </AuthContext.Provider>
    );
};

export default AuthProvider;