import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredbook } from "../../utility/addtoDB";



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
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
