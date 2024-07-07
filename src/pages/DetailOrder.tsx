import Header from "../components/Header";
import Footer from "../components/Footer";

import phoneIcon from "../assets/images/phone-icon.svg";
import nameIcon from "../assets/images/form-icon.svg";
import addressIcon from "../assets/images/address-icon.svg";
import paymentIcon from "../assets/images/payment-icon.svg";
import shippingIcon from "../assets/images/shipping-icon.svg";
import statusIcon from "../assets/images/status-icon.svg";
import CheckoutCard from "../components/CheckoutCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useStoreSelector } from "../redux/hooks";

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
  interface IOrder {
    id: string;
    uuid: string;
    full_name: string;
    address?: string;
    phone?: string;
    payment_method: string;
    delivery_method: string;
    status: string;
    grand_total: string;
  }

  const { uuid } = useParams<{ uuid: string }>();
  const [getOrder, setOrder] = useState<IOrder[]>([]);
  const { token } = useStoreSelector((state) => state.auth);

  useEffect(() => {
    const getDetailOrder = async () => {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/order`;
      try {
        console.log(token);
        const result = await axios.get(`${url}/${uuid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrder(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailOrder();
  }, [uuid, token]);

  return (
    <main className="font-jakarta mt-[15%] uw:mt-[5%] lg:mt-[7%] tbt:mt-[10%]">
      <section className="px-[5%] tbt:px-[10%]">
        {getOrder.map((order) => (
          <div key={order.uuid}>
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">IOrder {order.id}</h1>
            <p className="mt-2 text-lightgray text-xs">21 March 2024 at 10.30 AM</p>
            <div className="inline-block mt-2 tbt:flex tbt:flex-row-reverse tbt:justify-between">
              <div className="tbt:w-1/2">
                <h2 className="font-semibold md:text-2xl">Your IOrder</h2>
                <CheckoutCard />
                <CheckoutCard />
              </div>
              <div className="mt-5 tbt:mt-0 tbt:w-1/2 tbt:mr-5">
                <h2 className="md:text-2xl font-semibold">IOrder Information</h2>
                <div className="mt-4">
                  <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                    <div className="flex">
                      <img className="flex mr-1" width="15" height="15" src={nameIcon} alt="name-icon" />
                      <p className="text-xs font-medium text-lightgray md:text-base">Full Name</p>
                    </div>
                    <p className="text-xs md:text-base">{order.full_name}</p>
                  </div>
                  <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                    <div className="flex">
                      <img className="flex mr-1" width="15" height="15" src={addressIcon} alt="name-icon" />
                      <p className="text-xs font-medium text-lightgray md:text-base">Address</p>
                    </div>
                    <p className="text-xs md:text-base">{order.address}</p>
                  </div>
                  <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                    <div className="flex">
                      <img className="flex mr-1" width="15" height="15" src={phoneIcon} alt="name-icon" />
                      <p className="text-xs font-medium text-lightgray md:text-base">Phone</p>
                    </div>
                    <p className="text-xs md:text-base">{order.phone}</p>
                  </div>
                  <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                    <div className="flex">
                      <img className="flex mr-1" width="15" height="15" src={paymentIcon} alt="name-icon" />
                      <p className="text-xs font-medium text-lightgray md:text-base">Payment Method</p>
                    </div>
                    <p className="text-xs md:text-base">{order.payment_method}</p>
                  </div>
                  <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                    <div className="flex">
                      <img className="flex mr-1" width="15" height="15" src={shippingIcon} alt="name-icon" />
                      <p className="text-xs font-medium text-lightgray md:text-base">Shipping</p>
                    </div>
                    <p className="text-xs md:text-base">{order.delivery_method}</p>
                  </div>
                  <div className="flex mb-3 font-bold justify-between w-full border-b pb-3">
                    <div className="flex">
                      <img className="flex mr-1" width="15" height="15" src={statusIcon} alt="name-icon" />
                      <p className="text-xs font-medium text-lightgray md:text-base">Status</p>
                    </div>
                    <p className="text-center py-0.5 px-2 rounded-2xl text-green bg-greenbg text-xs md:text-base">{order.status}</p>
                  </div>
                  <div className="flex mb-3 font-bold justify-between w-full">
                    <p className="text-xs font-medium text-lightgray md:text-base">Total Transaksi</p>
                    <p className="text-primary text-xs md:text-base">Idr {order.grand_total}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default DetailOrder;
