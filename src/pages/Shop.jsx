import React from "react";
import { useState } from "react";
import Productlist from "../components/UI/Productlist";
import products from "../assets/data/products";
import { Helmet } from "react-helmet";
import Commonsection from "../components/UI/Commonsection";
import Footer from "../components/UI/Footer/Footer";

//data to sort for select map
const sortOptions = [
  { label: "Filter", value: "" },
  { label: "Sofa", value: "sofa" },
  { label: "chair", value: "chair" },
  { label: "bed", value: "bed" },
];

const priceOptions = [
  { label: "Sort By Price", value: "" },
  { label: "0 - 10000", value: "10000" },
  { label: "10000 - 30000", value: "30000" },
  { label: "30000 - 80000", value: "80000" },
  { label: "80000+", value: "10000000" },
];

const Shop = () => {
  const items = products; //store all products

  const [filteredItem, setFilteredItem] = useState(items); //store filtered products only

  const [sortByCategory, setSortByCategory] = useState(); // store filter by category
  const [sortByPrice, setSortByPrice] = useState(); //sort by price range

  // handle the sort by category
  const handleSortByCategory = (e) => {
    setSortByCategory(e.target.value);
    const filteredItems = items.filter((item) =>
      item.productName.toLocaleLowerCase().includes(e.target.value)
    );
    setFilteredItem(filteredItems);
  };

  //handle the sort by price
  const handleSortByPrice = (e) => {
    setSortByPrice(e.target.value);

    const filteredItems = items.filter(
      (item) => item.price < Number(e.target.value)
    );
    setFilteredItem(filteredItems);
  };

  //to filter data from search bar
  const filterData = (e) => {
    if (e.target.value.length === 0) {
      setFilteredItem(items);
    } else {
      const filterData = items.filter(
        (item) =>
          item.productName.toLocaleLowerCase().includes(e.target.value) ||
          item.category.toLocaleLowerCase().includes(e.target.value)
      );
      console.log(filterData);
      setFilteredItem(filterData);
      console.log(e.target.value);
    }
  };

  return (
    <>
     <Helmet>
        <title>Beds & Bunks - Shop</title>
      </Helmet>
      <Commonsection/>
      <div className="flex justify-center gap-2 mt-8 ">
        <input
          type="text"
          className="border-2 rounded p-1 font-thin outline-none px-5"
          placeholder="Search"
          onChange={filterData}
        />

        <div>
          <select
            className="bg-gray-800 rounded-sm text-white p-2"
            onChange={handleSortByCategory}
            value={sortByCategory}
            id="sort"
          >
            {sortOptions.map((item) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
        </div>
        <div>
          <select
            className="bg-gray-800 rounded-sm text-white p-2"
            value={sortByPrice}
            onChange={handleSortByPrice}
          >
            {priceOptions.map((item) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
        </div>
      </div>
      {filteredItem.length < 1 ?  <p>Sorry No products founds</p> : <Productlist data={filteredItem} />}
      <Footer/>
    </>
  );
};

export default Shop;
