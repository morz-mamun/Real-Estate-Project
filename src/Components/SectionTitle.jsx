import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div className=' w-1/2 md:w-4/12 mx-auto text-center my-5 space-y-4'>
            <h3 className='md:text-3xl font-bold uppercase border-b-2 border-red-600  py-3'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;