import React, { useRef, useState } from "react";

function CheckoutButton() {
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
    <>
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
    </>
  );
}

export default CheckoutButton;
