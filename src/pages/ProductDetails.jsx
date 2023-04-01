import React, { useEffect } from "react";
import Commonsection from "../components/UI/Commonsection";
import sofa from "../assets/images/bed-02.jpg";
import { ImStarFull } from "react-icons/im";
import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Rating from "react-rating";
import Footer from "../components/UI/Footer/Footer";

const ProductDetails = () => {
  const [product] = useState(products);

  const data = useParams();
  console.log(data.productId);

    const selectedProduct = product.filter(
      (item) => item.id === data.productId
    );
    console.log(selectedProduct)

  return (
    <>
      <Commonsection />
      <div className="mt-10 mx-9 sm:flex sm:mx-[15%]">
        <div>
          <div className="h-[200px] object-cover sm:w-[300px] sm:h-[300px] ">
            <img
              src={selectedProduct[0].imgUrl}
              className="rounded-sm  h-[100%] w-[100%] "
              alt="product"
            ></img>
          </div>
          <div className="flex justify-between mx-2 mt-[8px]">
            <img
              src={sofa}
              className="rounded-sm h-[50px] sm:h-[40px]"
              alt="product"
            ></img>{" "}
            <img
              src={sofa}
              className="rounded-sm h-[50px] sm:h-[40px]"
              alt="product"
            ></img>{" "}
            <img
              src={sofa}
              className="rounded-sm h-[50px] sm:h-[40px]"
              alt="product"
            ></img>{" "}
            <img
              src={sofa}
              className="rounded-sm h-[50px] sm:h-[40px]"
              alt="product"
            ></img>
          </div>
        </div>
        <div className="mt-8 sm:ml-20 sm:mt-0">
          <h2 className="text-[16px] font-merriweather sm:text-[28px]">
            {selectedProduct[0].productName }
          </h2>
          <p className="text-gray-400 text-[12px] font-poppins text-justify mt-[10px]">
           {selectedProduct[0].shortDesc}
          </p>

          <div className="flex mt-[18px] gap-4">
            <div className="flex gap-1">
             {/* <Rating className=""/> */}
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
            </div>
            <span className="text-sm text-gray-500">({selectedProduct[0].reviews.length})</span>
          </div>

          <p className="text-[10px] text-gray-500 mt-2">Catrgory : {selectedProduct[0].category}</p>

          <div>
            <h2 className="font-merriweather font-bold mt-[10px]">Rs. {selectedProduct[0].price}</h2>
          </div>
          <div className="cta flex items-center gap-1 mt-[10px]">
            <button className="border-2 border-black text-[14px] px-[24px] py-[8px] font-poppins hover:bg-black hover:text-white transition-all ">
              Add To Cart
            </button>
            <button className="bg-black text-white px-[16px] py-[8px] font-poppins border-2 hover:bg-white hover:border-2 hover:border-black hover:text-black transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 mx-9 sm:mx-[15%] sm:mt-16">
        <div className="flex gap-2 items-center mt-[32px]">
          <h4 className="text-md">Description</h4>
          <h4 className="text-md "> Review (121)</h4>
        </div>
        <div className="mt-4">
          <p className="font-poppins text-[12px] text-justify">
           {selectedProduct[0].description}
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductDetails;
