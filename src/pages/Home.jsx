import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import heroimage from "../assets/images/bed-hero.png";
import saleImage from "../assets/images/double-sofa-02.png"
import Services from "../components/services/Services";
import Productlist from "../components/UI/Productlist";
import products from "../assets/data/products"
import { motion } from "framer-motion"
import Footer from "../components/UI/Footer/Footer";


const Home = () => {
  
  const [data,setData] = useState(products)
  const [fiveStarProduct,setFiveStarProduct] = useState(products)
  const [beds,setBeds] = useState(products)
  
   useEffect(() => {
    const filtereddata = products.filter( (item) => item.category === "chair")
    const filteredFiveStarProduct = products.filter((item) => item.avgRating === 5)
    const filteredBeds = products.filter((item) => item.category === "bed")

    setData(filtereddata)
    setFiveStarProduct(filteredFiveStarProduct)
    setBeds(filteredBeds)
  },[])

  console.log(fiveStarProduct)

  return (
    <>
      <Helmet>
        <title>Beds & Bunks - Home</title>
      </Helmet>
      <section className="flex px-28 py-14 bg-blue-200">
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
          <motion.button
            whileHover={{
              scale: 1.04,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
           
            
          
          >
          <button className="bg-black text-white px-5 py-2 rounded font-light hover:">
            Shop Now
          </button>
          </motion.button>
        </div>
      </section>

     <Services/>

     <section className=" flex-col items-center justify-center ">
        <h2 className="text-2xl text-center font-semibold mt-5">Premium Woods</h2>
        <Productlist data={data}/>
      </section>

      <section className=" flex-col items-center justify-center ">
        <h2 className="text-2xl text-center font-semibold mt-10">Customer's Choice</h2>
        <Productlist data={fiveStarProduct}/>
      </section>

      <section className="flex bg-indigo-900 px-[10%] mt-10">
      <div className="p-10 text-white">
        
        <p className='font-thin text-sm text-gray-300'>Attention of Living Room</p>
        <h3 className="text-4xl mt-3">Karen Sofa</h3>
        <p className="text-sm my-4 w-[80%] font-thin">Introducing the ultimate in comfort and style - the sofa. Whether you're lounging solo or entertaining guests, our sofas offer the perfect seating solution for any space. Sink into plush cushions and enjoy the support of sturdy frames, designed to last for years to come. </p>
        <motion.button
            whileHover={{
              scale: 1.03,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
                     >
        <button className='rounded-[5px] bg-opacity-100 text-white border-white border-[1px] text-sm p-2 hover:bg-white hover:text-indigo-900'>View Product</button>
        </motion.button>
        </div>  
        <img src={saleImage} className='h-[300px]' alt="chair"></img>
      </section>

      <section className=" flex-col items-center justify-center ">
        <h2 className="text-2xl text-center font-semibold mt-10">Luxury Beds</h2>
        <Productlist data={beds}/>
      </section>

      <Footer/>
    </>
  );
};

export default Home;
