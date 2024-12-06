import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingPage from './../../Others/LoadingPage';
import Error from '../../Others/Error';
import heartIcon from '../../../assets/svg/heart.svg'
import cart from '../../../assets/svg/cart.svg'
import star from '../../../assets/svg/star.svg'
import ProductCard from '../../Shared/PorductCard/ProductCard';
const ProductDetail = () => {
    const axiosSecure = useAxiosSecure();
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { refetch, data: { product = {}, category = {} } = {}, isLoading, error } = useQuery({
        queryKey: ['productdetail', id],
        queryFn: async () => {
            // const res1 = await axiosSecure.get(`/products/${id}`);
            // const productData = res1?.data;
            // if (!productData) {
            //     return;
            // }

            // // Second request using data from the first response (if needed)
            // const res2 = await axiosSecure.get(`/category/${productData.id}`);
            // const categoryData = res2?.data;

            // // Combine or process data as needed
            // return {
            //     product: productData,
            //     category: categoryData,
            // };

            const res1 = {
                "success": true,
                "message": "Product retrieve successfully!",
                "data": {
                    "id": "67514a611cdb919fe028cf09",
                    "productName": "Banana",
                    "description": "Bananas are elongated, yellow fruits with a sweet, creamy flesh, commonly eaten fresh or used in smoothies, desserts, and baked goods. They are rich in nutrients like potassium, vitamin C, and dietary fiber, making them a popular and healthy snack worldwide.",
                    "price": 20.99,
                    "stock": 50,
                    "images": [
                        "https://i.ibb.co.com/WD035Hb/18.png",
                        "https://i.ibb.co.com/h9JMpLm/2.png",
                        "https://i.ibb.co.com/zZW0YRs/4.png"
                    ],
                    "categoryId": "6751516f9c52879c1fde6558",
                    "isDeleted": false,
                    "createdAt": "2024-12-05T06:38:25.687Z",
                    "updatedAt": "2024-12-05T06:38:25.687Z"
                }
            }

            const res2 = {
                "success": true,
                "message": "Category retrieve successfully!",
                "data": {
                    "id": "6751516f9c52879c1fde6558",
                    "categoryName": "fruits",
                    "createdAt": "2024-12-05T07:08:31.499Z",
                    "updatedAt": "2024-12-05T07:08:31.499Z"
                }
            }

            return {
                product: res1.data,
                category: res2.data,
            };
        },


    });


    if (isLoading) return <LoadingPage />
    if (error) return <Error />
    return (
        <div className='mt-4 lg:mt-8 px-4 lg:px-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
                <ImageViewer images={product.images} />
                <div className='w-full flex flex-col items-start '>
                    <div className='flex-grow'>

                        <h2 className='w-fit flex  px-[12px] py-[4px] items-start text-green sub-heading-2 md:sub-heading-1 rounded-lg' style={{ backgroundColor: 'rgba(116, 155, 63, 0.10)' }}>{category.categoryName}</h2>
                        <p className='heading-4 md:heading-2 pt-2 md:pt-4'>{product.productName}</p>
                        <div className='flex justify-start items-center pt-2 md:pt-4' aria-label='review'>
                            {[...new Array(5)].map((_, i) => <img src={star} key={i} className='me-1' />)}
                            <p className='heading-6 text-black'>5.0 <span className='heading-7'>&#40;1 review&#41;</span></p>
                        </div>
                        <p className='pt-2 md:pt-4 heading-5 md:heading-4 text-primary' aria-label='price'>${product.price}/kg</p>
                        <p className='body-2 text-grey-100 pt-2 md:pt-4'>{product.description}</p>
                    </div>


                    {/* quantity  */}
                    <div className='w-full flex-shirnk flex justify-start items-center'>

                        <p className='text-black heading-6 me-4'>Quantity</p>
                        <span className="w-32  grid grid-cols-3 justify-center overflow-hidden rounded-md border bg-white shadow-sm">
                            <button
                                className="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative disabled:cursor-not-allowed"
                                disabled={quantity <= 1}
                                onClick={() => setQuantity((prev) => prev - 1)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <rect x="3.53223" y="6.18622" width="6.93581" height="1.636" rx="0.743571" fill="#343434" />
                                </svg>
                            </button>

                            <p
                                className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative border-e"

                            >
                                {quantity}
                            </p>
                            <button
                                className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                                onClick={() => setQuantity((prev) => prev + 1)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M10.4998 7.58332H7.58317V10.5C7.58317 10.8208 7.32067 11.0833 6.99984 11.0833C6.679 11.0833 6.4165 10.8208 6.4165 10.5V7.58332H3.49984C3.179 7.58332 2.9165 7.32082 2.9165 6.99999C2.9165 6.67916 3.179 6.41666 3.49984 6.41666H6.4165V3.49999C6.4165 3.17916 6.679 2.91666 6.99984 2.91666C7.32067 2.91666 7.58317 3.17916 7.58317 3.49999V6.41666H10.4998C10.8207 6.41666 11.0832 6.67916 11.0832 6.99999C11.0832 7.32082 10.8207 7.58332 10.4998 7.58332Z" fill="#343434" />
                                </svg>
                            </button>

                        </span>
                        <p className='body-2 text-grey-100 ms-2'>/kg</p>
                    </div>
                    <div className='mt-10 w-full flex-shirnk grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-start'>
                        <button className='flex justify-center items-center gap-x-2.5 px-4 lg:px-8 py-4 lg:py-6 h-full bg-grey-20 text-grey-100 rounded-lg button-1'>
                            <img src={heartIcon} alt="faortie icon" />
                            Save as favorite
                        </button>
                        <button disabled={product.stock < 1} className='disabled:cursor-not-allowed flex justify-center items-center gap-x-2.5 px-4 lg:px-8 py-4 lg:py-6 h-full bg-primary text-white rounded-lg button-1'>
                            <img src={cart} alt="faortie icon" />
                            Add to cart
                        </button>

                    </div>

                </div>
            </div>
            <ProductDetailInformationSection productData={product} />
            <RelatedProducts />
        </div>
    );
};

export default ProductDetail;

const ImageViewer = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative border py-5 rounded-lg md:rounded-xl border-grey-50">

            <img
                src={images[currentIndex]}
                alt="product image"
                className="w-full h-full object-cover"
            />

            <div className="mt-2 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-2 h-2 rounded-full ${currentIndex === index
                            ? 'bg-green'
                            : 'bg-grey-50'
                            }`}
                    ></button>
                ))}
            </div>

        </div>
    );
}

const ProductDetailInformationSection = ({ productData }) => {
    return (
        <>
            <div className='mt-14 flex justify-start gap-3 lg:gap-6'>


                <button className='cursor-pointer px-4 lg:px-6 py-2 lg:py-3 button-4 lg:button-2  border-[1px] border-grey-50 rounded-[4px] lg:rounded-lg  bg-green text-white' >
                    Description
                </button>
                <button className='cursor-pointer px-4 lg:px-6 py-2 lg:py-3 button-4 lg:button-2  border-[1px] border-grey-50 rounded-[4px] lg:rounded-lg  bg-[#FFF] text-grey-80' >
                    Reviews&#40;1&#41;
                </button>
            </div>
            <div className='w-2/3 bg-grey-20 mt-6 p-6 md:px-8 lg:py-10 rounded-3xl text-grey-100 body-3 md:body-2' aria-label='content'>
                <p className="whitespace-pre-line">
                    Our coconuts are sustainably grown, ensuring the best quality and taste. Each coconut is handpicked and carefully prepared, offering you the freshest product possible. Rich in healthy fats, electrolytes, and essential nutrients, coconuts provide both hydration and nourishment. Whether you’re using the water, flesh, or milk, our coconuts bring versatility to your kitchen while supporting healthy living.

                    Perfect for smoothies, desserts, curries, and more — let the natural sweetness of the coconut elevate your recipes. Enjoy the tropical goodness in its purest form, directly from nature.
                </p>

            </div>
        </>
    )
}

const RelatedProducts = () => {
    const data = [{
        "id": "67514a611cdb919fe028cf09",
        "productName": "Banana",
        "description": "Bananas are elongated, yellow fruits with a sweet, creamy flesh, commonly eaten fresh or used in smoothies, desserts, and baked goods. They are rich in nutrients like potassium, vitamin C, and dietary fiber, making them a popular and healthy snack worldwide.",
        "price": 20.99,
        "stock": 50,
        "images": [
            "https://i.ibb.co.com/v4KGBK0/1.png"
        ],
        "categoryId": "6751516f9c52879c1fde6558",
        "isDeleted": false,
        "createdAt": "2024-12-05T06:38:25.687Z",
        "updatedAt": "2024-12-05T06:38:25.687Z"
    },
    {
        "id": "675153ac1cdb919fe028cf0a",
        "productName": "Coconut",
        "description": "Coconut is a versatile tropical fruit widely used in culinary dishes and beverages. It offers various edible parts, including the water, tender flesh, and mature meat. Coconut can be consumed fresh, dried, or processed into products like coconut oil, milk, cream, and flour. Its mildly sweet flavor and rich texture make it a popular ingredient in both savory and sweet dishes, particularly in Asian, Caribbean, and tropical cuisines. Additionally, it's valued for its nutritional benefits, providing healthy fats, fiber, and essential minerals like potassium and magnesium.",
        "price": 200,
        "stock": 50,
        "images": [
            "https://i.ibb.co.com/h9JMpLm/2.png"
        ],
        "categoryId": "6751516f9c52879c1fde6558",
        "isDeleted": false,
        "createdAt": "2024-12-05T07:18:04.783Z",
        "updatedAt": "2024-12-05T07:18:04.783Z"
    },
    {
        "id": "675154d81cdb919fe028cf0b",
        "productName": "Guava",
        "description": "Guava is a tropical fruit known for its sweet and tangy flavor, often enjoyed fresh, juiced, or in desserts. It has a soft, edible skin and a juicy interior filled with tiny seeds. Guava is rich in vitamin C, fiber, and antioxidants, making it a nutritious choice. Its unique taste and aroma make it a popular ingredient in smoothies, jams, and salads, as well as in savory dishes in some cuisines. Guava is also prized for its health benefits, including boosting immunity and aiding digestion.",
        "price": 20,
        "stock": 500,
        "images": [
            "https://i.ibb.co.com/dp0b86c/3.png"
        ],
        "categoryId": "6751516f9c52879c1fde6558",
        "isDeleted": false,
        "createdAt": "2024-12-05T07:23:04.640Z",
        "updatedAt": "2024-12-05T07:23:04.640Z"
    },
    {
        "id": "6751559b1cdb919fe028cf0c",
        "productName": "Pomegranate",
        "description": "Pomegranate is a nutrient-rich fruit prized for its vibrant red seeds, known as arils, which are juicy, sweet, and slightly tart. It is often eaten fresh, added to salads, or used in juices, sauces, and desserts. Pomegranate is a powerhouse of antioxidants, vitamins (especially vitamin C), and fiber, contributing to numerous health benefits, including improved heart health and reduced inflammation. Its bold flavor and visual appeal make it a favorite in both savory and sweet dishes across various cuisines.",
        "price": 100,
        "stock": 200,
        "images": [
            "https://i.ibb.co.com/zZW0YRs/4.png"
        ],
        "categoryId": "6751516f9c52879c1fde6558",
        "isDeleted": false,
        "createdAt": "2024-12-05T07:26:19.680Z",
        "updatedAt": "2024-12-05T07:26:19.680Z"
    }
    ]
    return (
        <div className='my-16 md:my-32 '>
            <div className='relative text-center'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className=' flex  px-[12px] py-[4px] items-start text-green sub-heading-2 md:sub-heading-1 rounded-lg' style={{ backgroundColor: 'rgba(116, 155, 63, 0.10)' }}>Our Products</h2>
                    <p className='text-black heading-2 m-0 mt-5  '>Related Products</p>
                    <p className='text-grey-100 body-3 mt-4'>We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
                </div>
            </div>
            <div className='mt-6 lg:mt-8 flex justify-start items-start flex-wrap gap-5 lg:gap-6 '>

            {data?.map((productItem, index) =>  <ProductCard key={index} productData={productItem} />)}
        </div>
        </div>)
}