import React from 'react';
import fruits from '../../../../assets/images/fruits.png';
import bgImage from '../../../../assets/images/banner_background_white.jpeg';

const BottomBanner = () => {
    return (
        <div
            className="mt-[70px] lg:mt-28 relative w-full bg-cover z-0"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
          
            <div className="py-24 px-5 lg:px-32 relative z-10">
                <h2
                    className="inline px-[12px] py-[4px] items-start text-green sub-heading-2 md:sub-heading-1 rounded-lg"
                    style={{ backgroundColor: 'rgba(116, 155, 63, 0.10)' }}
                >
                    Special Offer
                </h2>
                <p className="text-black heading-2 lg:heading-1 m-0 mt-3">
                    Seasonal Fruit Bundle
                </p>
                <p className="text-black heading-4 lg:heading-2 m-0 mt-3">
                    Discount up to <span className="text-primary">80% OFF</span>
                </p>

                <div className="mt-8 max-w-lg flex justify-start items-center gap-4 lg:gap-6 ">
                    <ClockButton value="03" title="Days" />
                    <ClockButton value="18" title="Hour" />
                    <ClockButton value="54" title="Min" />
                    <ClockButton value="21" title="Second" />
                </div>
                <div className='mt-8'>
                    <p className='inline text-white bg-green px-8 py-4 heading-5 rounded-full ' >
                        Code: <span className='text-[#FAC714]'>FRUIT28</span>
                    </p>

                </div>
            </div>

            <div className="hidden lg:block absolute lg:right-8 bottom-7 lg:bottom-0 z-0">
                <img src={fruits} alt="Fruits" className="w-[627px] h-auto" />
            </div>
        </div>
    );
};

export default BottomBanner;

const ClockButton = ({ value, title }) => {
    return (
        <div className="rounded-lg lg:rounded-xl bg-white shadow-[0px_4px_20px_0px_rgba(9,43,94,0.06)] flex flex-col items-center justify-center flex-grow px-4 py-4 lg:px-6 lg:py-6">
            <div>
                <p className="text-center sub-heading-3 lg:sub-heading-3">{value}</p>
                <p className="text-center body-4 lg:body-2 mt-2.5">{title}</p>
            </div>
        </div>
    );
};
