import { Component } from "react";

import productImg1 from "../assets/images/menu/1.webp";
import productImg2 from "../assets/images/menu/2.webp";
import emailIcon from "../assets/images/email-icon.svg";
import nameIcon from "../assets/images/form-icon.svg";
import addressIcon from "../assets/images/address-icon.svg";
import briIcon from "../assets/images/bri-logo.svg";
import danaIcon from "../assets/images/dana-logo.svg";
import bcaIcon from "../assets/images/bca-logo.svg";
import gopayIcon from "../assets/images/gopay-logo.svg";
import ovoIcon from "../assets/images/ovo-logo.svg";
import paypalIcon from "../assets/images/paypal-logo.svg";

export class Checkout extends Component {
  render() {
    return (
      <main className="mt-[15%] uw:mt-[5%] lg:mt-[7%] tbt:mt-[10%]">
        <section className="px-[5%] tbt:px-[10%]">
          <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">Payment Details</h1>
          <div className="inline-block mt-10 tbt:flex">
            <div className="tbt:w-1/2 tbt:mr-5">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold md:text-2xl">Your Order</h2>
                <button className="bg-primary rounded w-20 h-8 md:w-24 md:h-11 uw:w-32 uw:h-12 hover:bg-darkprimary2 active:bg-darkprimary">
                  <div className="flex justify-center items-center">
                    <p className="text-xl md:text-2xl uw:text-4xl mr-2">+</p>
                    <p className="text-xs md:text-sm uw:text-xl">Add Menu</p>
                  </div>
                </button>
              </div>
              <div className="flex bg-gray-50 mt-3 py-3 pl-3 justify-between">
                <div className="flex mr-2 justify-center items-center">
                  <img width="150" height="150" src={productImg1} alt="menu1" />
                </div>
                <div className="w-3/5 pr-5">
                  <p className="text-xs uw:text-base text-center p-1 bg-red-600 text-white rounded-2xl max-w-24 uw:max-w-32 mb-3">FLASH SALE</p>
                  <p className="font-bold mb-3 text-sm md:text-lg uw:text-2xl">Hazzlenut Latte</p>
                  <p className="text-lightgray mb-3 text-xs md:text-base uw:text-xl">2pcs | Reguler | Ice | Dine In</p>
                  <div className="flex">
                    <p className="text-red-600 text-xs md:text-sm uw:text-base line-through mr-2">IDR40.000</p>
                    <p className="text-primary text-sm md:text-xl uw:text-2xl">IDR20.000</p>
                  </div>
                </div>
                <div className="flex pr-1">
                  <button
                    id="deleteBtn"
                    className="w-5 lg:w-6 2xl:w-7 uw:w-10 h-5 lg:h-6 2xl:h-7 uw:h-10 text-xs lg:text-sm 2xl:text-base uw:text-2xl font-bold text-red-500 border-2 uw:border-4 border-red-500 rounded-full hover:bg-gray-100 active:bg-gray-200"
                  >
                    <div className="flex justify-center">
                      <p>x</p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex bg-gray-50 mt-3 py-3 pl-3 justify-between">
                <div className="flex mr-2 justify-center items-center">
                  <img width="150" height="150" src={productImg2} alt="menu2" />
                </div>
                <div className="w-3/5 pr-5">
                  <p className="text-xs uw:text-base text-center p-1 bg-red-600 text-white rounded-2xl max-w-24 uw:max-w-32 mb-3">FLASH SALE</p>
                  <p className="font-bold mb-3 text-sm md:text-lg uw:text-2xl">Hazzlenut Latte</p>
                  <p className="text-lightgray mb-3 text-xs md:text-base uw:text-xl">2pcs | Reguler | Ice | Dine In</p>
                  <div className="flex">
                    <p className="text-red-600 text-xs md:text-sm uw:text-base line-through mr-2">IDR40.000</p>
                    <p className="text-primary text-sm md:text-xl uw:text-2xl">IDR20.000</p>
                  </div>
                </div>
                <div className="flex pr-1">
                  <button
                    id="deleteBtn2"
                    className="w-5 lg:w-6 2xl:w-7 uw:w-10 h-5 lg:h-6 2xl:h-7 uw:h-10 text-xs lg:text-sm 2xl:text-base uw:text-2xl font-bold text-red-500 border-2 uw:border-4 border-red-500 rounded-full hover:bg-gray-100 active:bg-gray-200"
                  >
                    <div className="flex justify-center">
                      <p>x</p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="mt-7">
                <h2 className="font-semibold md:text-2xl">Payment Info & Delivery</h2>
                <form className="mt-7">
                  <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="email">
                    Email
                  </label>
                  <div className="relative mt-2">
                    <img className="absolute mt-4 ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
                    <input
                      className="w-full h-12 border border-solid border-darkwhite rounded-xl pt-0.5 pl-14 text-lightgray mb-3 text-xs md:text-sm uw:text-xl"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email"
                      autoComplete="email"
                    />
                  </div>
                  <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="fullname">
                    Full Name
                  </label>
                  <div className="relative mt-2">
                    <img className="absolute mt-4 ml-5" width="20" height="20" src={nameIcon} alt="name-icon" />
                    <input
                      className="w-full h-12 border border-solid border-darkwhite rounded-xl pt-0.5 pl-14 text-lightgray mb-3 text-xs md:text-sm uw:text-xl"
                      type="text"
                      name="fullname"
                      id="fullname"
                      placeholder="Enter Your Full Name"
                      autoComplete="name"
                    />
                  </div>
                  <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="address">
                    Address
                  </label>
                  <div className="relative mt-2">
                    <img className="absolute mt-4 ml-5" width="20" height="20" src={addressIcon} alt="address-icon" />
                    <input
                      className="w-full h-12 border border-solid border-darkwhite rounded-xl pt-0.5 pl-14 text-lightgray mb-3 text-xs md:text-sm uw:text-xl"
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter Your Address"
                      autoComplete="off"
                    />
                  </div>
                </form>
                <h2 className="text-lightblack2 font-semibold md:text-xl uw:text-2xl">Delivery</h2>
                <div className="flex justify-between mt-3">
                  <button className="w-1/4 h-10 border border-solid border-darkwhite rounded-xl text-lightgray hover:border-primary text-[0.6rem] tbt:text-xs md:text-sm lg:text-base uw:text-xl active:bg-darkgray focus:border-primary">
                    Dine In
                  </button>
                  <button className="w-1/4 h-10 border border-solid border-darkwhite rounded-xl text-lightgray hover:border-primary text-[0.6rem] tbt:text-[0.7rem] md:text-sm lg:text-base uw:text-xl active:bg-darkgray focus:border-primary">
                    Door Delivery
                  </button>
                  <button className="w-1/4 h-10 border border-solid border-darkwhite rounded-xl text-lightgray hover:border-primary text-[0.6rem] tbt:text-xs md:text-sm lg:text-base uw:text-xl active:bg-darkgray focus:border-primary">
                    Pick Up
                  </button>
                </div>
              </div>
              <div id="deleteModalBg" className="fixed inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center">
                <div className="bg-white p-6 rounded shadow-lg max-w-md uw:max-w-2xl w-3/4 tbt:w-full text-center">
                  <h2 className="text-sm tbt:text-2xl uw:text-4xl font-semibold mb-4">Confirm Delete</h2>
                  <p className="text-xs xsm:text-sm tbt:text-base uw:text-2xl mb-6">Are you sure you want to delete item?</p>
                  <div className="flex justify-center">
                    <button id="confirmDeleteBtn" className="text-xs tbt:text-base uw:text-2xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-4 py-2 rounded mr-2">
                      Delete
                    </button>
                    <button id="cancelModalBtn" className="text-xs tbt:text-base uw:text-2xl bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white px-4 py-2 rounded">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 tbt:mt-2 tbt:w-1/2">
              <h2 className="md:text-2xl font-semibold">Total</h2>
              <div className="mt-4 bg-gray-50 px-2 py-5">
                <div className="flex mb-2 font-bold justify-between w-full">
                  <p className="text-xs md:text-base uw:text-xl">Order</p>
                  <p className="text-xs md:text-base uw:text-xl">Idr. 40.000</p>
                </div>
                <div className="flex mb-2 font-bold justify-between w-full">
                  <p className="text-xs md:text-base uw:text-xl">Delivery</p>
                  <p className="text-xs md:text-base uw:text-xl">Idr. 0</p>
                </div>
                <div className="flex mb-2 font-bold justify-between w-full border-b">
                  <p className="text-xs md:text-base uw:text-xl">Tax</p>
                  <p className="text-xs md:text-base uw:text-xl">Idr. 4000</p>
                </div>
                <div className="flex mt-5 mb-5 font-bold justify-between w-full">
                  <p className="text-xs md:text-base uw:text-xl">Subtotal</p>
                  <p className="text-xs md:text-base uw:text-xl">Idr. 44.000</p>
                </div>
                <button id="checkoutBtn" className="w-full h-9 bg-primary font-semibold rounded-xl hover:bg-darkprimary2 active:bg-darkprimary">
                  Checkout
                </button>
                <p className="mt-3 text-lightgray text-sm md:text-base uw:text-xl">We Accept</p>
                <div className="flex justify-between mt-3">
                  <img className="mr-2 md:w-8 md:h-8 lg:w-9 lg:h-9 uw:w-14 uw:h-14" width="25" height="25" src={briIcon} alt="bri-logo" />
                  <img className="mr-2 md:w-8 md:h-8 lg:w-9 lg:h-9 uw:w-14 uw:h-14" width="25" height="25" src={danaIcon} alt="dana-logo" />
                  <img className="mr-2 md:w-8 md:h-8 lg:w-9 lg:h-9 uw:w-14 uw:h-14" width="25" height="25" src={bcaIcon} alt="bca-logo" />
                  <img className="mr-2 md:w-8 md:h-8 lg:w-9 lg:h-9 uw:w-14 uw:h-14" width="25" height="25" src={gopayIcon} alt="gopay-logo" />
                  <img className="mr-2 md:w-8 md:h-8 lg:w-9 lg:h-9 uw:w-14 uw:h-14" width="25" height="25" src={ovoIcon} alt="ovo-logo" />
                  <img className="md:w-8 md:h-8 lg:w-9 lg:h-9 uw:w-14 uw:h-14" width="25" height="25" src={paypalIcon} alt="paypal-logo" />
                </div>
                <p className="mt-3 text-lightgray text-xs md:text-base uw:text-xl">*Get Discount if you pay with Bank Central Asia</p>
              </div>
              <div id="checkoutModalBg" className="fixed inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center">
                <div className="bg-white p-6 rounded shadow-lg max-w-md uw:max-w-2xl w-3/4 tbt:w-full text-center">
                  <h2 className="text-sm tbt:text-2xl uw:text-4xl font-semibold mb-4">Confirm Checkout</h2>
                  <p className="text-xs xsm:text-sm tbt:text-base uw:text-2xl mb-6">Are you sure you want to checkout?</p>
                  <div className="flex justify-center">
                    <button id="confirmCheckoutBtn" className="text-xs tbt:text-base uw:text-2xl bg-primary hover:bg-darkprimary2 active:bg-darkprimary text-white px-4 py-2 rounded mr-2">
                      Checkout
                    </button>
                    <button id="cancelCheckoutModalBtn" className="text-xs tbt:text-base uw:text-2xl bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white px-4 py-2 rounded">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Checkout;
