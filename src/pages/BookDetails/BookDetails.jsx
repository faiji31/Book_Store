import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const bookId=parseInt(id)
    const singleBook =data.find(book=>book.bookId===bookId);
   const {bookName,image,author,yearofPublishing,rating,category}=singleBook;
    return (
        <div className='flex justify-around p-10'>
           <div className='bg-gray-300 p-20 rounded'>
             <img className='size-140 w-auto' src={image} alt="" />
           </div>
            <div className='bg-gray-300 items-center p-20 w-[600px] rounded'>
                <h2 className='text-black text-6xl font-bold'>{bookName}</h2>
                <div className=' '>
                    <p className='text-black text-1xl mt-5  font-bold'>Author Name: {author}</p>
                    <p className='text-black '>Category: {category}</p>
                       <p className='text-black '>Rating: {rating}</p>
                </div>
            </div>
            
        </div>
    );
};

export default BookDetails;