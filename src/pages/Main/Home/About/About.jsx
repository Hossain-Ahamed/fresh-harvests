import React from 'react';
import manthumbsup from '../../../../assets/images/man_thumsup.png'
import leaf from '../../../../assets/images/leaf.png'
import icon from '../../../../assets/images/icon.png';
import speenach from '../../../../assets/images/speenach.png'
import marks from '../../../../assets/svg/marks.svg'
const About = () => {
    return (
        <div id='about-us' className='mt-[70px] lg:mt-28 grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-24 gap-x-8 gap-y-6'>
            <div className="w-full relative">
                <img src={leaf} alt="" className='bg-transparent absolute h-[40px] lg:h-[80px] w-[40px] lg:[w-80px] top-2 lg:top-16 right-7 lg:right-14 -rotate-90' />
                <img src={manthumbsup} alt="" className='w-full h-fit' />

                <div className='absolute top-1/2  lg:top-2/3  left-1/3 lg:left-1/2'>
                    <div className='shadow rounded-md flex gap-1 lg:gap-2 button-2 items-center bg-white text-black px-2 lg:px-3 py-1 lg:py-2'>
                        <img src={icon} alt="" className='h-4 w-4 lg:h-7 lg:w-7' />
                        <div className='flex-grow'>
                            <p className='button-3'>Fresh Harvests</p>
                        </div>

                    </div>
                    <div className=' absolute -right-5 lg:-right-6 mt-2'>
                        <div className='relative bg-white w-[82px] lg:w-[150px]  h-fit lg:h-[192px] px-1.5 lg:px-1.5 py-2 lg:py-2 rounded-xl lg:rounded-[20px] shadow-[0px_4px_20px_0px_rgba(9,43,94,0.06)]'>
                            <div aria-label='card-image' className='bg-grey-20 flex justify-center items-center rounded-[9px] lg:rounded-2xl'>
                                <img src={speenach} className='w-14 h-14 lg:w-24 lg:h-24' />
                            </div>
                            <div aria-label='card-body' className='mt-2 lg:mt-2 flex flex-col items-center'>
                                <p className='text-black  text-[9px] font-[500]'>Mushroom</p>
                                <p className='text-[#4A4A52] text-[9.6px] font-[400]'>$2.3/kg</p>
                            </div>

                            <div aria-label='card-footer' className='mt-1.5 lg:mt-3 mb-[3px] lg:mb-1.5'>
                                <button className='w-full border border-grey-50  py-1.5  rounded lg:rounded-lg text-[9.6px] font-[400] text-black '>Add to cart</button>
                            </div>
                            <div className='absolute -top-7 -right-5'>
                                <img src={marks} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-col justify-center">
                <div>
                    <h2 className=' inline  px-[12px] py-[4px] items-start text-green sub-heading-2 md:sub-heading-1 rounded-lg' style={{ backgroundColor: 'rgba(116, 155, 63, 0.10)' }}>About us</h2>
                    <p className='text-black heading-2 m-0 mt-5  '>About Fresh Harvest</p>
                    <p className='text-grey-100 body-3 mt-4'>Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
               </div>
            </div>
        </div>
    );
};

export default About;