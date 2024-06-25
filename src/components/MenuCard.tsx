import { Component } from "react";

import shoppingLogo from "../assets/images/shopping-cart.svg";
import productImg1 from "../assets/images/menu/1.webp";

export class MenuCard extends Component {
  render() {
    return (
      <div className="font-jakarta block mr-2 md:relative">
        <img className=" md:mb-0 w-full" src={productImg1} alt="Hazzlenut Latte" />
        <div className="md:absolute md:p-2 md:max-w-36 lg:max-w-52 2xl:max-w-72 md:bottom-[-12rem] left-0 right-0 ms-auto me-auto md:bg-white">
          <p className="font-bold mb-1 text-sm md:text-base lg:text-lg uw:text-2xl">Hazzlenut Latte</p>
          <p className="text-xs lg:text-sm 4xl:text-base uw:text-xl text-lightgray">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
          <div className="flex text-primary items-center mt-1">
            <div className="uw:text-xl" data-value="1">
              &#9733;
            </div>
            <div className="uw:text-xl" data-value="2">
              &#9733;
            </div>
            <div className="uw:text-xl" data-value="3">
              &#9733;
            </div>
            <div className="uw:text-xl" data-value="4">
              &#9733;
            </div>
            <div className="mr-1 uw:text-xl" data-value="5">
              &#9733;
            </div>
            <div className="text-lightgray text-sm uw:text-2xl">5.0</div>
          </div>
          <div className="block tbt:flex tbt:items-center">
            <p className="md:hidden text-red-600 text-[0.7rem] line-through tbt:mr-2">IDR 40.000</p>
            <p className="text-primary text-sm tbt:text-base md:text-lg uw:text-2xl">IDR 20.000</p>
          </div>
          <div className="md:flex">
            <button className="w-full md:w-2/3 md:mr-2 h-8 bg-primary font-semibold rounded hover:bg-darkprimary2 active:bg-darkprimary text-xs">Buy</button>
            <button className="mt-3 md:mt-0 w-full md:w-1/3 h-8 border border-solid border-primary text-primary rounded hover:bg-darkwhite2 active:bg-darkwhite text-xs">
              <div className="flex items-center justify-center">
                <img width="20" height="20" src={shoppingLogo} alt="shopping-cart" />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuCard;
