import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addtostoredDB } from '../../utility/addtoDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const handleMarkasRead =id=>{
    addtostoredDB(id);
MySwal.fire({
  title: "Thank You!",
  text: "Book Already Marked!",
  icon: "success"
})


}

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const bookId = parseInt(id);
    
    
    const singleBook = data?.find(book => book.bookId === bookId);

    if (!singleBook) {
        return <div className="text-center p-10">Book not found</div>;
    }

    const { bookName, image, author, rating, category } = singleBook;

    return (
       
        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 p-5 md:p-10'>
            
           
            <div className='bg-gray-200 p-10 md:p-20 rounded-2xl w-full lg:w-1/2 flex justify-center'>
                <img 
                    className='max-h-[500px] w-auto object-contain shadow-lg' 
                    src={image} 
                    alt={bookName} 
                />
            </div>

            {/* Content Container: Adjusted width and text alignment */}
            <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                <h2 className='text-white text-3xl md:text-5xl lg:text-6xl font-bold'>
                    {bookName}
                </h2>
                
                <div className='mt-4 space-y-3'>
                    <p className='text-white-700 text-xl font-semibold'>By: {author}</p>
                    <hr className='border-white-300' />
                    <p className='text-white-600 text-lg'><span className='font-bold'>Category:</span> {category}</p>
                    <hr className='border-gray-300' />
                    <p className='text-white-600 text-lg'><span className='font-bold'>Rating:</span> {rating} / 5</p>
                    
                    <div className='pt-5 flex gap-4'>
                        <button onClick={()=>handleMarkasRead(id)} className='btn btn-outline btn-info px-8'>Mark as Read</button>
                        <button className='btn btn-accent px-8'>Add to Wishlist</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BookDetails;