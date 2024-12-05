import React from 'react';

const ProductCard = ({ productData }) => {
    return (
        <div className='w-[161px] lg:w-[282px]  h-[212px] lg:h-[360px] px-1.5 lg:px-3 py-2 lg:py-2.5 rounded-xl lg:rounded-[20px] shadow-[0px_4px_20px_0px_rgba(9,43,94,0.06)]'>
            <div aria-label='card-image' className='bg-grey-20 flex justify-center items-center rounded-[9px] lg:rounded-2xl'>
                <img src={productData.images[0]} alt={productData?.productName + '-image'} className='w-28 h-28 lg:w-52 lg:h-52' />
            </div>
            <div aria-label='card-body' className='mt-2 lg:mt-4 flex flex-col items-center'>
                <p className='text-black heading-7 lg:heading-6'>{productData?.productName}</p>
                <p className='text-grey-100 body-4 lg:body-2 mt-1 lg:mt-2'>${productData?.price}/kg</p>
            </div>

            <div aria-label='card-footer' className='mt-1.5 lg:mt-3 mb-[3px] lg:mb-1.5'>
                <button className='w-full border border-grey-50 hover:border-primary py-1.5 lg:py-3 rounded lg:rounded-lg button-5 lg:button-2 hover:bg-primary text-black hover:text-white hover:cursor-pointer'>Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;