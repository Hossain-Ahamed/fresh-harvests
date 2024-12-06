import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import LoadingPage from '../../Others/LoadingPage';
import Error from '../../Others/Error';

const Profile = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: admin, isLoading, error } = useQuery({
        queryKey: ['adminprofile'],
        queryFn: async () => {
            // const res = await axiosSecure.get(`/auth/profile`);
            // return res?.data;


            const res = {
                "success": true,
                "message": "User profile retrieved successfully",
                "data": {
                    "id": "67507cec55df5fd9af065e24",
                    "userName": null,
                    "email": "admin@gmail.com",
                    "profileImage": null,
                    "phoneNumber": null,
                    "createdAt": "2024-12-04T16:01:48.318Z",
                    "updatedAt": "2024-12-04T16:01:48.318Z"
                }
            }
            return res.data;
        },


    });


    if (isLoading) return <LoadingPage />
    if (error) return <Error />
    return (
        <>
            <div>
                <div className='w-full p-3 lg:pl-24 mb-0 bg-gray-200 user-select-none'>
                    <h2 className='inline '>Your Profile</h2>
                </div>
                <div className='user-select-none w-full max-w-[400px] mx-auto  mb-28 md:mb-40 mt-6 md:mt-10 border border-gray-400 rounded px-3 pt-4  md:px-5 md:pt-7 pb-3 shadow'>
                    <div className="flex items-center justify-between mb-4">
                        {
                            admin?.profileImage && <img className="w-10 h-10 rounded-full" src={admin?.profileImage} alt={`${admin?.userName} - image`} />
                        }

                    </div>




                    <div className='pl-2'>

                        <p className="text-base font-semibold leading-none text-gray-600 ">
                            {admin?.userName}
                        </p>
                        <p className="mb-3 text-sm font-normal hover:underline text-gray-600">@{admin?.id}</p>

                        <ul className="text-sm">
                            <li className="flex items-center mb-2">
                                <span className="mr-2 font-semibold text-gray-400">
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z" fill="currentColor" />
                                    </svg>


                                </span>
                                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">{admin?.email}</a>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="mr-2 font-semibold text-gray-400">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">{admin?.phoneNumber || "null"}</a>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 font-semibold text-gray-400">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                                    </svg>
                                </span>
                                <span className="-mt-1 text-gray-700">Admin</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Profile;