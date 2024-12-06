import React from 'react';
import toast from 'react-hot-toast';
import CategoryUpdate from './CategoryUpdate';
import { DeleteIcon } from '../../../components/DeleteIcon';

const CategoryDataRow = ({ data ,axiosSecure,refetch}) => {

    const handleDelete = ()=>{
        axiosSecure.delete(`/category/${data.id}`)
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
                <span
                    className='text-gray-900 whitespace-no-wrap block text-center'
                >

                    {data?.categoryName}
                </span>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <span
                    className='text-gray-900 whitespace-no-wrap block'
                >

                    {data?.id} 
                </span>
            </td>

            <td className='py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    className='text-gray-900 whitespace-no-wrap flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center'
                >
                    
                           <CategoryUpdate data={data} axiosSecure={axiosSecure} refetch={refetch}/>
                            <span title="Delete category" onClick={handleDelete} className="inline-flex ml-3 cursor-pointer text-red-500"><DeleteIcon /></span>
                
                </span>
            </td>
        </tr>
    </>)
};

export default CategoryDataRow;
