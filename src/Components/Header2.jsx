import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header2 = () => {
  const navigate = useNavigate();

  const onclick = (e) => {
    e.preventDefault();

    navigate("/login");
  };
  return (
    <div className=" bg-black shadow-lg flex " id="navbar">
      

      <Link to={'/'}>
        <button type="submit" className="btn bg-rose-700 shadow-sm mx-auto justify-center px-8 text-white shadow-rose-900 hover:bg-black">
        
          
          Back to Home
        
      </button>
      </Link>
    </div>
  );
};

export default Header2;
