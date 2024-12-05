import React from 'react';

const Container = ({children}) => {
    return (
        <div className='h-full w-full max-w-[1280px] mx-auto'>
        {children}
        </div>
    );
};

export default Container;