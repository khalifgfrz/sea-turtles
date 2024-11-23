import { useEffect } from "react";

import calenderIcon from "../assets/images/calender-icon.svg";
import glassIcon from "../assets/images/glass-icon.svg";
import totalIcon from "../assets/images/total-icon.svg";
import statusIcon from "../assets/images/status-icon.svg";
import messageIcon from "../assets/images/message-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { historyThunk } from "../redux/slices/history";
import { AppDispatch, RootState } from "../redux/store";

function HistoryOrder() {
  const dispatch = useDispatch<AppDispatch>();
  const { history } = useSelector((state: RootState) => state.history);

  useEffect(() => {
    dispatch(historyThunk());
  }, [dispatch]);

  return (
    <main className="font-jakarta mt-[15%] uw:mt-[5%] lg:mt-[7%] tbt:mt-[10%]">
      <section className="px-[5%] tbt:px-[10%]">
        <div className="flex justify-between tbt:justify-normal tbt:items-center">
          <h1 className="items-center justify-center font-bold font-jakarta text-xl md:text-4xl tbt:mr-2">History Order</h1>
        </div>
        <div className="inline-block w-full mt-2 tbt:flex">
          <div className="tbt:w-3/4 md:w-4/5 lg:w-3/4 tbt:mr-5">
            {history.map((history) => (
              <div className="flex bg-darkgray2 mb-3 pl-3 py-3 px-1 mt-3 text-xs lg:text-base">
                <div className="grid grid-cols-2 md:grid-cols-4">
                  <div className="mb-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={glassIcon} alt="glass-icon" />
                      <p>No.Order</p>
                    </div>
                    <p className="mt-1 font-bold">{history.id}</p>
                  </div>
                  <div className="mb-4 ml-6 md:ml-0 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={calenderIcon} alt="calender-icon" />
                      <p>Date</p>
                    </div>
                    <p className="mt-1 font-bold">{history.created_at}</p>
                  </div>
                  <div className="mb-4 md:mx-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={totalIcon} alt="total-icon" />
                      <p>Total</p>
                    </div>
                    <p className="mt-1 font-bold">Idr. {history.grand_total}</p>
                  </div>
                  <div className="mb-4 ml-6 md:ml-0 md:mr-4 inline-block">
                    <div className="flex text-lightgray">
                      <img className="mr-1" width="13" height="13" src={statusIcon} alt="status-icon" />
                      <p>Status</p>
                    </div>
                    <p className="bg-lightprimary text-primary text-center p-0.5 max-w-24 xl:max-w-32 mt-1 rounded-2xl font-semibold">{history.status}</p>
                  </div>
                  <div className="inline-block border-b w-full col-span-2">
                    <a href="#" className="text-primary font-semibold hover:underline active:text-darkprimary">
                      Views Order Detail
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-darkgray2 px-5 py-3 mt-4 tbt:mt-0 tbt:w-1/2 tbt:h-1/2">
            <img className="uw:w-14" width="35" height="35" src={messageIcon} alt="message-icon" />
            <h2 className="mt-2 font-bold">Send Us Message</h2>
            <p className="text-lightgray text-sm mt-1">if your unable to find answer or find your product quickly, please describe your problem and tell us. we will give you solution.</p>
            <button className="text-sm w-full h-9 uw:h-14 bg-primary font-semibold rounded mt-2 hover:bg-darkprimary2 active:bg-darkprimary focus:bg-darkprimary2">Send Message</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HistoryOrder;
