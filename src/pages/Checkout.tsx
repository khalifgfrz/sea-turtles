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
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useStoreDispatch, useStoreSelector } from "../redux/hooks";
import { deleteAllProducts, deleteProducts } from "../redux/slices/product";
import axios from "axios";
import { IProfileBody } from "../types/profile";
import Input from "../components/Input";
// import { checkoutAction } from "../redux/slices/checkout";
// import { IAuthResponse } from "../types/response";

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
  const [isModalCheckoutVisible, setIsModalCheckoutVisible] = useState(false);
  const checkoutModalBgRef = useRef<HTMLDivElement>(null);
  const orderTotal = useSelector((state: RootState) => state.product.orderTotal);
  const taxTotal = Math.ceil(orderTotal * 0.1);
  const subTotal = orderTotal + taxTotal;
  const dispatch = useStoreDispatch();
  const { getProducts } = useSelector((state: RootState) => state.product);
  const { token } = useStoreSelector((state) => state.auth);
  const [getProfile, setProfile] = useState<IProfileBody[]>([]);
  const [form, setForm] = useState<{ full_name?: string; email?: string; address?: string }>({ full_name: "", email: "", address: "" });
  // const itemCount = getProducts.reduce((total, product) => total + product.count, 0);

  useEffect(() => {
    const getDataUser = async () => {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user`;
      try {
        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataUser();
  }, [token]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleCheckoutClick = () => {
    setIsModalCheckoutVisible(true);
  };

  const handleCancelCheckoutClick = () => {
    setIsModalCheckoutVisible(false);
  };

  const handleConfirmCheckoutClick = async () => {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/order/new`;
    try {
      const productIds = getProducts.map((product) => product.product_id);
      const sizes = getProducts.map((product) => product.size);
      const qty = getProducts.map((product) => product.count);
      const result = await axios.post(
        url,
        {
          user_id: getProfile[0]?.id,
          subtotal: orderTotal,
          tax: taxTotal,
          payment_id: getProducts[0]?.payment,
          delivery_id: getProducts[0]?.delivery,
          status: "Waiting",
          grand_total: subTotal,
          size_id: sizes,
          product_ids: [productIds],
          qty: qty,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(result.data);
      const orderUuid = result.data.data[0][0].uuid;
      console.log(orderUuid);
      navigate(`/order/${orderUuid}`);
      setIsModalCheckoutVisible(false);
      dispatch(deleteAllProducts());
    } catch (err) {
      console.log(err);
    }
  };

  const handleBackgroundCheckoutClick = (event: React.MouseEvent) => {
    if (event.target === checkoutModalBgRef.current) {
      setIsModalCheckoutVisible(false);
    }
  };

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
            <div>
              {getProducts.map((product, index) => (
                <div key={product.uuid && index} className="font-jakarta flex bg-gray-50 mt-3 py-3 pl-3 justify-between">
                  <div className="flex mr-2 justify-center items-center">
                    <img width="150" height="150" src={product.image} alt="menu1" />
                  </div>
                  <div className="w-3/5 pr-5">
                    <p className="font-bold mb-3 text-sm md:text-lg uw:text-2xl">{product.product_name}</p>
                    <p className="text-lightgray mb-3 text-xs md:text-base uw:text-xl">
                      {product.count}pcs | {product.size === 1 ? "Regular" : product.size === 2 ? "Medium" : "Large"} | {product.ice ? "Ice" : "Hot"} |{" "}
                      {product.delivery === 1 ? "Dine In" : product.delivery === 2 ? "Door Delivery" : "Pick Up"} | {product.payment === 1 ? "Cash" : product.payment === 2 ? "Transfer" : product.payment === 3 ? "Debit" : "Qris"}
                    </p>
                    <div className="flex">
                      <p className="text-primary text-sm md:text-xl uw:text-2xl">IDR {product.price * product.count}</p>
                    </div>
                  </div>
                  <div className="flex pr-1">
                    <button
                      onClick={() => dispatch(deleteProducts(index))}
                      className="w-6 2xl:w-6 uw:w-10 h-6 uw:h-10 text-sm uw:text-xl font-bold text-red-500 border-2 uw:border-4 border-red-500 rounded-full hover:bg-gray-100 active:bg-gray-200"
                    >
                      <div className="flex justify-center">
                        <p>x</p>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <h2 className="font-semibold md:text-2xl">Payment Info & Delivery</h2>
              <form className="mt-7">
                <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="email">
                  Email
                </label>
                <div className="relative mt-2">
                  <img className="absolute mt-4 ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
                  <Input input={{ type: "text", name: "email", placeholder: "Enter your email", autocomplete: "email", value: getProfile[0]?.email || form.email, onChange: onChangeHandler }} />
                </div>
                <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="full_name">
                  Full Name
                </label>
                <div className="relative mt-2">
                  <img className="absolute mt-4 ml-5" width="20" height="20" src={nameIcon} alt="name-icon" />
                  <Input input={{ type: "text", name: "full_name", placeholder: "Enter Your Full Name", autocomplete: "name", value: getProfile[0]?.full_name || form.full_name, onChange: onChangeHandler }} />
                </div>
                <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="address">
                  Address
                </label>
                <div className="relative mt-2">
                  <img className="absolute mt-4 ml-5" width="20" height="20" src={addressIcon} alt="address-icon" />
                  <Input input={{ type: "text", name: "address", placeholder: "Enter Your Address", autocomplete: "off", value: getProfile[0]?.address || form.address, onChange: onChangeHandler }} />
                </div>
              </form>
            </div>
          </div>
          <div className="mt-5 tbt:mt-2 tbt:w-1/2">
            <h2 className="md:text-2xl font-semibold">Total</h2>
            <div className="mt-4 bg-gray-50 px-2 py-5">
              <div className="flex mb-2 font-bold justify-between w-full">
                <p className="text-xs md:text-base uw:text-xl">Order</p>
                <p className="text-xs md:text-base uw:text-xl">Idr. {orderTotal}</p>
              </div>
              <div className="flex mb-2 font-bold justify-between w-full">
                <p className="text-xs md:text-base uw:text-xl">Delivery</p>
                <p className="text-xs md:text-base uw:text-xl">Idr. 0</p>
              </div>
              <div className="flex mb-2 font-bold justify-between w-full border-b">
                <p className="text-xs md:text-base uw:text-xl">Tax</p>
                <p className="text-xs md:text-base uw:text-xl">Idr. {taxTotal}</p>
              </div>
              <div className="flex mt-5 mb-5 font-bold justify-between w-full">
                <p className="text-xs md:text-base uw:text-xl">Subtotal</p>
                <p className="text-xs md:text-base uw:text-xl">Idr. {subTotal}</p>
              </div>
              <button onClick={handleCheckoutClick} className="w-full h-9 bg-primary font-semibold rounded-xl hover:bg-darkprimary2 active:bg-darkprimary">
                Checkout
              </button>
              {isModalCheckoutVisible && (
                <div ref={checkoutModalBgRef} onClick={handleBackgroundCheckoutClick} className="show fixed z-50 inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center">
                  <div className="bg-white p-6 rounded shadow-lg max-w-md uw:max-w-2xl w-3/4 tbt:w-full text-center">
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
