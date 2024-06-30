import React, { useState, useRef } from "react";

import productImg1 from "../assets/images/menu/1.webp";

function CheckoutCard() {
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
  const deleteModalBgRef = useRef<HTMLDivElement>(null);

  const handleDeleteClick = () => {
    setIsModalDeleteVisible(true);
  };

  const handleCancelDeleteClick = () => {
    setIsModalDeleteVisible(false);
  };

  const handleConfirmDeleteClick = () => {
    alert("Item has been deleted!");
    setIsModalDeleteVisible(false);
  };

  const handleBackgroundDeleteClick = (event: React.MouseEvent) => {
    if (event.target === deleteModalBgRef.current) {
      setIsModalDeleteVisible(false);
    }
  };

  return (
    <>
      <div className="font-jakarta flex bg-gray-50 mt-3 py-3 pl-3 justify-between">
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
          <button onClick={handleDeleteClick} className="w-6 2xl:w-6 uw:w-10 h-6 uw:h-10 text-sm uw:text-xl font-bold text-red-500 border-2 uw:border-4 border-red-500 rounded-full hover:bg-gray-100 active:bg-gray-200">
            <div className="flex justify-center">
              <p>x</p>
            </div>
          </button>
        </div>
      </div>
      {isModalDeleteVisible && (
        <div ref={deleteModalBgRef} onClick={handleBackgroundDeleteClick} className="show z-10 fixed inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-md uw:max-w-2xl w-3/4 tbt:w-full text-center">
            <h2 className="text-sm tbt:text-2xl uw:text-4xl font-semibold mb-4">Confirm Delete</h2>
            <p className="text-xs xsm:text-sm tbt:text-base uw:text-2xl mb-6">Are you sure you want to delete item?</p>
            <div className="flex justify-center">
              <button onClick={handleConfirmDeleteClick} className="text-xs tbt:text-base uw:text-2xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-4 py-2 rounded mr-2">
                Delete
              </button>
              <button onClick={handleCancelDeleteClick} className="text-xs tbt:text-base uw:text-2xl bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CheckoutCard;
