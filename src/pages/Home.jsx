import React from "react";
import { Helmet } from "react-helmet";
import heroimage from "../assets/images/bed-hero.png";
import Services from "../components/services/Services";


const Home = () => {
  
  return (
    <>
      <Helmet>
        <title>Beds & Bunks - Home</title>
      </Helmet>
      <div className="flex p-10 bg-blue-200 ">
        <img src={heroimage} alt="Bed"></img>
        <div className="p-10 flex-col">
          <p className="text-gray-400 text-sm my-2 font-light ">Trending beds in 2022</p>
          <h1 className="text-4xl hero-header font-bold">
            Rest Easy, Dream Big. Find Your Perfect Bed Today
          </h1>
          <p className="text-gray-500 font-thin mb-3 mt-3">
            Discover the ultimate sanctuary for your dreams. Shop our collection
            of luxurious beds today and experience a good night's sleep like
            never before.
          </p>
          <button className="bg-blue-900 text-white px-5 py-2 rounded font-light">
            Shop Now
          </button>
        </div>
      </div>

     <Services/>
    </>
  );
};

export default Home;
