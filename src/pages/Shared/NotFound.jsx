import React from 'react';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { Helmet } from 'react-helmet-async';
import notFoundImage from '../../assets/images/404.jpg'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <ScrollToTop />
            <Helmet >

                <meta name="robots" content="noindex, nofollow" />

            </Helmet>
            <div className="flex flex-col items-center justify-center h-screen max-h-screen bg-gray-100">

                <img src={notFoundImage} className='w-full lg:w-[800px]' alt="" />
                {/* <h1 className="text-3xl font-bold text-gray-800 mb-4">Error 404</h1> */}
                <p className="text-xl text-gray-600 my-8">Oops! The page you&apos;re looking for is not found.</p>
                <Link to='/' className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                    Go Back to Home Page
                </Link>
            </div>
        </div>
    );
};

export default NotFound;