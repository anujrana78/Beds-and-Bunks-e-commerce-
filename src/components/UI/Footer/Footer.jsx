import React from "react";
import { BiBed } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex bg-green-900 mt-24 px-20 py-20 justify-center items-center gap-[2%] text-white">
        <BiBed className="m-0 p-0 text-[100px]"/>
    
      <section className="w-[40%] border-r-[1px] p-3 h-[150px]">
      <h2 className="text-[30px] logo">
            Bed <span className="text-[16px]">&</span> Bunk{" "}
          </h2>
        <p className="font-thin mt-2 text-sm">
          Bed and Bunk is a ecommerce project created by{" "}
          <span className='font-bold text-xl'> Anuj Rana </span> for the final semester project. Please feel
          free to test the app.{" "}
        </p>
      </section>

      <section className="p-3 pr-20 border-r-[1px] h-[150px]">
        <h3 className="text-xl logo">Useful Links</h3>
        <ul className="text-sm mt-4 font-thin ">
          <li>Home</li>
          <li>Shop</li>
          <li>Cart</li>
          <li>Privacy Policy</li>
        </ul>
      </section>

      <section className="p-3 pr-20 h-[150px] ">
        <h3 className="text-xl logo">Categories</h3>
        <ul className="text-sm mt-4 font-thin">
          <li>Sofa</li>
          <li>Chair</li>
          <li>Bean Bags</li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
