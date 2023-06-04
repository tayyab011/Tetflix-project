import React from 'react';
import { Link, useNavigate } from "react-router-dom";



const Header = () => {
   const navigate = useNavigate();

  const onclick = (e) => {
    e.preventDefault();

    navigate("/login");
  }; 
    return (
      <div className="navbar bg-black shadow-lg " id="navbar">
        <div className="navbar-start">
          <div className="dropdown"></div>
          <Link
            to={"/"}
            className=" normal-case text-3xl shadow-2xl text-rose-900 font-bold"
          >
            TETFLIX
          </Link>
        </div>
        <div className="navbar-end">
        

          <button type="submit" className="navbar-end " value="sign-in">
            <a
              className="btn bg-rose-700 shadow-sm text-white shadow-rose-900 hover:bg-black"
              onClick={onclick}
            >
              Log-in
            </a>
          </button>
        </div>
      </div>
    );
};

export default Header;