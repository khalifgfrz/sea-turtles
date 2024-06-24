import React, { useState, useEffect, useRef } from "react";

import calenderIcon from "../assets/images/calender-icon.svg";
import downIcon from "../assets/images/down-icon.svg";
import glassIcon from "../assets/images/glass-icon.svg";
import totalIcon from "../assets/images/total-icon.svg";
import statusIcon from "../assets/images/status-icon.svg";
import messageIcon from "../assets/images/message-icon.svg";
import productImg1 from "../assets/images/menu/1.webp";
import productImg2 from "../assets/images/menu/2.webp";
import productImg3 from "../assets/images/menu/3.webp";
import productImg4 from "../assets/images/menu/4.webp";

function HistoryOrder() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdownRef = useRef<HTMLButtonElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDropdownVisible((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (toggleDropdownRef.current && !toggleDropdownRef.current.contains(event.target as Node) && dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target as Node)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <main className="mt-[15%] uw:mt-[5%] lg:mt-[7%] tbt:mt-[10%]">
      <section className="px-[5%] tbt:px-[10%]">
        <div className="flex justify-between tbt:justify-normal tbt:items-center">
          <h1 className="items-center justify-center font-bold font-jakarta text-xl md:text-4xl tbt:mr-2">History Order</h1>
          <div className="flex justify-center bg-darkgray2 w-5 h-full">
            <p className="font-bold text-sm">2</p>
          </div>
        </div>
        <div className="inline-block w-full mt-2 tbt:flex">
          <div className="tbt:w-3/4 md:w-4/5 lg:w-3/4 tbt:mr-5">
            <div className="w-full inline-block md:flex md:flex-row-reverse md:justify-between">
              <div className="inline-block">
                <button ref={toggleDropdownRef} onClick={handleToggleDropdown} className="bg-darkgray3 text-lightblack2 text-[0.6rem] md:text-[0.7rem] lg:text-xs xl:text-sm 4xl:text-base uw:text-xl hover:bg-darkgray2 active:bg-darkgray">
                  <div className="flex px-2 py-1">
                    <img className="mr-1 lg:w-5 uw:w-7" width="15" height="15" src={calenderIcon} alt="calender-icon" />
                    <p className="font-semibold my-auto mr-1">January 2024</p>
                    <img className="lg:w-5 uw:w-7" width="15" height="15" src={downIcon} alt="down-icon" />
                  </div>
                </button>
                <div
                  ref={dropdownMenuRef}
                  onClick={(event) => event.stopPropagation()}
                  className={`dropdown-content ${isDropdownVisible ? "show" : ""} absolute w-32 lg:w-40 uw:w-52 bg-darkgray3 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none`}
                >
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 font-semibold text-xs xl:text-sm 4xl:text-base uw:text-xl text-lightblack2 hover:bg-darkgray2 active:bg-darkgray">
                      February 2024
                    </a>
                    <a href="#" className="block px-4 py-2 font-semibold text-xs xl:text-sm 4xl:text-base uw:text-xl text-gray-700 hover:bg-darkgray2 active:bg-darkgray">
                      March 2024
                    </a>
                    <a href="#" className="block px-4 py-2 font-semibold text-xs xl:text-sm 4xl:text-base uw:text-xl text-gray-700 hover:bg-darkgray2 active:bg-darkgray">
                      April 2024
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-1 font-semibold flex justify-between bg-darkgray3 text-[0.6rem] md:text-[0.7rem] lg:text-xs xl:text-sm 4xl:text-base uw:text-xl mt-2 md:mt-0">
                <button className="p-1 mx-auto hover:bg-white active:bg-darkwhite2 focus:bg-white">On Progress</button>
                <button className="p-1 mx-auto hover:bg-white active:bg-darkwhite2 focus:bg-white">Sending Goods</button>
                <button className="p-1 mx-auto hover:bg-white active:bg-darkwhite2 focus:bg-white">Finish Order</button>
              </div>
            </div>
            <div className="block mt-3 text-xs lg:text-base uw:text-xl">
              <div className="flex bg-darkgray2 mb-3 pl-3 py-3 px-1">
                <div className="hidden tbt:grid tbt:mr-2">
                  <img className="lg:w-24 uw:w-40" width="90" src={productImg1} alt="menu2" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4">
                  <div className="mb-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={glassIcon} alt="glass-icon" />
                      <p>No.Order</p>
                    </div>
                    <p className="mt-1 font-bold">#12354-09893</p>
                  </div>
                  <div className="mb-4 ml-6 md:ml-0 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={calenderIcon} alt="calender-icon" />
                      <p>Date</p>
                    </div>
                    <p className="mt-1 font-bold">23 January 2024</p>
                  </div>
                  <div className="mb-4 md:mx-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={totalIcon} alt="total-icon" />
                      <p>Total</p>
                    </div>
                    <p className="mt-1 font-bold">Idr 40.000</p>
                  </div>
                  <div className="mb-4 ml-6 md:ml-0 md:mr-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={statusIcon} alt="status-icon" />
                      <p>Status</p>
                    </div>
                    <p className="bg-lightprimary text-primary text-center p-0.5 max-w-24 xl:max-w-32 mt-1 rounded-2xl font-semibold">On Progress</p>
                  </div>
                  <div className="inline-block border-b w-full col-span-2">
                    <a href="#" className="text-primary font-semibold hover:underline active:text-darkprimary">
                      Views Order Detail
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex bg-darkgray2 mb-3 pl-3 py-3 px-1">
                <div className="hidden tbt:grid tbt:mr-2">
                  <img className="lg:w-24 uw:w-40" width="90" src={productImg2} alt="menu2" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4">
                  <div className="mb-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={glassIcon} alt="glass-icon" />
                      <p>No.Order</p>
                    </div>
                    <p className="mt-1 font-bold">#12354-09893</p>
                  </div>
                  <div className="mb-4 ml-6 md:ml-0 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={calenderIcon} alt="calender-icon" />
                      <p>Date</p>
                    </div>
                    <p className="mt-1 font-bold">23 January 2024</p>
                  </div>
                  <div className="mb-4 md:mx-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={totalIcon} alt="total-icon" />
                      <p>Total</p>
                    </div>
                    <p className="mt-1 font-bold">Idr 40.000</p>
                  </div>
                  <div className="mb-4 ml-6 md:ml-0 md:mr-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={statusIcon} alt="status-icon" />
                      <p>Status</p>
                    </div>
                    <p className="bg-lightprimary text-primary text-center p-0.5 max-w-24 xl:max-w-32 mt-1 rounded-2xl font-semibold">On Progress</p>
                  </div>
                  <div className="inline-block border-b w-full col-span-2">
                    <a href="#" className="text-primary font-semibold hover:underline active:text-darkprimary">
                      Views Order Detail
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex bg-darkgray2 mb-3 pl-3 py-3 px-1">
                <div className="hidden tbt:grid tbt:mr-2">
                  <img className="lg:w-24 uw:w-40" width="90" src={productImg3} alt="menu3" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4">
                  <div className="mb-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={glassIcon} alt="glass-icon" />
                      <p>No.Order</p>
                    </div>
                    <p className="mt-1 font-bold">#12354-09893</p>
                  </div>
                  <div className="mb-4 ml-6 md:ml-0 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={calenderIcon} alt="calender-icon" />
                      <p>Date</p>
                    </div>
                    <p className="mt-1 font-bold">23 January 2024</p>
                  </div>
                  <div className="mb-4 md:mx-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={totalIcon} alt="total-icon" />
                      <p>Total</p>
                    </div>
                    <p className="mt-1 font-bold">Idr 40.000</p>
                  </div>
                  <div className="mb-4 ml-6 md:ml-0 md:mr-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={statusIcon} alt="status-icon" />
                      <p>Status</p>
                    </div>
                    <p className="bg-lightprimary text-primary text-center p-0.5 max-w-24 xl:max-w-32 mt-1 rounded-2xl font-semibold">On Progress</p>
                  </div>
                  <div className="inline-block border-b w-full col-span-2">
                    <a href="#" className="text-primary font-semibold hover:underline active:text-darkprimary">
                      Views Order Detail
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex bg-darkgray2 mb-3 pl-3 py-3 px-1">
                <div className="hidden tbt:grid tbt:mr-2">
                  <img className="lg:w-24 uw:w-40" width="90" src={productImg4} alt="menu4" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4">
                  <div className="mb-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={glassIcon} alt="glass-icon" />
                      <p>No.Order</p>
                    </div>
                    <p className="mt-1 font-bold">#12354-09893</p>
                  </div>
                  <div className="mb-4 ml-6 md:ml-0 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={calenderIcon} alt="calender-icon" />
                      <p>Date</p>
                    </div>
                    <p className="mt-1 font-bold">23 January 2024</p>
                  </div>
                  <div className="mb-4 md:mx-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={totalIcon} alt="total-icon" />
                      <p>Total</p>
                    </div>
                    <p className="mt-1 font-bold">Idr 40.000</p>
                  </div>
                  <div className="mb-4 ml-6 md:ml-0 md:mr-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={statusIcon} alt="status-icon" />
                      <p>Status</p>
                    </div>
                    <p className="bg-lightprimary text-primary text-center p-0.5 max-w-24 xl:max-w-32 mt-1 rounded-2xl font-semibold">On Progress</p>
                  </div>
                  <div className="inline-block border-b w-full col-span-2">
                    <a href="#" className="text-primary font-semibold hover:underline active:text-darkprimary">
                      Views Order Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="text-secondary bg-darkgray2 mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">1</button>
              <button className="text-secondary bg-darkgray2 mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">2</button>
              <button className="text-secondary bg-darkgray2 mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">3</button>
              <button className="text-secondary bg-darkgray2 mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">4</button>
              <button className="text-secondary bg-darkgray2 mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">&#9656;</button>
            </div>
          </div>
          <div className="border border-darkgray2 px-5 py-3 mt-4 tbt:mt-0 tbt:w-1/2 tbt:h-1/2">
            <img className="uw:w-14" width="35" height="35" src={messageIcon} alt="message-icon" />
            <h2 className="mt-2 font-bold uw:text-2xl">Send Us Message</h2>
            <p className="text-lightgray text-sm uw:text-2xl mt-1">if your unable to find answer or find your product quickly, please describe your problem and tell us. we will give you solution.</p>
            <button className="text-sm uw:text-2xl w-full h-9 uw:h-14 bg-primary font-semibold rounded mt-2 hover:bg-darkprimary2 active:bg-darkprimary focus:bg-darkprimary2">Send Message</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HistoryOrder;
