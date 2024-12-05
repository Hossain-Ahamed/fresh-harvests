import React, { useState } from 'react';
import TitleBar from '../TitleBar';
import customer from '../../../../assets/images/customer.jpeg';
import leaf from '../../../../assets/images/leaf.png';
import marks from '../../../../assets/svg/marks.svg'
const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            text: `"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."`,
            image: customer,
        },
        {
            id: 2,
            text: `"Fresh Harvest has transformed the way I shop for groceries. The produce is fresh, the delivery is quick, and the customer service is top-notch. Highly recommend!"`,
            image: customer,
        },
        {
            id: 3,
            text: `"The fruits and vegetables I receive from Fresh Harvest are the best I've ever had. They are always ripe, flavorful, and of excellent quality. Thank you for such an amazing service!"`,
            image: customer,
        },
    ];

    return (
        <div className="px-4 md:px-16 xl:px-32 mt-16 lg:mt-40 max-w-[1012px] mx-auto">
            <TitleBar
                sectionName="Testimonial"
                heading="What Our Customers Say"
                message="Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:"
            />
            <Review reviews={reviews} />
        </div>
    );
};

export default Testimonial;

const Review = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative">
            <img
                src={leaf}
                alt=""
                className="bg-transparent absolute h-[40px] lg:h-[84px] w-[30px] lg:w-[70px] -top-10 right-7 -rotate-90"
            />

            <div className="mt-10 lg:mt-20">

                <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6">

                    <div className="w-full lg:w-1/3 flex justify-center relative">
                    <div className='absolute -top-3 lg:-top-6  right-4 lg:-right-3'>
                                <img src={marks} alt="" className='w-16 h-16'/>
                            </div>
                        <div className="  w-52 lg:w-72 h-72 lg:h-96 rounded-[142px] lg:rounded-[200px] border overflow-hidden">
                            <img
                                src={reviews[currentIndex].image}
                                alt="Customer"
                                className="w-full h-full object-cover"
                            />
                             
                        </div>
                    </div>


                    <div className="w-full lg:w-2/3 flex justify-center items-center">
                        <div className="bg-grey-20 p-5 rounded-lg text-center">
                            <p className="body-3 lg:body-1 text-grey-100"> {reviews[currentIndex].text} </p>
                        </div>
                    </div>
                </div>

                {/* navigate  */}
                <div className="mt-6 flex justify-center space-x-2">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index
                                ? 'bg-green'
                                : 'bg-grey-50'
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
}