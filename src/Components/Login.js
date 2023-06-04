import React, { useEffect, useState } from 'react';
import P1 from '../images/n2.jpg';
import {Link, useNavigate,useLocation } from "react-router-dom";
import { FirebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  initializeApp(FirebaseConfig);
  const navigate =useNavigate();
  const location = useLocation();
  const page =location.pathname==='/login' ? true:false;
  const [email,setEmail]=useState('');
  const [password,setpassword]=useState('');
  const [isuserexist,setuserexist]=useState(false);
  const [isEmailUsed,setIsEmailUsed]=useState(false);
  const [emailvalid, setemailvalid] = useState(true);
  const [passwordvalid, setpasswordvalid] = useState(true);
  const auth= getAuth();
   const validation = (fieldName, value) => {
     switch (fieldName) {
       case "email":
         return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
       case "password":
         return value.length >= 6;
       default:
         break;
     }
   };



  const ctaClickHandler
    = (e) => {
    e.preventDefault();

if (!validation("email", email) || !validation("password", password)) {
  setemailvalid(validation("email", email));
  setpasswordvalid(validation("password", password));
  return;
}

    if (page) {
      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            navigate("/dashboard");
          }
        })
        .catch((error) => setuserexist(true));
      /* user not found */
    }else{
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            navigate("/dashboard");
          }
        })
        .catch((error) => setIsEmailUsed(true));
    }
    
  };
useEffect(()=>{
setIsEmailUsed(false);
setuserexist(false);
},[location])
  const emailonchange=(e)=>{
setEmail(e.target.value)
  }
  const passwordonchange = (e) => {
     setpassword(e.target.value);
  };
   
    return (
      <div
        style={{
          backgroundImage: `URL(${P1})`,
        }}
        className=" h-screen "

      >
        <div className='flex'>
          <div class="pr-8 md:p-2 shadow-rose-700 shadow-lg justify-center md:w-96 h-1/2 mx-auto bg-black mt-16 flex flex-col  w-full md:py-8 pt-8  rounded-lg ">
            <p class="leading-relaxed mb-5 text-white text-3xl px-3">
              {page ? "Sign-In" : "Register Now"}
            </p>
            <div class="relative mb-4"></div>
            <div class="relative mb-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={emailonchange}
                name="email"
                placeholder="Email"
                class="w-full md:w-72 ml-3  bg-transparent rounded border border-red-300 focus:border-rose-950 focus:ring-2 focus:ring-red-200 text-base outline-none text-white py-1  leading-8 transition-colors duration-200 ease-in-out placeholder-white"
              />
             {!emailvalid && <p className="text-red-700 ml-3 font-bold">Email Is Invalid</p>}
            </div>
            <div class="relative mb-4">
              <input
                type="password"
                id="password"
                value={password}
                onChange={passwordonchange}
                name="password"
                placeholder="password"
                class="w-full md:w-72 ml-3  bg-transparent rounded border border-red-300 focus:border-rose-950 focus:ring-2 focus:ring-red-200 text-base outline-none text-white py-1  leading-8 transition-colors duration-200 ease-in-out placeholder-white"
              />
            {!passwordvalid &&  <p className="text-red-700 ml-3 font-bold">Password Is Invalid</p>}
            </div>
            <button
              class="text-white bg-rose-700 shadow-lg shadow-rose-900 border-0 py-2 px-1 focus:outline-none hover:bg-transparent rounded text-lg md:w-40 ml-3"
              onClick={ctaClickHandler}
            >
              {page ? "Log-In" : "Register Now"}
            </button>
         {/*    {page && (
              <div className="form-check ml-3 pt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label text-white"
                  htmlFor="flexCheckDefault"
                >
                  Remember Me
                </label>
              </div>  
                
            )} */}
            {isuserexist && (
              <p className="text-rose-700 font-extrabold ml-3 pt-3">
                User doesnt exist
              </p>
            )}
            {isEmailUsed && (
              <p className="text-rose-700 font-extrabold   ml-3 pt-3">
                Email Already In Used.
                <br /> Go to Sign-In
              </p>
            )}
            <p className="text-base text-white ml-3 pt-6">
              {page ? "new to tetflix?    " : "Existing User?    "}
              <Link
                to={page ? "/register" : "/login"}
                href="#"
                className=" text-base text-rose-400 font-bold"
              >
                {page ? "Sing-up Now" : "Log-in Now"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;