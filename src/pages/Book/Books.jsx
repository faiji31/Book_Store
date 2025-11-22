
import SingleBook from '../SingleBook/SingleBook';
import { Suspense } from 'react';

const Books = ({data}) => {
   


    return (
        <div>
            <h1 className='text-3xl text-center font-extrabold p-6'>Books</h1>
        
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 object-cover'>
             {
              data.map((single)=> <SingleBook key={single.bookId} single={single}></SingleBook>)
            }
              
            </div>  
         
         
        </div>
    );
};

export default Books;  