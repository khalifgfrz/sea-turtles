import Header from "../components/Header";
import Footer from "../components/Footer";

import phoneIcon from "../assets/images/phone-icon.svg";
import nameIcon from "../assets/images/form-icon.svg";
import addressIcon from "../assets/images/address-icon.svg";
import paymentIcon from "../assets/images/payment-icon.svg";
import shippingIcon from "../assets/images/shipping-icon.svg";
import statusIcon from "../assets/images/status-icon.svg";
import productImg1 from "../assets/images/menu/1.webp";
import productImg2 from "../assets/images/menu/2.webp";

export function OrderDetail() {
  return (
    <>
      <Header />
      <DetailOrder />
      <Footer />
    </>
  );
}

function DetailOrder() {
  return (
    <main className="font-jakarta mt-[15%] uw:mt-[5%] lg:mt-[7%] tbt:mt-[10%]">
      <section className="px-[5%] tbt:px-[10%]">
        <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">Order #12354-09893</h1>
        <p className="mt-2 text-lightgray text-xs">21 March 2024 at 10.30 AM</p>
        <div className="inline-block mt-2 tbt:flex tbt:flex-row-reverse tbt:justify-between">
          <div className="tbt:w-1/2">
            <h2 className="font-semibold md:text-2xl">Your Order</h2>
            <div className="flex bg-gray-50 mt-0 tbt:mt-3 p-3">
              <div className="flex mr-2 justify-center items-center">
                <img width="150" height="150" src={productImg1} alt="menu2" />
              </div>
              <div className="w-3/5 pr-5">
                <p className="text-xs text-center p-1 bg-red-600 text-white rounded-2xl max-w-24 mb-3">FLASH SALE</p>
                <p className="font-bold mb-3 text-sm md:text-lg">Hazzlenut Latte</p>
                <p className="text-lightgray mb-3 text-xs md:text-base">2pcs | Reguler | Ice | Dine In</p>
                <div className="flex">
                  <p className="text-red-600 text-xs md:text-sm line-through mr-2">IDR40.000</p>
                  <p className="text-primary text-sm md:text-xl">IDR20.000</p>
                </div>
              </div>
            </div>
            <div className="flex bg-gray-50 mt-3 p-3">
              <div className="flex mr-2 justify-center items-center">
                <img width="150" height="150" src={productImg2} alt="menu2" />
              </div>
              <div className="w-3/5 pr-5">
                <p className="text-xs text-center p-1 bg-red-600 text-white rounded-2xl max-w-24 mb-3">FLASH SALE</p>
                <p className="font-bold mb-3 text-sm md:text-lg">Hazzlenut Latte</p>
                <p className="text-lightgray mb-3 text-xs md:text-base">2pcs | Reguler | Ice | Dine In</p>
                <div className="flex">
                  <p className="text-red-600 text-xs md:text-sm line-through mr-2">IDR40.000</p>
                  <p className="text-primary text-sm md:text-xl">IDR20.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 tbt:mt-0 tbt:w-1/2 tbt:mr-5">
            <h2 className="md:text-2xl font-semibold">Order Information</h2>
            <div className="mt-4">
              <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                <div className="flex">
                  <img className="flex mr-1" width="15" height="15" src={nameIcon} alt="name-icon" />
                  <p className="text-xs font-medium text-lightgray md:text-base">Full Name</p>
                </div>
                <p className="text-xs md:text-base">Ghaluh Wizard Anggoro</p>
              </div>
              <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                <div className="flex">
                  <img className="flex mr-1" width="15" height="15" src={addressIcon} alt="name-icon" />
                  <p className="text-xs font-medium text-lightgray md:text-base">Address</p>
                </div>
                <p className="text-xs md:text-base">Griya Bandung Indah</p>
              </div>
              <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                <div className="flex">
                  <img className="flex mr-1" width="15" height="15" src={phoneIcon} alt="name-icon" />
                  <p className="text-xs font-medium text-lightgray md:text-base">Phone</p>
                </div>
                <p className="text-xs md:text-base">082116304338</p>
              </div>
              <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                <div className="flex">
                  <img className="flex mr-1" width="15" height="15" src={paymentIcon} alt="name-icon" />
                  <p className="text-xs font-medium text-lightgray md:text-base">Payment Method</p>
                </div>
                <p className="text-xs md:text-base">Cash</p>
              </div>
              <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                <div className="flex">
                  <img className="flex mr-1" width="15" height="15" src={shippingIcon} alt="name-icon" />
                  <p className="text-xs font-medium text-lightgray md:text-base">Shipping</p>
                </div>
                <p className="text-xs md:text-base">Dine In</p>
              </div>
              <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                <div className="flex">
                  <img className="flex mr-1" width="15" height="15" src={statusIcon} alt="name-icon" />
                  <p className="text-xs font-medium text-lightgray md:text-base">Status</p>
                </div>
                <p className="text-center py-0.5 px-2 rounded-2xl text-green bg-greenbg text-xs md:text-base">Done</p>
              </div>
              <div className="flex mb-3 font-bold justify-between w-full">
                <p className="text-xs font-medium text-lightgray md:text-base">Total Transaksi</p>
                <p className="text-primary text-xs md:text-base">Idr 40.000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DetailOrder;
