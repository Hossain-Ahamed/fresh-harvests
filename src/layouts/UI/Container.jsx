import React from 'react';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
    return (
        <div className='h-full w-full max-w-[1440px] mx-auto'>
            {children}
        </div>
    );
};

export default Container;