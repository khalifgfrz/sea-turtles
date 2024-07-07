// import React, { useState, useRef } from "react";

import emailIcon from "../assets/images/email-icon.svg";
import nameIcon from "../assets/images/form-icon.svg";
import addressIcon from "../assets/images/address-icon.svg";
import briIcon from "../assets/images/bri-logo.svg";
import danaIcon from "../assets/images/dana-logo.svg";
import bcaIcon from "../assets/images/bca-logo.svg";
import gopayIcon from "../assets/images/gopay-logo.svg";
import ovoIcon from "../assets/images/ovo-logo.svg";
import paypalIcon from "../assets/images/paypal-logo.svg";
import CheckoutCard from "../components/CheckoutCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutButton from "../components/CheckoutButton";
import { useNavigate } from "react-router-dom";

export function CheckoutProduct() {
  return (
    <>
      <Header />
      <Checkout />
      <Footer />
    </>
  );
}

function Checkout() {
  const navigate = useNavigate();

  const handleAddMenuClick = () => {
    navigate(`/product`);
  };

  return (
    <main className="font-jakarta mt-[15%] uw:mt-[5%] lg:mt-[7%] tbt:mt-[10%]">
      <section className="px-[5%] tbt:px-[10%]">
        <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">Payment Details</h1>
        <div className="inline-block mt-10 tbt:flex">
          <div className="tbt:w-1/2 tbt:mr-5">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold md:text-2xl">Your Order</h2>
              <button onClick={() => handleAddMenuClick()} className="bg-primary rounded w-20 h-8 md:w-24 md:h-11 uw:w-32 uw:h-12 hover:bg-darkprimary2 active:bg-darkprimary">
                <div className="flex justify-center items-center">
                  <p className="text-xl md:text-2xl uw:text-4xl mr-2">+</p>
                  <p className="text-xs md:text-sm uw:text-xl">Add Menu</p>
                </div>
              </button>
            </div>
            <CheckoutCard />
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
              <CheckoutButton />
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
          </div>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
