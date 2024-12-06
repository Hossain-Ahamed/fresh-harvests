import React from 'react';
import blogimg1 from '../../../../assets/images/blog1.png';
import blogimg2 from '../../../../assets/images/blog2.png';
import blogimg3 from '../../../../assets/images/blog3.png';
import TitleBar from '../TitleBar';
import { Link } from 'react-router-dom';
const Blog = () => {
    const data = [
        {
            img: blogimg1,
            date: 'May 23, 2024',
            text: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now"
        },
        {
            img: blogimg2,
            date: 'May 23, 2024',
            text: "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads"
        },
        {
            img: blogimg3,
            date: 'May 23, 2024',
            text: "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week"
        },
    ]
    return (
        <div id='#blog' className="px-4 md:px-16 xl:px-32 mt-16 lg:mt-40  mx-auto">
            <TitleBar
                sectionName="Our Blog"
                heading="Fresh Harvest Blog"
                message="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
            />
            <div className='flex justify-center flex-wrap gap-6 mt-6 lg:mt-10 '>
                {
                    data.map((blogItem, _idx) => <BlogCard key={_idx} blogData={blogItem} />)
                }
            </div>


        </div>
    );
};

export default Blog;

const BlogCard = ({ blogData }) => {
    return (
        <div >
            <div className='w-full md:w-80 '>
                <img src={blogData.img} alt="" className='w-fit h-fit' />
                <p className='mt-6 body-2 text-grey-100'>{blogData.date}</p>
                <p className='mt-1 heading-6 text-black'>{blogData.text}</p>
                <Link className='flex justify-start items-center gap-2 text-primary button-1 mt-4'>
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clip-path="url(#clip0_3594_9618)">
                            <path d="M0.961689 7.37698C1.02716 7.36635 1.09341 7.36145 1.1597 7.36231H12.4474L12.2013 7.24783C11.9607 7.13396 11.7418 6.97898 11.5544 6.78991L8.3891 3.62456C7.97221 3.22661 7.90217 2.58642 8.2231 2.10772C8.59662 1.5976 9.31294 1.48684 9.82309 1.86037C9.8643 1.89056 9.90348 1.92348 9.94029 1.95889L15.6642 7.68285C16.1116 8.12968 16.112 8.85451 15.6651 9.30184C15.6649 9.30212 15.6645 9.30244 15.6642 9.30273L9.94029 15.0267C9.4926 15.4731 8.76777 15.4721 8.3213 15.0244C8.28617 14.9892 8.25337 14.9517 8.2231 14.9122C7.90217 14.4335 7.97221 13.7933 8.3891 13.3954L11.5487 10.2243C11.7167 10.0561 11.9098 9.91516 12.1211 9.80644L12.4646 9.65189H1.2227C0.637891 9.67361 0.124809 9.26509 0.014945 8.69027C-0.0862617 8.06618 0.337599 7.47822 0.961689 7.37698Z" fill="#FF6A1A" />
                        </g>
                        <defs>
                            <clipPath id="clip0_3594_9618">
                                <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </Link>
            </div>
        </div>
    )
}