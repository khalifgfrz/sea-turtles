import emailIcon from "../assets/images/email-icon.svg";
import nameIcon from "../assets/images/form-icon.svg";
import addressIcon from "../assets/images/address-icon.svg";
import briIcon from "../assets/images/bri-logo.svg";
import danaIcon from "../assets/images/dana-logo.svg";
import bcaIcon from "../assets/images/bca-logo.svg";
import gopayIcon from "../assets/images/gopay-logo.svg";
import ovoIcon from "../assets/images/ovo-logo.svg";
import paypalIcon from "../assets/images/paypal-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useStoreSelector } from "../redux/hooks";
import { deleteAllCheckouts, deleteCheckouts } from "../redux/slices/checkout";
import axios from "axios";
import Input from "../components/Input";
import CheckoutWarning from "../components/CheckoutWarning";
import { getUserThunk } from "../redux/slices/getUser";
import Swal from "sweetalert2";

function Checkout() {
  const navigate = useNavigate();
  const [isModalCheckoutVisible, setIsModalCheckoutVisible] = useState(false);
  const checkoutModalBgRef = useRef<HTMLDivElement>(null);
  const orderTotal = useSelector((state: RootState) => state.checkout.orderTotal);
  const taxTotal = Math.ceil(orderTotal * 0.1);
  const dispatch = useDispatch<AppDispatch>();
  const { getProducts } = useSelector((state: RootState) => state.checkout);
  const { token } = useStoreSelector((state) => state.auth);
  const { profile } = useSelector((state: RootState) => state.getUser);
  const [delivery, setDelivery] = useState<number>(0);
  const [payment, setPayment] = useState<number>(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const subTotal = orderTotal + taxTotal + deliveryCharge;
  const [form, setForm] = useState({
    full_name: profile?.full_name || "",
    email: profile?.email || "",
    phone: profile?.phone || "",
    address: profile?.address || "",
  });

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setForm({
        full_name: profile.full_name || "",
        email: profile.email || "",
        phone: profile.phone || "",
        address: profile.address || "",
      });
    }
    const timer = setTimeout(() => {
      if (!form.full_name || !form.email || !form.address) {
        Swal.fire({
          title: "Error!",
          text: "Please update your profile first.",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
          position: "top-end",
          background: "#0B0909",
          color: "#fff",
          customClass: {
            popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
          },
          toast: true,
        });
        navigate("/profile");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [profile, form, navigate]);

  const handleDeliveryChange = (delivery: number) => {
    setDelivery(delivery);
    if (delivery === 1) {
      setDeliveryCharge(0);
    }
    if (delivery === 2) {
      setDeliveryCharge(5000);
    }
    if (delivery === 3) {
      setDeliveryCharge(0);
    }
  };

  const handlePaymentChange = (payment: number) => {
    setPayment(payment);
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
      const products = getProducts.map((product) => {
        return {
          product_id: product.product_id,
          size_id: product.size,
          qty: product.count,
        };
      });
      const result = await axios.post(
        url,
        {
          user_id: profile?.id,
          subtotal: orderTotal,
          tax: taxTotal,
          payment_id: payment,
          delivery_id: delivery,
          status: "Waiting",
          grand_total: subTotal,
          products: products,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(result.data);
      const orderUuid = result.data.data[0].uuid;
      console.log(orderUuid);
      navigate(`/order/${orderUuid}`);
      setIsModalCheckoutVisible(false);
      dispatch(deleteAllCheckouts());
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Swal.fire({
          title: "Error!",
          text: error.response?.data?.err || "An unexpected error occurred.",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
          position: "top-end",
          background: "#0B0909",
          color: "#fff",
          customClass: {
            popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
          },
          toast: true,
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred.",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
          position: "top-end",
          background: "#0B0909",
          color: "#fff",
          customClass: {
            popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
          },
          toast: true,
        });
      }
    }
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
              <Link to="/product">
                <button className="bg-primary rounded w-20 h-8 md:w-24 md:h-11 uw:w-32 uw:h-12 hover:bg-darkprimary2 active:bg-darkprimary">
                  <div className="flex justify-center items-center">
                    <p className="text-xl md:text-2xl mr-2">+</p>
                    <p className="text-xs md:text-sm">Add Menu</p>
                  </div>
                </button>
              </Link>
            </div>
            <div>
              {getProducts.length === 0 ? (
                <CheckoutWarning />
              ) : (
                getProducts.map((product, index) => (
                  <div key={product.uuid && index} className="font-jakarta flex bg-gray-50 mt-3 py-3 pl-3 justify-between">
                    <div className="flex mr-2 justify-center items-center">
                      <img width="150" height="150" src={product.image} alt="menu1" />
                    </div>
                    <div className="w-3/5 pr-5">
                      <p className="font-bold mb-3 text-sm md:text-lg">{product.product_name}</p>
                      <p className="text-lightgray mb-3 text-xs md:text-base">
                        {product.count} pcs | {product.size === 1 ? "Regular" : product.size === 2 ? "Medium" : "Large"} | {product.ice ? "Ice" : "Hot"}
                      </p>
                      <div className="flex">
                        <p className="text-primary text-sm md:text-xl">IDR {product.price * product.count}</p>
                      </div>
                    </div>
                    <div className="flex pr-1">
                      <button onClick={() => dispatch(deleteCheckouts(index))} className="w-6 2xl:w-6 uw:w-10 h-6 uw:h-10 text-sm font-bold text-red-500 border-2 uw:border-4 border-red-500 rounded-full hover:bg-gray-100 active:bg-gray-200">
                        <div className="flex justify-center">
                          <p>x</p>
                        </div>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="mt-7">
              <h2 className="font-semibold md:text-2xl">Payment Info & Delivery</h2>
              <form className="mt-7">
                <label className="text-lightblack2 font-semibold md:text-xl" htmlFor="email">
                  Email
                </label>
                <div className="relative mt-2">
                  <img className="absolute mt-4 ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
                  <Input input={{ type: "text", name: "email", placeholder: "Enter your email", autocomplete: "email", value: form?.email, readOnly: true }} />
                </div>
                <label className="text-lightblack2 font-semibold md:text-xl" htmlFor="full_name">
                  Full Name
                </label>
                <div className="relative mt-2">
                  <img className="absolute mt-4 ml-5" width="20" height="20" src={nameIcon} alt="name-icon" />
                  <Input input={{ type: "text", name: "full_name", placeholder: "Enter Your Full Name", autocomplete: "name", value: form?.full_name, readOnly: true }} />
                </div>
                <label className="text-lightblack2 font-semibold md:text-xl" htmlFor="address">
                  Address
                </label>
                <div className="relative mt-2">
                  <img className="absolute mt-4 ml-5" width="20" height="20" src={addressIcon} alt="address-icon" />
                  <Input input={{ type: "text", name: "address", placeholder: "Enter Your Address", autocomplete: "off", value: form?.address, readOnly: true }} />
                </div>
              </form>
            </div>
            <p className="mt-3 font-bold text-sm">Delivery</p>
            <div className="flex justify-between mt-3">
              <button
                className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base active:bg-darkgray focus:border-primary focus:text-black"
                onClick={() => handleDeliveryChange(1)}
              >
                Dine In
              </button>
              <button
                className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base active:bg-darkgray focus:border-primary focus:text-black"
                onClick={() => handleDeliveryChange(2)}
              >
                Door Delivery
              </button>
              <button
                className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base active:bg-darkgray focus:border-primary focus:text-black"
                onClick={() => handleDeliveryChange(3)}
              >
                Pick Up
              </button>
            </div>
            <p className="mt-3 font-bold text-sm">Payment Method</p>
            <div className="flex justify-between mt-3">
              <button
                className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base active:bg-darkgray focus:border-primary focus:text-black"
                onClick={() => handlePaymentChange(1)}
              >
                Cash
              </button>
              <button
                className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base active:bg-darkgray focus:border-primary focus:text-black"
                onClick={() => handlePaymentChange(2)}
              >
                Transfer
              </button>
              <button
                className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base active:bg-darkgray focus:border-primary focus:text-black"
                onClick={() => handlePaymentChange(3)}
              >
                Debit
              </button>
              <button
                className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base active:bg-darkgray focus:border-primary focus:text-black"
                onClick={() => handlePaymentChange(4)}
              >
                Qris
              </button>
            </div>
          </div>
          <div className="mt-5 tbt:mt-2 tbt:w-1/2">
            <h2 className="md:text-2xl font-semibold">Total</h2>
            <div className="mt-4 bg-gray-50 px-2 py-5">
              <div className="flex mb-2 font-bold justify-between w-full">
                <p className="text-xs md:text-base">Order</p>
                <p className="text-xs md:text-base">Idr. {orderTotal}</p>
              </div>
              <div className="flex mb-2 font-bold justify-between w-full">
                <p className="text-xs md:text-base">Delivery</p>
                <p className="text-xs md:text-base">Idr. {deliveryCharge}</p>
              </div>
              <div className="flex mb-2 font-bold justify-between w-full border-b">
                <p className="text-xs md:text-base">Tax</p>
                <p className="text-xs md:text-base">Idr. {taxTotal}</p>
              </div>
              <div className="flex mt-5 mb-5 font-bold justify-between w-full">
                <p className="text-xs md:text-base">Subtotal</p>
                <p className="text-xs md:text-base">Idr. {subTotal}</p>
              </div>
              <button onClick={handleCheckoutClick} className="w-full h-9 bg-primary font-semibold rounded-xl hover:bg-darkprimary2 active:bg-darkprimary">
                Checkout
              </button>
              {isModalCheckoutVisible && (
                <div ref={checkoutModalBgRef} onClick={handleBackgroundCheckoutClick} className="show fixed z-50 inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center">
                  <div className="bg-white p-6 rounded shadow-lg max-w-md w-3/4 tbt:w-full text-center">
                    <h2 className="text-sm tbt:text-2xl font-semibold mb-4">Confirm Checkout</h2>
                    <p className="text-xs xsm:text-sm tbt:text-base mb-6">Are you sure you want to checkout?</p>
                    <div className="flex justify-center">
                      <button onClick={handleConfirmCheckoutClick} className="text-xs tbt:text-base bg-primary hover:bg-darkprimary2 active:bg-darkprimary text-white px-4 py-2 rounded mr-2">
                        Checkout
                      </button>
                      <button onClick={handleCancelCheckoutClick} className="text-xs tbt:text-base bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white px-4 py-2 rounded">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <p className="mt-3 text-lightgray text-sm md:text-base">We Accept</p>
              <div className="flex justify-between mt-3">
                <img className="mr-2 md:w-8 md:h-8 lg:w-9 lg:h-9 uw:w-14 uw:h-14" width="25" height="25" src={briIcon} alt="bri-logo" />
                <img className="mr-2 md:w-8 md:h-8 lg:w-9 lg:h-9 uw:w-14 uw:h-14" width="25" height="25" src={danaIcon} alt="dana-logo" />
                <img className="mr-2 md:w-8 md:h-8 lg:w-9 lg:h-9 uw:w-14 uw:h-14" width="25" height="25" src={bcaIcon} alt="bca-logo" />
                <img className="mr-2 md:w-8 md:h-8 lg:w-9 lg:h-9 uw:w-14 uw:h-14" width="25" height="25" src={gopayIcon} alt="gopay-logo" />
                <img className="mr-2 md:w-8 md:h-8 lg:w-9 lg:h-9 uw:w-14 uw:h-14" width="25" height="25" src={ovoIcon} alt="ovo-logo" />
                <img className="md:w-8 md:h-8 lg:w-9 lg:h-9 uw:w-14 uw:h-14" width="25" height="25" src={paypalIcon} alt="paypal-logo" />
              </div>
              <p className="mt-3 text-lightgray text-xs md:text-base">*Get Discount if you pay with Bank Central Asia</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
