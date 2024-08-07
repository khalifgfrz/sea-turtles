import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStoreDispatch } from "../redux/hooks";
import { authAction } from "../redux/slices/auth";
import dashboardIcon from "../assets/images/dashboard.svg";
import productIcon from "../assets/images/product.svg";
import orderIcon from "../assets/images/order.svg";
import userIcon from "../assets/images/user.svg";
import logoutIcon from "../assets/images/logout.svg";

function SidebarAdmin() {
  const logoutModalBgRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const { logout } = authAction;
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const handleClickOutside = (event: React.MouseEvent) => {
    if (event.target === logoutModalBgRef.current) {
      setShowModal(false);
    }
  };

  const handleLogout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    setShowModal(false);
    navigate("/login");
  };

  return (
    <>
      <main className="hidden md:inline-block pl-[3%] pr-3 py-6 text-sm text-gray-600 bg-white border-r border-gray-200 border-solid w-[200px] font-jakarta">
        <div className="inline-block w-full">
          <Link to="#">
            <button className="w-full h-7 items-center mb-2 flex rounded-md hover:bg-primary focus:bg-primary">
              <img width="20" height="20" src={dashboardIcon} />
              <div className="ml-2 text-xs font-semibold text-black">Dashboard</div>
            </button>
          </Link>
          <Link to="#">
            <button className="w-full h-7 items-center mb-2 flex rounded-md hover:bg-primary focus:bg-primary">
              <img width="20" height="20" src={productIcon} />
              <div className="ml-2 text-xs font-semibold text-black">Product</div>
            </button>
          </Link>
          <Link to="#">
            <button className="w-full h-7 items-center mb-2 flex rounded-md hover:bg-primary focus:bg-primary">
              <img width="20" height="20" src={orderIcon} />
              <div className="ml-2 text-xs font-semibold text-black">Order</div>
            </button>
          </Link>
          <Link to="#">
            <button className="w-full h-7 items-center mb-2 flex rounded-md hover:bg-primary focus:bg-primary">
              <img width="20" height="20" src={userIcon} />
              <div className="ml-2 text-xs font-semibold text-black">User</div>
            </button>
          </Link>
          <button onClick={handleLogout} className="w-full h-7 items-center flex rounded-md hover:bg-primary focus:bg-primary">
            <img width="20" height="20" src={logoutIcon} />
            <div className="ml-2 text-xs font-semibold text-black">Keluar</div>
          </button>
        </div>
        {showModal && (
          <div ref={logoutModalBgRef} onClick={handleClickOutside} className="show fixed z-50 inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg max-w-md uw:max-w-2xl w-3/4 tbt:w-full text-center">
              <h2 className="text-sm tbt:text-2xl uw:text-4xl font-semibold mb-4">Confirm Log Out</h2>
              <p className="text-xs xsm:text-sm tbt:text-base uw:text-2xl mb-6">Are you sure you want to log out?</p>
              <div className="flex justify-center">
                <button onClick={handleConfirmLogout} className="text-xs tbt:text-base uw:text-2xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-4 py-2 rounded mr-2">
                  Log Out
                </button>
                <button onClick={handleCloseModal} className="text-xs tbt:text-base uw:text-2xl bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white px-4 py-2 rounded">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default SidebarAdmin;
