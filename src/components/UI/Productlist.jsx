import React from "react";
import Productcard from "./Productcard";

const Productlist = ({ data }) => {
  console.log("From propduct list Page");
  

  return (
    <div className="sm:flex   px-[15%] py-[2%] sm:flex-wrap sm:items-center sm:justify-start sm:gap-2 ">
      {data.map((item, index) => {
        return (
          <Productcard
            id={item.id}
            image={item.imgUrl}
            title={item.productName}
            category={item.category}
            price={item.price}
            key={item.id}
            avgRating={item.avgRating}
            className="h-[3px]"
          />
        );
      })}
    </div>
  );
};

export default Productlist;
