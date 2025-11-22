import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import ABout from '../pages/About/ABout';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
          index: true,
          loader:()=>fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json').then(res=>res.json()),
          path:'/',
          Component:Home
      },
      {
        path:'/about',
        Component: ABout
      },
      {
        path:'/bookDetails/:id',
        Component:BookDetails
      }
    ]
  },
]);

