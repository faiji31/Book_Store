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
            <div className='bg-gray-300 items-center p-20'>
                <h2 className='text-black text-6xl font-bold'>{bookName}</h2>
            </div>
            
        </div>
    );
};

export default BookDetails;