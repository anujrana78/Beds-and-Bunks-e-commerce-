  import React, { useEffect, useRef, useState } from "react";
  import usericon from "../../assets/images/user-icon.png";
  import { BsBag } from "react-icons/bs";
  import { BiBed } from "react-icons/bi";
  import { AiOutlineHeart } from "react-icons/ai";
  import { Link, NavLink } from "react-router-dom";
  import {RxHamburgerMenu,RxCross2} from 'react-icons/rx'
  import { useSelector } from "react-redux";

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
    const navRef = useRef(null)
    const [displayNav,setDisplayNav] = useState(false)
    const [userMenu,setUserMenu] = useState(false)

    const numberOfItems = useSelector(state => state.cart.totalQuantity)
    const numberOfWishlist = useSelector(state => state.wishlist.items.length)

    // Sticky navbar while scrolling through the page
    const stickyHeaderFunc = () => {
      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("sticky_header");
          navRef.current.classList.add("nav_sticky");

        } else {
          headerRef.current.classList.remove("sticky_header");
          navRef.current.classList.remove("nav_sticky")
        }
      });
    };

    const toggleMenu = () => {
      setDisplayNav(!displayNav)

      if(displayNav){
        navRef.current.classList.add('show_menu')
      }else{
        navRef.current.classList.remove('show_menu')
      }
    }
    console.log(displayNav)
  

    useEffect(() => {
      stickyHeaderFunc();

      return () => window.removeEventListener("scroll", stickyHeaderFunc);
    });

    return (
      <header
        className="flex justify-between  items-center text-black sm:px-10 p-3 sm:p-2 transition-all"
        ref={headerRef}
      >
        <div className="flex items-center justify-center gap-2 font-bold z-10">
          <BiBed className="text-2xl" />
          <h2 className="text-[20px] logo">
            <Link to="/home">
            Bed <span className="text-[16px]">&</span> Bunk{" "}</Link>
          </h2>
        </div>
        <nav className=" p-2 sm:ml-[-20px] show_menu z-[1000]" ref={navRef}>
          <ul className="gap-5 sm:flex ">
            {nav_link.map((item, index) => {
              return (
                <li key={index} className='m-2 text-[14px]   md:text-[16px]'>
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
      
        <div className="flex gap-3 sm:gap-5 items-center text-black justify-center">
          <div className="relative">
            <AiOutlineHeart className="sm:text-[25px] hover:cursor-pointer " />
            {numberOfWishlist > 0 && <span className="h-[10px] w-[10px] flex justify-center items-center bg-black rounded-[10px] text-white text-[9px] p-2 absolute top-[-4px] left-2 sm:left-4 bottom-6">
              {numberOfWishlist }
            </span>}
          </div>

          <div className="relative">
            <Link to="/cart">
            <BsBag className="sm:text-[20px] hover:cursor-pointer" />
            </Link>
          {numberOfItems > 0 && <span className="h-[10px] w-[10px] flex justify-center items-center bg-black rounded-[10px] text-white text-[9px] p-2 absolute top-[-6px] left-3 bottom-6">
              {numberOfItems}
            </span>}
          </div>
          <img
            src={usericon}
            alt="usericon"
            className="md:h-8 hover:cursor-pointer h-6"
            onClick={ () => setUserMenu(!userMenu)}
          />
         {!displayNav && userMenu && <div className="absolute sm:top-14 bg-white p-4 top-12 z-[1000]">
            <p>My Account</p>
            <Link to='/signin'><p>Sign In</p></Link>
            <Link to='/signup'><p>Sign Up</p></Link>
            <p>log Out</p>
          </div>}
          {displayNav ? <RxCross2 className="sm:hidden" onClick={toggleMenu}/> :<RxHamburgerMenu className="sm:hidden" onClick={toggleMenu}/> }
        </div>
        
      </header>
    );
  };

  export default Header;
