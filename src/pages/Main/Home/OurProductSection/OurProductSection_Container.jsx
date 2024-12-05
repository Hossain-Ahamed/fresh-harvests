import React, { useState } from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import CategoryBar from './CategoryBar';
import OurProductSection_ProductsContainer from './OurProductSection_ProductsContaner';
import { Link } from 'react-router-dom';
import leaf from '../../../../assets/images/leaf.png'
const OurProductSection_Container = () => {
    const axiosSecure = useAxiosSecure();
    const [selectedCategory, setSelectedCategory] = useState({ "id": "all", "categoryName": "All" });
    const { refetch, data, isLoading, error } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            // const res = await axiosSecure.get('/category');
            // return res?.data;
            const res = {
                "success": true,
                "message": "Categories retrieve successfully!",
                "data": [
                    {
                        "id": "6751516f9c52879c1fde6558",
                        "categoryName": "fruits",
                        "createdAt": "2024-12-05T07:08:31.499Z",
                        "updatedAt": "2024-12-05T07:08:31.499Z"
                    },
                    {
                        "id": "6751569e0e539396658e60a9",
                        "categoryName": "Salad",
                        "createdAt": "2024-12-05T07:30:38.699Z",
                        "updatedAt": "2024-12-05T07:30:38.699Z"
                    },
                    {
                        "id": "6751584feaeaa5cc21bbe21b",
                        "categoryName": "Vegetable",
                        "createdAt": "2024-12-05T07:37:51.344Z",
                        "updatedAt": "2024-12-05T07:37:51.344Z"
                    }
                ]
            }
            return res.data;
        },


    });


    if (isLoading || error) return <></>
    return (
        <div className='px-4 md:px-16 xl:px-32 relative'>
            <img src={leaf} alt="" className='bg-transparent absolute h-[40px] lg:h-[84px] w-[30px] lg:[w-70px] top-2 lg:top-20  -rotate-[40.1deg]'/>
            <img src={leaf} alt="" className='bg-transparent absolute h-[40px] lg:h-[67px] w-[30px] lg:[w-51px] right-3 -top-[40px] lg:-top-[67px] -rotate-90'/>
            <div className='flex flex-col items-center justify-center'>
                <h2 className=' flex  px-[12px] py-[4px] items-start text-green sub-heading-2 md:sub-heading-1 rounded-lg' style={{ backgroundColor: 'rgba(116, 155, 63, 0.10)' }}>Our Products</h2>
                <p className='text-black heading-2 m-0 mt-5  '>Our Fresh Products</p>
                <p className='text-grey-100 body-3 mt-4'>We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
            </div>

            {/* category container  */}

            <CategoryBar categories={data} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <OurProductSection_ProductsContainer selectedCategory={selectedCategory} />

            <div className='w-full flex justify-center items-center mt-8'>
                <Link to='/shop' className='border border-primary rounded-lg button-4 lg:button-1 px-8 py-4 text-primary'>See All Products</Link>
            </div>
        </div>
    );
};

export default OurProductSection_Container;