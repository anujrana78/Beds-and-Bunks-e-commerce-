import Commonsection from "../components/UI/Commonsection";
import sofa from "../assets/images/bed-02.jpg";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import products from "../assets/data/products";
import Footer from "../components/UI/Footer/Footer";
import { useDispatch } from "react-redux";
import { add } from "../redux/slices/cartSlice";

const ProductDetails = () => {
  const [product] = useState(products);
  const disptach = useDispatch();
  const [tab, setTab] = useState("desc");

  const data = useParams();
  console.log(data.productId);

  const selectedProduct = product.find((item) => item.id === data.productId);
  console.log(selectedProduct);

  const {
    id,
    productName,
    category,
    description,
    imgUrl,
    price,
    reviews,
    shortDesc,
    avgRating,
  } = selectedProduct;

  const addToCart = () => {
    disptach(
      add({
        id,
        productName,
        category,
        description,
        image: imgUrl,
        price,
        reviews,
        shortDesc,
        avgRating,
      })
    );
  };

  const toggleDescTab = () => {
    setTab("desc");
  };
  const toggleReviewTab = () => {
    setTab("rev");
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const firstExample = {
    size: 20,
    value: avgRating,
    edit: false
  };
  
  return (
    <>
      <Commonsection />
      <div className="mt-10 mx-9 sm:flex sm:mx-[15%]">
        <div>
          <div className="h-[200px] object-cover sm:w-[300px] sm:h-[300px] ">
            <img
              src={imgUrl}
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
            {productName}
          </h2>
          <p className="text-gray-400 text-[12px] font-poppins text-justify mt-[10px]">
            {shortDesc}
          </p>

          <div className="flex mt-[18px] gap-4 items-center">
            <div className="flex gap-1">
            <ReactStars {...firstExample}  />  
            </div>
            <span className="text-sm text-gray-500">({reviews.length})</span>
          </div>

          <p className="text-[10px] text-gray-500 mt-2">
            Catrgory : {category}
          </p>

          <div>
            <h2 className="font-merriweather font-bold mt-[10px]">
              Rs. {price}
            </h2>
          </div>
          <div className="cta flex items-center gap-1 mt-[10px]">
            <button
              className="border-2 border-black text-[14px] px-[24px] py-[8px] font-poppins hover:bg-black hover:text-white transition-all "
              onClick={addToCart}
            >
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
          <h4
            className="text-md hover:cursor-pointer text-gray-300"
            onClick={toggleDescTab}
            style={{ color: tab === "desc" ? "black" : "" }}
          >
            Description
          </h4>
          <h4
            className="text-md hover:cursor-pointer text-gray-300"
            onClick={toggleReviewTab}
            style={{ color: tab === "rev" ? "black" : "" }}
          >
            {" "}
            Review (121)
          </h4>
        </div>
        {tab === "desc" ? (
          <div className="mt-4">
            <p className="font-poppins text-[12px] text-justify">
              {description}
            </p>
          </div>
        ) : (
          <>
            <div className="mt-4">
              <h2 className=" text-sm">Share your Experience</h2>
              <input
                type="text"
                className="border-2 border-gray-400 rounded-sm block w-[100%] px-2 text-sm mt-2 py-1 outline-none"
                placeholder="Enter Your Name"
              />
              <input
                type="text"
                className="border-2 border-gray-400 block w-[100%] pb-16 px-2 text-sm mt-2 outline-none"
                placeholder="Your review"
              />
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
              
              <button className="bg-gray-700 text-white text-sm font-thin px-2 py-1 mt-3">
                Submit
              </button>
            </div>
            <div className="mt-6">
              <h3>Reviewer Name</h3>
              <span className="text-yellow-500">1.7 (rating)</span>
              <p className="font-poppins text-[12px] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                suscipit quia ab perferendis. Maiores non, temporibus ut
                mollitia illo quod eius vel recusandae magni, magnam, incidunt
                reprehenderit! Possimus, excepturi explicabo!
              </p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
