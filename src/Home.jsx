import React from "react";
import Banner from "./Components/Banner/Banner";
import IMG from './images/course_1.jpg';
// import './App.css';

const Home = () => {
  return (
    <>
      <Banner 
      name="Learn & Implement"
      para="Access in-demand Training mentored by Industrial Experts"
      imgsrc={IMG}
      visit="/blog"
      btname="Start Preparation"/>
    </>
  );
}

export default Home;
