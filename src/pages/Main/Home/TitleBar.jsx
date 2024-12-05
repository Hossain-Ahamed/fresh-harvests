import React from 'react';
import leaf from '../../../assets/images/leaf.png'
const TitleBar = ({ sectionName, heading, message }) => {
    return (
        <div className='relative text-center'>
            <img src={leaf} alt="" className='bg-transparent absolute h-[40px] lg:h-[84px] w-[30px] lg:[w-70px] top-2 lg:top-20  -rotate-[40.1deg]' />
            <img src={leaf} alt="" className='bg-transparent absolute h-[40px] lg:h-[67px] w-[30px] lg:[w-51px] right-3 -top-[40px] lg:-top-[67px] -rotate-90' />
            <div className='flex flex-col items-center justify-center'>
                <h2 className=' flex  px-[12px] py-[4px] items-start text-green sub-heading-2 md:sub-heading-1 rounded-lg' style={{ backgroundColor: 'rgba(116, 155, 63, 0.10)' }}>{sectionName}</h2>
                <p className='text-black heading-2 m-0 mt-5  '>{heading}</p>
                <p className='text-grey-100 body-3 mt-4'>{message}</p>
            </div>
        </div>
    );
};

export default TitleBar;