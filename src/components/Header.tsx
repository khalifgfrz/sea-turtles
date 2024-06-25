import { useState, useRef, useEffect } from "react";
import { Menu, Search, ShoppingCart } from "react-feather";
import { Link } from "react-router-dom";

import logo from "../assets/images/navbar-logo.webp";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const navbarNavRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLAnchorElement>(null);

  const toggleNavbar = () => {
    setIsActive((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node) && navbarNavRef.current && !navbarNavRef.current.contains(event.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="font-jakarta">
      <nav className="flex justify-between items-center bg-black fixed py-[2%] tbt:py-[0.5%] px-[5%] tbt:px-[10%] top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <div className="mr-16">
            <Link to="#">
              <img width="90" height="22.5" className="tbt:w-44" src={logo} alt="navbar-logo" />
            </Link>
          </div>
          <div className="hidden md:flex uw:text-xl">
            <Link
              to="/"
              className="md:mr-16 md:text-white md:after:block md:after:border-b-2 md:after:border-solid md:after:border-primary md:after:scale-x-0 md:after:duration-200 md:after:ease-linear md:hover:after:scale-x-100 md:active:text-darkwhite"
            >
              Home
            </Link>
            <Link
              to="/product"
              className="md:mr-16 md:text-white md:after:block md:after:border-b-2 md:after:border-solid md:after:border-primary md:after:scale-x-0 md:after:duration-200 md:after:ease-linear md:hover:after:scale-x-100 md:active:text-darkwhite"
            >
              Product
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link to="#" className="hidden md:flex md:mr-6" aria-label="Read more about search" id="search">
            <Search className="text-center w-5 h-5 text-white  hover:text-primary active:text-darkprimary focus:text-primary" />
          </Link>
          <Link to="#" className="mr-6" aria-label="Read more about card" id="shopping-cart">
            <ShoppingCart className="text-center w-5 h-5 text-white  hover:text-primary active:text-darkprimary focus:text-primary" />
          </Link>
          <div className="hidden md:flex uw:text-xl">
            <Link to="/login">
              <button id="logoutBtn" className="bg-black text-white border border-solid border-white rounded text-sm mr-4 lg:text-base w-16 h-8 lg:w-20 lg:h-10 uw:w-24 uw:h-12 hover:bg-lightblack active:bg-lightblack2 focus:bg-lightblack">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button id="logoutBtn" className="bg-primary rounded text-sm lg:text-base w-16 h-8 lg:w-20 lg:h-10 uw:w-24 uw:h-12 hover:bg-darkprimary2 active:bg-darkprimary focus:bg-darkprimary2">
                Sign Up
              </button>
            </Link>
          </div>
          <Link to="#" id="hamburger-menu" ref={hamburgerRef} onClick={toggleNavbar} className="md:hidden" aria-label="Read more about hamburger">
            <Menu className="text-center w-5 h-5 text-white  hover:text-primary active:text-darkprimary focus:text-primary" />
          </Link>
          <div className={`navbar-nav-detail ${isActive ? "active" : ""} absolute top-full bg-white w-full h-screen duration-300`} ref={navbarNavRef}>
            <Link to="/index" className="block text-black m-5 p-5 after:origin-top-left active:bg-darkgray">
              Home
            </Link>
            <Link to="/product" className="block text-black m-5 p-5 after:origin-top-left active:bg-darkgray">
              Product
            </Link>
            <Link to="#" className="block text-black m-5 p-5 after:origin-top-left active:bg-darkgray">
              Search
            </Link>
            <Link to="/login" className="block text-black m-5 p-5 after:origin-top-left hover:after:scale-x-0">
              Sign In
            </Link>
            <Link to="/register" className="block text-black m-5 p-5 after:origin-top-left hover:after:scale-x-0">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
