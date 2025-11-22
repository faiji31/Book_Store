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
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
  );
};

export default SingleBook;