import React from 'react';
import bannerImage from '../../assets/books.jpg';


const Banner = () => {
    return (
        <div className='flex justify-between items-center m-8 bg-gray-200 rounded-lg p-16'>
            <div className='items-center p-8'>
                  <h3 className='text-4xl text-black font-extrabold mb-4'>Books to freshen up <br /> your bookshelf</h3>
                  <button className='bg-green-500 p-3 rounded font-semibold border-1 border-black cursor-pointer'>View The List</button>
            </div>
            <div>
                 <img className='w-[300px] h-[300px] p-4 rounded-lg' src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;