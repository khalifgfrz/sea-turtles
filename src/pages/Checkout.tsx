import React, { useState, useRef } from "react";

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

function Checkout() {
  const [isModalCheckoutVisible, setIsModalCheckoutVisible] = useState(false);
  const checkoutModalBgRef = useRef<HTMLDivElement>(null);

  const handleCheckoutClick = () => {
    setIsModalCheckoutVisible(true);
  };

  const handleCancelCheckoutClick = () => {
    setIsModalCheckoutVisible(false);
  };

  const handleConfirmCheckoutClick = () => {
    alert("You have been checkout item!");
    setIsModalCheckoutVisible(false);
  };

  const handleBackgroundCheckoutClick = (event: React.MouseEvent) => {
    if (event.target === checkoutModalBgRef.current) {
      setIsModalCheckoutVisible(false);
    }
  };

  return (
    <main className="font-jakarta mt-[15%] uw:mt-[5%] lg:mt-[7%] tbt:mt-[10%]">
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
            <CheckoutCard />
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
              <button onClick={handleCheckoutClick} className="w-full h-9 bg-primary font-semibold rounded-xl hover:bg-darkprimary2 active:bg-darkprimary">
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
            {isModalCheckoutVisible && (
              <div ref={checkoutModalBgRef} onClick={handleBackgroundCheckoutClick} className="show fixed inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center">
                <div className="modal-content bg-white p-6 rounded shadow-lg max-w-md uw:max-w-2xl w-3/4 tbt:w-full text-center">
                  <h2 className="text-sm tbt:text-2xl uw:text-4xl font-semibold mb-4">Confirm Checkout</h2>
                  <p className="text-xs xsm:text-sm tbt:text-base uw:text-2xl mb-6">Are you sure you want to checkout?</p>
                  <div className="flex justify-center">
                    <button onClick={handleConfirmCheckoutClick} className="text-xs tbt:text-base uw:text-2xl bg-primary hover:bg-darkprimary2 active:bg-darkprimary text-white px-4 py-2 rounded mr-2">
                      Checkout
                    </button>
                    <button onClick={handleCancelCheckoutClick} className="text-xs tbt:text-base uw:text-2xl bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white px-4 py-2 rounded">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
