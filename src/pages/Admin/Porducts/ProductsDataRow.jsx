import React from 'react';

import toast from 'react-hot-toast';
import { DeleteIcon } from './../../../components/DeleteIcon';
import ProductsDataUpdate from './ProductsDataUpdate';

const ProductDataRow = ({ data ,axiosSecure,refetch}) => {

    const handleDelete = ()=>{
        axiosSecure.delete(`/products/${data.id}`)
        .then(data=>{
          toast.success('Successully deleted');
          refetch()

        })
        .catch(e=>{
            toast.error('Error occured')
        })

       
    }
    return (<>
         <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div>
                    <div className='flex items-center gap-5 flex-col md:flex-row'>
                        <div className=''>
                            <img
                                alt='profile'
                                src={data?.images[0]}
                                className='mx-auto object-cover rounded h-10 w-15'
                            />
                        </div>
                      
                    </div>
                </div>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block text-center'
                >

                    {data?.productName}
                </span>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap block text-center'
                >

                    {data?.price}
                </span>
            </td>
          
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <span
                    className='text-gray-900 whitespace-no-wrap block'
                >

                    {data?.stock} 
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <span
                    className='text-gray-900 whitespace-no-wrap block'
                >

                    {data?.categoryId} 
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <span
                    className='text-gray-900 whitespace-no-wrap block'
                >

                    {data?.isDeleted ? "Deleted" : "Active"} 
                </span>
            </td>
           

            <td className='py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center'
                >
                    
                          <ProductsDataUpdate data={data} axiosSecure={axiosSecure} refetch={refetch}/>
                          <span title="Delete Product" onClick={handleDelete} className="inline-flex ml-3 cursor-pointer text-red-500"><DeleteIcon/></span>
                
                </span>
            </td>
        </tr>
    </>)
};

export default ProductDataRow;
