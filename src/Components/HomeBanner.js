import React,{useState} from 'react';
import p from '../images/n2.jpg';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    
  

    return (
      <div>
        <div
          className="w-full  h-screen object-cover  flex bg-opacity-5  "
          style={{ backgroundImage: `URL(${p})` }}
        >
          <div
            className="form-control mx-auto justify-center bg-opacity-20 z-20 md:justify-center"
            id="font"
          >
            <h1 className="text-center text-4xl text-white font- bold spacing">
              Unlimited movies TV
              <br />
              shows and more.
            </h1>
            <p className="text-center text-xl text-white pt-5">
              Watch anywhere.Cancel anytime
            </p>
            <p className="text-center  text-xs text-white pb-5 pt-5">
              Ready to watch.Enter Your Email to Create or restart your
              membership
            </p>

            <Link to={"/login"}>
              <div className='flex'>
                <button className="btn mx-auto text-white bg-rose-700 shadow-lg shadow-rose-900 px-16 hover:bg-transparent">
                  Get Started
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default HomeBanner;

/*  */