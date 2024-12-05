import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import ProductCard from '../../../Shared/PorductCard/ProductCard';

const OurProductSection_ProductsContainer = ({ selectedCategory }) => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            // const res = await axiosSecure.get('/products');
            // return res?.data;
            const res = {
                "success": true,
                "message": "Products retrieve successfully!",
                "data": [
                    {
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
                    },
                    {
                        "id": "6751563d1cdb919fe028cf0d",
                        "productName": "Kiwi",
                        "description": "Kiwi is a small, nutrient-packed fruit with a fuzzy brown skin and bright green or golden flesh dotted with tiny black seeds. It has a sweet and tangy flavor, making it a refreshing snack or addition to salads, smoothies, and desserts. Kiwi is an excellent source of vitamin C, fiber, and antioxidants, supporting immunity and digestion. Its vibrant color and unique taste also make it a popular choice for garnishing dishes and beverages.",
                        "price": 70,
                        "stock": 400,
                        "images": [
                            "https://i.ibb.co.com/WD035Hb/18.png"
                        ],
                        "categoryId": "6751516f9c52879c1fde6558",
                        "isDeleted": false,
                        "createdAt": "2024-12-05T07:29:01.734Z",
                        "updatedAt": "2024-12-05T07:29:01.734Z"
                    },
                    {
                        "id": "675157591cdb919fe028cf0e",
                        "productName": "Mustard",
                        "description": "Mustard greens are leafy vegetables from the mustard plant, known for their peppery and slightly bitter flavor. They are commonly used in salads, stir-fries, soups, and stews, as well as in pickling and traditional dishes like Indian saag or Southern-style greens. Mustard greens are rich in vitamins A, C, and K, along with fiber and antioxidants, making them a highly nutritious choice. Their bold taste and tender texture add depth to a variety of savory dishes.",
                        "price": 30,
                        "stock": 200,
                        "images": [
                            "https://i.ibb.co.com/dp0b86c/3.png"
                        ],
                        "categoryId": "6751569e0e539396658e60a9",
                        "isDeleted": false,
                        "createdAt": "2024-12-05T07:33:45.060Z",
                        "updatedAt": "2024-12-05T07:33:45.060Z"
                    },
                    {
                        "id": "675158821cdb919fe028cf11",
                        "productName": "Mushrooms ",
                        "description": "Mushrooms are a type of edible fungus widely used as a vegetable in cooking for their earthy flavor and meaty texture. They come in various varieties, including button, shiitake, and portobello, and are versatile in dishes such as soups, stir-fries, pasta, and pizzas. Mushrooms are low in calories and rich in nutrients like B vitamins, selenium, and antioxidants. They are also valued for their umami taste, enhancing the flavor profile of many cuisines around the world.",
                        "price": 300,
                        "stock": 200,
                        "images": [
                            "https://i.ibb.co.com/v4KGBK0/1.png"
                        ],
                        "categoryId": "6751584feaeaa5cc21bbe21b",
                        "isDeleted": false,
                        "createdAt": "2024-12-05T07:38:42.860Z",
                        "updatedAt": "2024-12-05T07:38:42.860Z"
                    },
                    {
                        "id": "6751818c1cdb919fe028cf14",
                        "productName": "Cauliflower",
                        "description": "Cauliflower is a versatile cruciferous vegetable known for its mild, slightly nutty flavor and firm texture. It can be eaten raw, roasted, steamed, or mashed, and is often used as a low-carb substitute for rice, pizza crust, or potatoes. Rich in vitamins C and K, fiber, and antioxidants, cauliflower supports immune health and digestion. Its adaptability and health benefits make it a popular ingredient in a wide range of global cuisines.",
                        "price": 20,
                        "stock": 200,
                        "images": [
                            "https://i.ibb.co.com/WD035Hb/18.png"
                        ],
                        "categoryId": "6751584feaeaa5cc21bbe21b",
                        "isDeleted": false,
                        "createdAt": "2024-12-05T10:33:48.356Z",
                        "updatedAt": "2024-12-05T10:33:48.356Z"
                    },
                    {
                        "id": "6751823c1cdb919fe028cf15",
                        "productName": "Eggplant",
                        "description": "Eggplant, also known as aubergine, is a nutrient-rich vegetable with a spongy texture and mild, slightly bitter flavor. It comes in various shapes and colors, including deep purple, white, and striped varieties. Eggplant is versatile in cooking, commonly roasted, grilled, fried, or used in dishes like ratatouille, baba ghanoush, and curries. It is low in calories and high in fiber, antioxidants, and vitamins, making it a healthy addition to meals. Its ability to absorb flavors makes it a favorite in many cuisines worldwide.",
                        "price": 50,
                        "stock": 500,
                        "images": [
                            "https://i.ibb.co.com/zZW0YRs/4.png"
                        ],
                        "categoryId": "6751584feaeaa5cc21bbe21b",
                        "isDeleted": false,
                        "createdAt": "2024-12-05T10:36:44.330Z",
                        "updatedAt": "2024-12-05T10:36:44.330Z"
                    },
                    {
                        "id": "675182fa1cdb919fe028cf16",
                        "productName": "Snap peas",
                        "description": "Snap peas are a crisp and sweet variety of pea, known for their edible pods and seeds. They can be enjoyed raw as a snack, added to salads, or lightly cooked in stir-fries and side dishes. Snap peas are rich in vitamins A, C, and K, as well as fiber and antioxidants, making them a nutritious and low-calorie option. Their satisfying crunch and natural sweetness make them a popular choice in both raw and cooked dishes.",
                        "price": 70,
                        "stock": 1000,
                        "images": [
                            "https://i.ibb.co.com/v4KGBK0/1.png"
                        ],
                        "categoryId": "6751584feaeaa5cc21bbe21b",
                        "isDeleted": false,
                        "createdAt": "2024-12-05T10:39:54.242Z",
                        "updatedAt": "2024-12-05T10:39:54.242Z"
                    },
                    {
                        "id": "675183721cdb919fe028cf17",
                        "productName": "Onion",
                        "description": "Onions are a staple vegetable known for their pungent flavor and aroma, which mellows and sweetens when cooked. They come in various types, including red, white, yellow, and green onions, each with unique uses in cooking. Onions are versatile and used in countless dishes, from soups and stews to salads and stir-fries. They are rich in antioxidants, vitamins C and B6, and compounds that may support heart health and immunity. Onions add depth and flavor to a wide range of cuisines worldwide.",
                        "price": 120,
                        "stock": 600,
                        "images": [
                            "https://i.ibb.co.com/WD035Hb/18.png"
                        ],
                        "categoryId": "6751584feaeaa5cc21bbe21b",
                        "isDeleted": false,
                        "createdAt": "2024-12-05T10:41:54.907Z",
                        "updatedAt": "2024-12-05T10:41:54.907Z"
                    },
                    {
                        "id": "675186ae1cdb919fe028cf18",
                        "productName": "Caesar salad",
                        "description": "Caesar salad is a classic salad made with crisp romaine lettuce, crunchy croutons, and Parmesan cheese, all tossed in a creamy Caesar dressing. The dressing typically features garlic, lemon juice, Dijon mustard, Worcestershire sauce, egg yolk, olive oil, and anchovies, giving it a rich, tangy flavor. Often garnished with additional cheese or grilled chicken, Caesar salad is a popular choice for a light meal or a flavorful side dish.",
                        "price": 120,
                        "stock": 200,
                        "images": [
                            "https://i.ibb.co.com/h9JMpLm/2.png"
                        ],
                        "categoryId": "6751569e0e539396658e60a9",
                        "isDeleted": false,
                        "createdAt": "2024-12-05T10:55:42.882Z",
                        "updatedAt": "2024-12-05T10:55:42.882Z"
                    },
                    {
                        "id": "675187201cdb919fe028cf19",
                        "productName": "Corn salad",
                        "description": "Corn salad is a refreshing dish made with sweet corn kernels as the main ingredient, often mixed with fresh vegetables like tomatoes, cucumbers, onions, and bell peppers. It's typically dressed with lime juice, olive oil, herbs, and seasonings, creating a tangy and flavorful blend. This versatile salad can be served as a side dish, appetizer, or light meal, and is loved for its vibrant colors, crisp textures, and sweet-savory taste.",
                        "price": 150,
                        "stock": 50,
                        "images": [
                            "https://i.ibb.co.com/zZW0YRs/4.png"
                        ],
                        "categoryId": "6751569e0e539396658e60a9",
                        "isDeleted": false,
                        "createdAt": "2024-12-05T10:57:36.624Z",
                        "updatedAt": "2024-12-05T10:57:36.624Z"
                    },
                    {
                        "id": "675187911cdb919fe028cf1a",
                        "productName": "Fruit salad",
                        "description": "Fruit salad is a refreshing and colorful dish made with a mix of fresh fruits like apples, bananas, oranges, grapes, berries, and melons. It can be served plain or enhanced with a dressing made from honey, lime juice, yogurt, or cream for added flavor. Loved for its natural sweetness and variety, fruit salad is a healthy and versatile choice for desserts, snacks, or side dishes, offering a rich source of vitamins, antioxidants, and hydration.",
                        "price": 170,
                        "stock": 90,
                        "images": [
                            "https://i.ibb.co.com/v4KGBK0/1.png"
                        ],
                        "categoryId": "6751569e0e539396658e60a9",
                        "isDeleted": false,
                        "createdAt": "2024-12-05T10:59:29.218Z",
                        "updatedAt": "2024-12-05T10:59:29.218Z"
                    }
                ]
            }
            return res.data;
        },


    });


    if (isLoading || error) return <></>

    return (
        <div className='mt-6 lg:mt-8 flex justify-start items-start flex-wrap gap-5 lg:gap-6 '>

            {data?.map((productItem, index) => {

                if (
                    selectedCategory.id === 'all' ||
                    selectedCategory.id === productItem.categoryId
                ) {
                    return <ProductCard key={index} productData={productItem} />;
                }
                return null;
            })}
        </div>
    );

};

export default OurProductSection_ProductsContainer;