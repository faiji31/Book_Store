import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredbook } from "../../utility/addtoDB";

import SingleBook from "../../pages/SingleBook/SingleBook";

const ReadList = () => {
      const [readList,setReadList]=useState([]);
      const data = useLoaderData();
      console.log(data);

      useEffect(()=>{
            const  stroredbookData = getStoredbook();
            const convertedstorebooData = stroredbookData.map(id=>parseInt(id));
            const myReadList =data.filter(book=>convertedstorebooData.includes(book.bookId));
            setReadList(myReadList);
      },[])
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I Read {readList.length}</h2>
          {
            readList.map(b=><SingleBook key={b.bookId} single={b}></SingleBook>)
          }
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
