import React from 'react';

import toast from 'react-hot-toast';
import UsersUpdate from './UsersUpdate';


const UserDataRow = ({ data ,axiosSecure,refetch}) => {

  
    return (<>
         <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div>
                    <div className='flex items-center gap-5 flex-col md:flex-row'>
                        <div className=''>
                            <img
                                alt='profile'
                                src={data?.profileImage}
                                className='mx-auto object-cover rounded h-10 w-15'
                            />
                        </div>
                        <div>
                            <span className='text-gray-900 whitespace-no-wrap block'>{data?.userName || "null"}</span>
                        </div>
                    </div>
                </div>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block text-center'
                >

                    {data?.fullName}
                </span>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block text-center'
                >

                    {data?.email}
                </span>
            </td>
          
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <span
                    className='text-gray-900 whitespace-no-wrap block'
                >

                    {data?.role} 
                </span>
            </td>
           

            <td className='py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center'
                >
                    
                          <UsersUpdate data={data} axiosSecure={axiosSecure} refetch={refetch}/>
                
                </span>
            </td>
        </tr>
    </>)
};

export default UserDataRow;
