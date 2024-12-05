import React, { useState } from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import CategoryBar from './CategoryBar';
import OurProductSection_ProductsContainer from './OurProductSection_ProductsContaner';
import { Link } from 'react-router-dom';
import leaf from '../../../../assets/images/leaf.png'
import TitleBar from '../TitleBar';
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
        <div className='px-4 md:px-16 xl:px-32 '>
            <TitleBar sectionName="Our Products" heading="Our Fresh Products" message="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients." />
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