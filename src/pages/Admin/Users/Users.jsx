import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import LoadingPage from '../../Others/LoadingPage';
import Error from '../../Others/Error';
import UserDataRow from './UsersDataRow';

const Users = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            // const res = await axiosSecure.get(`/users`);
            // return res?.data;


            const res = {
                "success": true,
                "message": "Users retrieve successfully!",
                "data": {
                    "meta": {
                        "page": 1,
                        "limit": 10,
                        "total": 30
                    },
                    "data": [
                        {
                            "id": "675311611cdb919fe028cf36",
                            "fullName": "Mahdi Hasan Mahi",
                            "userName": null,
                            "email": "chat.mahdihasan@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T14:59:45.614Z",
                            "updatedAt": "2024-12-06T14:59:45.614Z"
                        },
                        {
                            "id": "675308df1cdb919fe028cf34",
                            "fullName": "shahed",
                            "userName": null,
                            "email": "shahed@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T14:23:27.524Z",
                            "updatedAt": "2024-12-06T14:23:27.524Z"
                        },
                        {
                            "id": "675306181cdb919fe028cf33",
                            "fullName": "Belal",
                            "userName": null,
                            "email": "belal@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T14:11:36.813Z",
                            "updatedAt": "2024-12-06T14:11:36.813Z"
                        },
                        {
                            "id": "675305f81cdb919fe028cf32",
                            "fullName": "Jahid",
                            "userName": null,
                            "email": "jahid@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T14:11:04.367Z",
                            "updatedAt": "2024-12-06T14:11:04.367Z"
                        },
                        {
                            "id": "6753031a1cdb919fe028cf31",
                            "fullName": "Admin",
                            "userName": null,
                            "email": "admineee@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T13:58:50.254Z",
                            "updatedAt": "2024-12-06T13:58:50.254Z"
                        },
                        {
                            "id": "6752f54c447768d569b9db52",
                            "fullName": "Cade Barton",
                            "userName": null,
                            "email": "bottle@glass.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T12:59:56.732Z",
                            "updatedAt": "2024-12-06T12:59:56.732Z"
                        },
                        {
                            "id": "6752f03af00b7e60b6e431b0",
                            "fullName": "Keiko Calderon",
                            "userName": null,
                            "email": "saleh01715972188@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T12:38:18.345Z",
                            "updatedAt": "2024-12-06T12:38:18.345Z"
                        },
                        {
                            "id": "6752ba0c1cdb919fe028cf28",
                            "fullName": "Admin",
                            "userName": null,
                            "email": "admindfds@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T08:47:08.316Z",
                            "updatedAt": "2024-12-06T08:47:08.316Z"
                        },
                        {
                            "id": "6752b9de1cdb919fe028cf27",
                            "fullName": "Kieran Gonzalez",
                            "userName": null,
                            "email": "minoxexaq@mailinator.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T08:46:22.379Z",
                            "updatedAt": "2024-12-06T08:46:22.379Z"
                        },
                        {
                            "id": "6752b9891cdb919fe028cf26",
                            "fullName": "Kiara Casey",
                            "userName": null,
                            "email": "hohap@mailinator.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T08:44:57.028Z",
                            "updatedAt": "2024-12-06T08:44:57.028Z"
                        },
                        {
                            "id": "6752b91d1cdb919fe028cf25",
                            "fullName": "fdsfds",
                            "userName": null,
                            "email": "admin2632@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T08:43:09.032Z",
                            "updatedAt": "2024-12-06T08:43:09.032Z"
                        },
                        {
                            "id": "67528fdc1cdb919fe028cf24",
                            "fullName": "Mehedi",
                            "userName": null,
                            "email": "mehedi@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T05:47:08.224Z",
                            "updatedAt": "2024-12-06T05:47:08.224Z"
                        },
                        {
                            "id": "675287051be3655c78e67ad3",
                            "fullName": "Ivana Foster",
                            "userName": null,
                            "email": "heciqe@mailinator.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T05:09:25.384Z",
                            "updatedAt": "2024-12-06T15:34:47.884Z"
                        },
                        {
                            "id": "67525c9c1cdb919fe028cf23",
                            "fullName": "abcdefgh",
                            "userName": null,
                            "email": "abas@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T02:08:28.238Z",
                            "updatedAt": "2024-12-06T02:08:28.238Z"
                        },
                        {
                            "id": "67525a231cdb919fe028cf22",
                            "fullName": "hasan",
                            "userName": null,
                            "email": "hasan1@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T01:57:55.620Z",
                            "updatedAt": "2024-12-06T01:57:55.620Z"
                        },
                        {
                            "id": "675259db1cdb919fe028cf21",
                            "fullName": "kamran",
                            "userName": null,
                            "email": "hasan@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T01:56:43.679Z",
                            "updatedAt": "2024-12-06T01:56:43.679Z"
                        },
                        {
                            "id": "675258bc1cdb919fe028cf20",
                            "fullName": "jamal",
                            "userName": null,
                            "email": "jamal@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T01:51:56.441Z",
                            "updatedAt": "2024-12-06T01:51:56.441Z"
                        },
                        {
                            "id": "6752585b1cdb919fe028cf1f",
                            "fullName": "kamran hasan",
                            "userName": null,
                            "email": "niro@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T01:50:19.387Z",
                            "updatedAt": "2024-12-06T01:50:19.387Z"
                        },
                        {
                            "id": "67525758d41a968acd9fd849",
                            "fullName": "bhatija",
                            "userName": null,
                            "email": "bhatija@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-06T01:46:00.705Z",
                            "updatedAt": "2024-12-06T01:46:00.705Z"
                        },
                        {
                            "id": "6751c3eb1cdb919fe028cf1e",
                            "fullName": "kdfkd",
                            "userName": null,
                            "email": "dfsd@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-05T15:16:59.598Z",
                            "updatedAt": "2024-12-05T15:16:59.598Z"
                        },
                        {
                            "id": "67519a9c1cdb919fe028cf1d",
                            "fullName": "Nabil Ahsan",
                            "userName": null,
                            "email": "pestancent119@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-05T12:20:44.084Z",
                            "updatedAt": "2024-12-05T12:20:44.084Z"
                        },
                        {
                            "id": "67519a5e1cdb919fe028cf1c",
                            "fullName": "Admin",
                            "userName": null,
                            "email": "adminee@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-05T12:19:42.087Z",
                            "updatedAt": "2024-12-05T12:19:42.087Z"
                        },
                        {
                            "id": "675197931cdb919fe028cf1b",
                            "fullName": "Md. Nafis Tarik",
                            "userName": null,
                            "email": "nafistarik789@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-05T12:07:47.620Z",
                            "updatedAt": "2024-12-05T12:07:47.620Z"
                        },
                        {
                            "id": "6751758b1cdb919fe028cf13",
                            "fullName": "hello world",
                            "userName": null,
                            "email": "helloworld@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-05T09:42:35.038Z",
                            "updatedAt": "2024-12-05T09:42:35.038Z"
                        },
                        {
                            "id": "675157c91cdb919fe028cf10",
                            "fullName": "Admin123",
                            "userName": null,
                            "email": "admin4@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-05T07:35:37.913Z",
                            "updatedAt": "2024-12-05T07:35:37.913Z"
                        },
                        {
                            "id": "675157901cdb919fe028cf0f",
                            "fullName": "Admin",
                            "userName": null,
                            "email": "admin123@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-05T07:34:40.355Z",
                            "updatedAt": "2024-12-05T07:34:40.355Z"
                        },
                        {
                            "id": "675115431cdb919fe028cf07",
                            "fullName": "kamranhasan",
                            "userName": null,
                            "email": "nirob@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-05T02:51:47.712Z",
                            "updatedAt": "2024-12-05T02:51:47.712Z"
                        },
                        {
                            "id": "675114fb1cdb919fe028cf06",
                            "fullName": "karman",
                            "userName": null,
                            "email": "kamran@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-05T02:50:35.167Z",
                            "updatedAt": "2024-12-05T02:50:35.167Z"
                        },
                        {
                            "id": "67507cec55df5fd9af065e24",
                            "fullName": "Admin",
                            "userName": "john_doe",
                            "email": "john.doe@example.com",
                            "profileImage": "https://example.com/profile.jpg",
                            "role": "ADMIN",
                            "createdAt": "2024-12-04T16:01:48.318Z",
                            "updatedAt": "2024-12-06T15:41:09.433Z"
                        },
                        {
                            "id": "67507ce51cdb919fe028cf05",
                            "fullName": "fasdfasdfasf",
                            "userName": null,
                            "email": "acasdfasfasfdasdfasfdcessfordeasdfasdfasfdv2@gmail.com",
                            "profileImage": null,
                            "role": "USER",
                            "createdAt": "2024-12-04T16:01:41.591Z",
                            "updatedAt": "2024-12-04T16:01:41.591Z"
                        }
                    ]
                }
            }
            return res.data.data;
        },


    });


    if (isLoading) return <LoadingPage />
    if (error) return <Error />
    return (
        <div>
            <div className='w-full p-3 lg:pl-24 mb-0 bg-gray-200 user-select-none'>
                <h2 className='inline '>Users</h2>
            </div>
            <table className='min-w-full leading-normal'>
              <thead>
              <tr>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal '
                  >
                   User
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                  >Full Name</th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                  >email</th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal'
                  >
                    role
                  </th>
                 
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                  >
                    Action
                  </th>
                </tr>
              </thead>
            <tbody>{data && Array.isArray(data) && data.map(i => <UserDataRow key={i.id} data={i} axiosSecure={axiosSecure} refetch={refetch} />)}</tbody> 
            </table>
        </div>
    );
};

export default Users;