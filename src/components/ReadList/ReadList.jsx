import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredbook } from "../../utility/addtoDB";
import SingleBook from "../../pages/SingleBook/SingleBook";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sortType, setSortType] = useState(""); // Stores the label (e.g., "Ratings")
  const data = useLoaderData();

  useEffect(() => {
    const storedbookData = getStoredbook();
    // Ensure data exists before filtering
    if (data && storedbookData) {
      const convertedStoreData = storedbookData.map((id) => parseInt(id));
      const myReadList = data.filter((book) =>
        convertedStoreData.includes(book.bookId)
      );
      setReadList(myReadList);
    }
  }, [data]); // Adding data as dependency is safer

  const handlesort = (type) => {
    setSortType(type);
    
    // Create a copy of the list to sort
    const sortedList = [...readList];

    if (type === "pages") {
      // Sorting descending (most pages first)
      sortedList.sort((a, b) => b.totalPages - a.totalPages);
    } else if (type === "ratings") {
      // Sorting descending (highest rating first)
      sortedList.sort((a, b) => b.rating - a.rating);
    }

    setReadList(sortedList); // Update the main list state
  };

  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="flex justify-center mb-8">
        <details className="dropdown">
          <summary className="btn m-1 bg-[#23BE0A] text-white">
            Sort By: {sortType ? sortType : "Select"}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a onClick={() => handlesort("pages")}>Number of Pages</a></li>
            <li><a onClick={() => handlesort("ratings")}>Ratings</a></li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-8 space-y-4">
            {readList.length > 0 ? (
              readList.map((book) => (
                <SingleBook key={book.bookId} single={book} />
              ))
            ) : (
              <p className="text-center text-gray-500">No books found in read list.</p>
            )}
          </div>
        </TabPanel>
        
        <TabPanel>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center">Your Wishlist is Empty</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;