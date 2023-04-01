import React from "react";
import { motion } from "framer-motion";
import { AiFillHeart, AiFillStar,AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Productcard = ({ id, image, title, category, price }) => {
  const dispatch = useDispatch();
  const [isFavourite,setIsFavourite] = useState(false) 

  const truncateString = (str,num) => {
    if(str?.length > num) {
        return str.slice(0,num) + "..."
    }else return str
  }

  const notify = () => toast("Added to cart");
  const addToCart = () => {
    dispatch(
      add({
        id: id,
        image: image,
        productName: title,
        category: category,
        price: price,
      })
    );
    notify();
  };

  const toggleFavourite = () =>{
    setIsFavourite(!isFavourite)
  }

  return (
    <div className=" rounded-md shadow-md w-[250px] h-auto mt-2 sm:mt-auto ">
      <motion.button
        whileHover={{
          scale: 0.98,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98 }}
      >
       
        <div className=" relative" >
        <Link to={`/shop/${id}`}>
          <img src={image} alt="chair" className=" object-fill"></img>
          </Link>
          <div className="bg-white rounded-full absolute top-2 right-2 p-1" >
         {!isFavourite ? <AiOutlineHeart className=" " onClick={toggleFavourite}/> : <AiFillHeart className="" onClick={toggleFavourite
        }/>}
        </div>
        </div>
      </motion.button>
      <div className="p-3 flex-col h-[130px]">
        <div className="space-y-[2px]">
        <div className="flex justify-between items-center"> 
        <Link to={`/shop/${id}`}>
          <h3 className="text-[18px]  mon font-semibold">{truncateString(title,10)}</h3>
        </Link>
        <p className="text-gray-500 text-xl font-bold mon sm:text-sm">
            Rs. {price}
          </p>
        </div>
        
          <p className="text-gray-500 text-[10px] font-thin ">{category}</p>
          <div className="flex">
            <AiFillStar className="text-[12px]"/>
            <AiFillStar className="text-[12px]"/>
            <AiFillStar className="text-[12px]"/>
            <AiFillStar className="text-[12px]"/>
            <AiFillStar className="text-[12px]"/>
          </div>
          </div>
          
          <button className="my-3 border-[1px] border-black text-[10px] px-3 py-1 rounded-full hover:bg-black hover:text-white" onClick={addToCart}>
            Add to Cart
          </button>
          
        </div>
      </div>
    
  );
};

export default Productcard;
