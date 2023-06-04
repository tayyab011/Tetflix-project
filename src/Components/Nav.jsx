import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from './Api';

const Nav = () => {
  

    return (
      <header class="text-white bg-black body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div class="flex title-font font-medium  items-center text-rose-600 mb-4 md:mb-0">
            <Link to={"/dashboard"} class="ml-2 cursor-pointer text-xl ">
              Tetflix
            </Link>
          </div>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to={"/discover"}
              class="mr-3 text-sm hover:scale-125 md:mr-7 hover:text-rose-500 cursor-pointer"
            >
              Discover
            </Link>
            <Link
              to={"/trend"}
              class="mr-3 text-sm hover:scale-125 md:mr-7 hover:text-rose-500 cursor-pointer"
            >
              Trending
            </Link>
            <Link
              to={"/movie"}
              class="mr-3 text-sm hover:scale-125 md:mr-7 hover:text-rose-500 cursor-pointer"
            >
              Movies
            </Link>
            <Link
              to={"/upcoming"}
              class="mr-3 text-sm hover:scale-125 md:mr-7 hover:text-rose-500 cursor-pointer"
            >
              Upcoming
            </Link>
            <Link
              to={"/top-rated"}
              class="mr-3 text-sm hover:scale-125 md:mr-3 hover:text-rose-500 cursor-pointer"
            >
              Popular
            </Link>
            <Link
              to={"/"}
              class=" btn mt-3 md:mt-0 rounded-lg px-4 py-1 mr-3 text-sm hover:bg-black  text-white bg-rose-600 shadow-lg shadow-rose-800 cursor-pointer"
            >
            Log out
            </Link>
          </nav>
        </div>
      </header>
    );
};

export default Nav;