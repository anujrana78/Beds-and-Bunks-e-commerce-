import React from "react";
import { Helmet } from "react-helmet";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slices/cartSlice";
import Footer from "../components/UI/Footer/Footer";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch()

  const deleteItem = (id) => {
    dispatch(remove(id))
  }

  const checkoutBox = (
    <div className={`bg-gray-900 rounded m-4 text-white p-4 sticky sm:py-10`}>
      <p>Total Quantity :  {totalQty}</p>
      <p>Total Amount : Rs{totalAmount}</p>
      <p className="font-thin text-gray-200 text-[10px] mt-2">Shipping cost will be included on checkout</p>
      <div className="flex-col gap-2 mt-3">
        <button className="bg-none border-2 text-white px-3 py-1 w-[40%] mr-2">
          Continue
        </button>
        <button className="bg-white text-blue-800 px-3 py-1 w-[55%]">
          Checkout{" "}
        </button>
      </div>
    </div>
  );

  const emptyMessage = (
    <div className="flex-col justify-center items-center text-center w-[100%]">
      <FaCartPlus className="text-[4rem] text-gray-700 text-center mt-20 w-[100%] mb-10" />
      <p className="font-thin">No items added to the cart</p>
    </div>
  );
  return (
    <>
    <div className="md:flex md:justify-center ">
      <Helmet>
        <title>Beds & Bunks - Cart</title>
      </Helmet>
      <div className={`${cartItems.length < 1 ?  'hidden': ''}  md:w-[70%] `}>
      {cartItems.map((item, index) => {
        return (
          <div className="m-5 flex p-3 w-[100%] justify-between" key={item.id}>
            <div className="flex justify-between w-[100%]">
              <img
                src={item.image}
                className="h-[75px] md:h-[80px] mr-3 md:mr-0"
                alt="product"
              />
              <div className="flex w-[80%] md:w-[90%]">
                <div className="w-[80%]   ">
                  <h3 className="text-[15px]">{item.productName} </h3>
                  <p className="text-gray-400 text-[12px]">{item.category}</p>
                  <p className="mt-3">Rs.{item.price} </p>
                </div>
                <div className="flex-col space-y-2">
                  <p>x{item.quantity}</p>
                  <AiTwotoneDelete onClick={() => deleteItem(item.id)}/>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
      <div className="md:w-[20%] mb-20" >
      {cartItems.length > 0 ? checkoutBox :emptyMessage}
      </div>
   
    </div>
       <Footer/>
       </>
  );
};

export default Cart;
