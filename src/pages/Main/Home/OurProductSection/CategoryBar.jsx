import React from 'react';

const CategoryBar = ({ categories, selectedCategory, setSelectedCategory }) => {

    return (
        <div className='mt-4 flex justify-center gap-3 lg:gap-6'>
            {
                categories && Array.isArray(categories) && [{"id": "all","categoryName": "All"}, ...categories].map((i, _idx) =>
                    <button key={_idx}
                        className={`px-4 lg:px-6 py-2 lg:py-3 button-4 lg:button-2  border-[1px] border-grey-50 rounded-[4px] lg:rounded-lg  ${i?.categoryName === selectedCategory.categoryName ? 'bg-green text-white' : 'bg-[#FFF] text-grey-80'}`}
                        onClick={() => setSelectedCategory(i)}
                    >{i?.categoryName}</button>)
            }
        </div>
    );
};

export default CategoryBar;