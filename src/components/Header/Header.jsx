import React, { useEffect, useRef } from "react";
import usericon from "../../assets/images/user-icon.png";
import { BsBag } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

// navigation links array and display name
const nav_link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  return (
    <header
      className="flex justify-between p-5 back items-center text-black px-10"
      ref={headerRef}
    >
      <div className="flex items-center justify-center gap-2 font-bold">
        <BiBed className="text-2xl" />
        <h2 className="text-[20px] logo">
          Bed <span className="text-[16px]">&</span> Bunk{" "}
        </h2>
      </div>
      <nav className="ml-[-20px]">
        <ul className="flex gap-5 ">
          {nav_link.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={(nav) =>
                    nav.isActive ? "font-bold text-red-300" : ""
                  }
                >
                  {item.display}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex gap-5 items-center text-black justify-center">
        <div className="relative">
          <AiOutlineHeart className="text-[25px] hover:cursor-pointer " />
          <span className="h-[10px] w-[10px] flex justify-center items-center bg-black rounded-[10px] text-white text-[9px] p-2 absolute top-[-4px] left-4 bottom-6">
            2
          </span>
        </div>

        <div className="relative">
          <BsBag className="text-[20px] hover:cursor-pointer" />
          <span className="h-[10px] w-[10px] flex justify-center items-center bg-black rounded-[10px] text-white text-[9px] p-2 absolute top-[-6px] left-3 bottom-6">
            1
          </span>
        </div>
        <img
          src={usericon}
          alt="usericon"
          className="h-8 hover:cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
