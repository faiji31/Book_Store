import React from 'react';

const SingleBook = ({ data }) => {

  if (!Array.isArray(data)) {
    return <p className="text-center text-red-500">Invalid data format!</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {data.map((book) => (
        <div 
          key={book.bookId} book={book}
          className="border p-4 shadow-md rounded-md"
        >
          <h2 className="text-xl font-bold">{book.bookName}</h2>
          <p className="text-sm text-gray-500">{book.author}</p>
          <p className="mt-2">{book.category}</p>
          <p className="mt-2 font-semibold">Rating: {book.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default SingleBook;
