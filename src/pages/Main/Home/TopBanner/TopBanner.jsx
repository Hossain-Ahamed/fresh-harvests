import React from 'react';
import topbanner from '../../../../assets/images/topbanner.png'
import arrowIcon from '../../../../assets/images/arrow-icon.png'
import salad from '../../../../assets/images/salad.png'
import mblTop from '../../../../assets/images/mblTop.png'


const TopBanner = () => {


    return (
        <div className='relative'>
            <img src={mblTop} alt="" className='w-full h-[800px] block lg:hidden' />
            <img src={topbanner} alt="" className='w-full h-fit hidden lg:block' />
        <div className='heading-2 md:heading-1 max-w-screen absolute top-10 left-5 lg:top-20 lg:left-40'>
        Fresh Fruits <br className='block lg:hidden'></br> and <br className='hidden lg:block'></br> Vegetables
        </div>
        <p className=' text-[#4A4A52] text-[14px] absolute top-40 left-5 lg:top-72 lg:left-40'>At Fresh Harvests, we are passionate about providing you with <br className='block lg:hidden'></br> the freshest <br className='hidden lg:block'></br> and most flavorful fruits and vegetables</p>
        <button className='absolute bottom-52 left-5 lg:bottom-56 lg:left-40 bg-[#FF6A1A] text-white w-[130px] lg:w-[150px] h-[50px] rounded-[8px]'>Shop Now</button>
        <img src={arrowIcon} alt="" className='hidden lg:absolute bottom-44 left-72 w-[55px] h-[40px]'/>
        <div className='absolute bottom-52 left-5 lg:bottom-14 lg:left-[350px]'>
            <div className='flex justify-center items-center gap-5 bg-[#EBEBEB] rounded-[12px] w-[200px] h-[110px] lg:w-[331px] lg:h-[150px]'>
            <div>
                <p className='text-[14px] text-[#176D38] font-medium'>Special Offer</p>
                <p className='text-[16px] lg:text-[28px] text-[#212337] font-medium'>Fresh Salad</p>
                <p className='text-[14px] text-[#176D38]'>Up to <span className='text-[16px] lg:text-[24px] text-[#212337]'>70%</span> <span className='text-[14px] text-[#212337]'>off</span></p>
                <button className='bg-[#176D38] w-[68px] h-[15px] lg:w-[118px] lg:h-[26px] rounded-[35px] text-[6px] lg:text-[12px] text-white'>CODE :<span className='text-[#FAC714]'> FRESH25</span></button>
            </div>
            <div>
            <img src={salad} alt="" className='w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]'/>
            </div>
            </div>
        </div>
        </div>
    );
};

export default TopBanner;