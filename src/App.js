import React from 'react';
import './App.css';
import Header from './Components/Header';
import HomeBanner from './Components/HomeBanner';
import Login from './Components/Login';
import Banner from './Components/Banner';
import List from './Components/Listfrech';
import { Route, Router, Routes } from 'react-router-dom';
import Faqs from './Components/Faqs';
import Cardshome from './Components/Cardshome';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Discover from './Components/Discover';
import Trend from './Components/Trend';
import Listfetch from './Components/Listfetch';
import Movie from './Components/Movie';
import Upcoming from './Components/Upcoming';

import Listftch from './Components/Listftch';
import Listft from './Components/Listft';
import Toprated from './Components/Toprated';
import Header2 from './Components/Header2';


function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Header />
              <HomeBanner />
              <Cardshome />
              <Faqs />
               <Footer /> 
            </React.Fragment>
          }
        />
        <Route
          path="/login"
          element={
            <React.Fragment>
              <Header2/>
              <Login />


               <Footer /> 
            </React.Fragment>
          }
        />
        <Route
          path="/register"
          element={
            <React.Fragment>
              <Login />

               <Footer />
            </React.Fragment>
          }
        />

        <Route
          path="/dashboard"
          element={
            <React.Fragment>
              <Nav />
              <Banner />
              <Listfetch />
              <List title="Trending" param="trending" />
              
              <Listftch />
              <Listft />
            <Footer />
            </React.Fragment>
          }
        />
        <Route
          path="/discover"
          element={
            <React.Fragment>
              <Nav />
              <Discover />
               <Footer /> 
            </React.Fragment>
          }
        />

        <Route
          path="/trend"
          element={
            <React.Fragment>
              <Nav />
              <Trend />
              <Footer /> 
            </React.Fragment>
          }
        />
        <Route
          path="/movie"
          element={
            <React.Fragment>
              <Nav />
              <Movie />
              <Footer /> 
            </React.Fragment>
          }
        />

        <Route
          path="/upcoming"
          element={
            <React.Fragment>
              <Nav />
              <Upcoming />
              <Footer /> 
            </React.Fragment>
          }
        />
        <Route
          path="/top-rated"
          element={
            <React.Fragment>
              <Nav />
         <Toprated/>
               <Footer />
            </React.Fragment>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
