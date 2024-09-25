import Image from "next/image";
import PricesTable from "../Prices/PricesTable";
import Sidebar from "../Layouts/Sidebar";
import { useState } from "react";

export default function PricesManagementComponent() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="flex relative flex-col h-screen mt-64 p-5 rounded-t-xl mx-16">
      <div className="-mt-48 bg-chocolate-white mx-10 h-10 rounded-t-xl"></div>
      <div className="flex flex-1 bg-chocolate-red rounded-t-xl">
        
        <Sidebar />

        
        <main className="flex-1 p-6 bg-gray-white rounded-t-xl">
          <h2 className="text-2xl font-semibold my-9">Prices Management</h2>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 text-gray-300 p-3 bg-white rounded">
              <button className="text-black-gray">All orders</button>
              <button>In progress</button>
              <button>Completed</button>
              <button>Canceled</button>
            </div>

            <div 
                onClick={handlePopupOpen} className="bg-orange p-3 rounded gap-2 text-white flex flex-row items-center">
              <Image
                src="/assets/icons/mail-white.png"
                alt="mail-icon"
                width={15}
                height={15}
              />
              <button className="text-sm">New Basket</button>
            </div>
          </div>

          <div className="flex flex-row justify-between mb-4 mt-6">
            <div className="pl-2 rounded-xl border border-gray-75 bg-white">
              <input
                className="p-2 bg-transparent"
                type="search"
                name="searchuser"
                id="searchuser"
                placeholder="Search by user name"
              />
            </div>

            <div className="flex flex-row gap-2 items-center text-chocolate-red rounded border border-gray-75 bg-white p-2">
              <span>Show/Hide Columns</span>
              <Image
                src="/assets/icons/chevron-down-red.png"
                alt="chevron-down-red"
                width={20}
                height={20}
              />
            </div>
          </div>

          <PricesTable />

          {isPopupOpen && (
            <div className="fixed inset-0 bg-black-gray bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Edit Baskets Price</h2>
                <p className="text-sm text-gray-250">
                FIllin the following information to creat a new surprise basket
                </p>


                <form>
                <div className="mb-4">
                    <label className="block text-gray-700 my-3">Price</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-75 rounded-md"
                      placeholder="12"
                    />
                  </div>

                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      className="bg-white border border-gray-100 px-4 py-2 rounded-md"
                      onClick={handlePopupClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-orange text-white px-4 py-2 rounded-md"
                    >
                      Add Basket
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
