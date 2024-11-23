import phoneIcon from "../assets/images/phone-icon.svg";
import nameIcon from "../assets/images/form-icon.svg";
import addressIcon from "../assets/images/address-icon.svg";
import paymentIcon from "../assets/images/payment-icon.svg";
import shippingIcon from "../assets/images/shipping-icon.svg";
import statusIcon from "../assets/images/status-icon.svg";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { detailOrderThunk } from "../redux/slices/detailOrder";

function DetailOrder() {
  const dispatch = useDispatch<AppDispatch>();
  const { order } = useSelector((state: RootState) => state.detailOrder);
  const { uuid } = useParams<{ uuid: string }>();
  const { getProducts } = useSelector((state: RootState) => state.checkout);

  useEffect(() => {
    if (uuid) {
      dispatch(detailOrderThunk(uuid));
    }
  }, [dispatch, uuid]);

  return (
    <main className="font-jakarta mt-[15%] uw:mt-[5%] lg:mt-[7%] tbt:mt-[10%]">
      <section className="px-[5%] tbt:px-[10%]">
        <div key={order?.uuid}>
          <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">Order {order?.id}</h1>
          <p className="mt-2 text-lightgray text-xs">21 March 2024 at 10.30 AM</p>
          <div className="inline-block mt-2 tbt:flex tbt:flex-row-reverse tbt:justify-between">
            <div className="tbt:w-1/2">
              <h2 className="font-semibold md:text-2xl">Your Order</h2>
              {order?.products.map((product) => (
                <div className="font-jakarta flex bg-gray-50 mt-3 py-3 pl-3 justify-between">
                  <div className="flex mr-2 justify-center items-center">
                    <img width="150" height="150" src={product.image} alt="menu1" />
                  </div>
                  <div className="w-3/5 pr-5">
                    <p className="font-bold mb-3 text-sm md:text-lg">{product.product_name}</p>
                    <p className="text-lightgray mb-3 text-xs md:text-base">
                      {product.qty}pcs | {product.size} | {getProducts[0]?.ice ? "Ice" : "Hot"}
                    </p>
                    <div className="flex">
                      <p className="text-primary text-sm md:text-xl">IDR {product.price * product.qty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 tbt:mt-0 tbt:w-1/2 tbt:mr-5">
              <h2 className="md:text-2xl font-semibold">Order Information</h2>
              <div className="mt-4">
                <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                  <div className="flex">
                    <img className="flex mr-1" width="15" height="15" src={nameIcon} alt="name-icon" />
                    <p className="text-xs font-medium text-lightgray md:text-base">Full Name</p>
                  </div>
                  <p className="text-xs md:text-base">{order?.full_name || "N/A"}</p>
                </div>
                <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                  <div className="flex">
                    <img className="flex mr-1" width="15" height="15" src={addressIcon} alt="name-icon" />
                    <p className="text-xs font-medium text-lightgray md:text-base">Address</p>
                  </div>
                  <p className="text-xs md:text-base">{order?.address || "N/A"}</p>
                </div>
                <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                  <div className="flex">
                    <img className="flex mr-1" width="15" height="15" src={phoneIcon} alt="name-icon" />
                    <p className="text-xs font-medium text-lightgray md:text-base">Phone</p>
                  </div>
                  <p className="text-xs md:text-base">{order?.phone || "N/A"}</p>
                </div>
                <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                  <div className="flex">
                    <img className="flex mr-1" width="15" height="15" src={paymentIcon} alt="name-icon" />
                    <p className="text-xs font-medium text-lightgray md:text-base">Payment Method</p>
                  </div>
                  <p className="text-xs md:text-base">{order?.payment_method || "N/A"}</p>
                </div>
                <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                  <div className="flex">
                    <img className="flex mr-1" width="15" height="15" src={shippingIcon} alt="name-icon" />
                    <p className="text-xs font-medium text-lightgray md:text-base">Shipping</p>
                  </div>
                  <p className="text-xs md:text-base">{order?.delivery_method || "N/A"}</p>
                </div>
                <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                  <div className="flex">
                    <img className="flex mr-1" width="15" height="15" src={statusIcon} alt="name-icon" />
                    <p className="text-xs font-medium text-lightgray md:text-base">Status</p>
                  </div>
                  <p className="text-center py-0.5 px-2 rounded-2xl text-green bg-greenbg text-xs md:text-base">{order?.status || "N/A"}</p>
                </div>
                <div className="flex mb-3 font-bold justify-between w-full">
                  <p className="text-xs font-medium text-lightgray md:text-base">Total Transaksi</p>
                  <p className="text-primary text-xs md:text-base">Idr {order?.grand_total || 0}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DetailOrder;
