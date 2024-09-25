import { useState } from "react";
import Image from "next/image";
import Sidebar from "../Layouts/Sidebar";
import SuppliersTable from "../Suppliers/SuppliersTable";

export default function SuppliersManagementComponent() {
  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);

  const handleFirstPopupOpen = () => {
    setIsFirstPopupOpen(true);
  };

  const handleFirstPopupClose = () => {
    setIsFirstPopupOpen(false);
  };

  const handleFirstPopupSubmit = (e) => {
    e.preventDefault();
    setIsFirstPopupOpen(false);
    setIsSecondPopupOpen(true);
  };

  const handleSecondPopupClose = () => {
    setIsSecondPopupOpen(false);
  };

  return (
    <div className="flex relative flex-col h-screen mt-64 p-5 rounded-t-xl mx-16">
      <div className="-mt-48 bg-chocolate-white mx-10 h-10 rounded-t-xl"></div>
      <div className="flex flex-1 bg-chocolate-red rounded-t-xl">
        
        <Sidebar />

        
        <main className="flex-1 p-6 bg-gray-white rounded-t-xl">
          <h2 className="text-2xl font-semibold my-9">Suppliers management</h2>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 text-gray-300 p-3 bg-white rounded">
              <button className="text-black-gray">All orders</button>
              <button>In progress</button>
              <button>Completed</button>
              <button>Canceled</button>
            </div>

            <div
              className="bg-orange p-3 rounded gap-2 text-white flex flex-row items-center"
              onClick={handleFirstPopupOpen}
            >
              <Image
                src="/assets/icons/white-plus.png"
                alt="plus-icon"
                width={15}
                height={15}
              />
              <button className="text-sm">New supplier</button>
            </div>
          </div>

          <div className="flex flex-row justify-between mb-4 mt-6">
            <div className="rounded-3xl border border-gray-75 bg-white">
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

          <SuppliersTable />

          {isFirstPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Add New Supplier</h2>
                <p className="text-sm text-gray-250">
                  FIllin the following information to creat a new surprise
                  basket
                </p>

                <form onSubmit={handleFirstPopupSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700">Company</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-100 rounded-md"
                      placeholder="Field Name or Example"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="my-3 block text-gray-700">Category</label>

                    <div className="flex flex-row space-x-2">
                      <button className=" bg-white border border-gray-100 px-4 py-2 rounded-md">
                        Restaurant
                      </button>
                      <button className=" bg-white border border-gray-100 px-4 py-2 rounded-md">
                        Supplier
                      </button>
                      <button className=" bg-white border border-gray-100 px-4 py-2 rounded-md">
                        Trainer
                      </button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Adress</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-100 rounded-md"
                      placeholder="Field Name or Example"
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      className="bg-gray-500 text-black-gray border border-gray-100 px-4 py-2 rounded-md"
                      onClick={handleFirstPopupClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-orange text-white px-4 py-2 rounded-md"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {isSecondPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">
                  Add contact details
                </h2>
                <p className="text-sm text-gray-250">
                  FIllin the following information to creat a new surprise
                  basket
                </p>
                <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Contact</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-100 rounded-md"
                      placeholder="Field Name or Example"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-100 rounded-md"
                      placeholder="Field Name or Example"
                    />
                  </div>
                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      type="button"
                      className="bg-gray-500 text-black-gray border border-gray-100 px-4 py-2 rounded-md"
                      onClick={handleSecondPopupClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="bg-orange text-white px-4 py-2 rounded-md"
                      onClick={handleSecondPopupClose}
                    >
                      Add Supplier
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
