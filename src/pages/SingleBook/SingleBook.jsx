import React from 'react';

const SingleBook = ({single}) => {
  const {bookName,author,image}= single;

  return (
   <div className="card bg-white shadow-sm">
  <figure className='bg-gray-300 rounded p-5 m-5'>
    <img className='w-[125px] h-[166px] m-10 '
      src={image}
      alt="Shoes" />
  </figure>
  <div className="flex justify-between items-center gap-5 p-5">
    <button className='btn text-green-400 bg-gray-200 rounded-lg font-bold border-0'>Young Adult</button>
    <button className='btn  text-green-400 bg-gray-200 rounded-lg font-bold border-0'>Identity</button>
    </div>
    <div className="m-5 p-5 space-y-2">
      <h2 className='text-2xl text-black font-bold'>{bookName}</h2>
      <p className='text-black font-semibold'>By:{author}</p>
      
      
    </div>
  
</div>
  );
};

export default SingleBook;