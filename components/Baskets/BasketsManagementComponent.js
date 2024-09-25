import { useState } from "react";
import Image from "next/image";
import BasketsTable from "../Baskets/BasketsTable";
import Sidebar from "../Layouts/Sidebar";

export default function BasketsManagementComponent() {
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

        
        <main className="flex-1 p-6 bg-white rounded-t-xl">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold my-9">Baskets Management</h2>

            <div>
              <button
                className="text-sm bg-orange px-4 py-2 text-white hover:text-orange hover:bg-white rounded-md"
                onClick={handlePopupOpen}
              >
                Add New Baskets
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between mb-6">
            <form className="flex flex-row gap-3 items-center" action="#">
              <label className="text-gray-400 text-base" htmlFor="">
                Rechercher
              </label>
              <select
                name="status"
                value="status"
                className="text-sm text-gray-300 bg-white border p-2 rounded-md"
              >
                <option value="all">Nom</option>
                <option value="in-progress">User name</option>
                <option value="done">User name</option>
                <option value="canceled">User name</option>
              </select>

              <label className="text-gray-400 text-base" htmlFor="">
                Filtrer
              </label>
              <select
                name="status"
                value="status"
                className="text-sm text-gray-300 bg-white border p-2 rounded-md"
              >
                <option value="all">All</option>
                <option value="in-progress">In progress</option>
                <option value="done">Done</option>
                <option value="canceled">Canceled</option>
              </select>
            </form>

            <div className="flex flex-row items-center gap-4 text-sm">
              <button className="bg-orange px-4 py-2 text-white hover:text-orange hover:bg-white rounded-md">
                Go
              </button>
              <button
                onClick={() => setFilter({ name: "", status: "all" })}
                className="bg-gray-50 px-4 py-2 rounded-md"
              >
                Reset
              </button>
            </div>

            <div className="flex gap-4 text-sm">
              <button className="flex flex-row items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-md">
                <Image
                  src="/assets/icons/print.png"
                  alt="print-icon"
                  width={15}
                  height={15}
                />
                <span>Print</span>
              </button>
              <button className="flex flex-row items-center gap-2 bg-gray-50 px-4 py-2 rounded-md">
                <Image
                  src="/assets/icons/saveas.png"
                  alt="saveas-icon"
                  width={10}
                  height={10}
                />
                <span>Export</span>
                <Image
                  src="/assets/icons/chevron-down.png"
                  alt="chevron-down-icon"
                  width={15}
                  height={15}
                />
              </button>
            </div>
          </div>

          <BasketsTable />

          {isPopupOpen && (
            <div className="fixed inset-0 bg-black-gray bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Add New Baskets</h2>
                <p className="text-sm text-gray-250">
                  FIllin the following information to creat a new surprise
                  basket
                </p>

                <form>
                  <div className="mb-4">
                    <label className="my-3 block text-gray-700">Size</label>

                    <div className="flex flex-row space-x-2">
                      <button className=" bg-white border border-gray-100 px-4 py-2 rounded-md">
                        Small
                      </button>
                      <button className=" bg-white border border-gray-100 px-4 py-2 rounded-md">
                        Medium
                      </button>
                      <button className=" bg-white border border-gray-100 px-4 py-2 rounded-md">
                        Large
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="my-3 block text-gray-700">
                      Describe the basket
                    </label>

                    <textarea
                      name="describe"
                      className="w-full px-3 py-2 border rounded-md placeholder:text-gray-200 border-gray-75"
                      placeholder="Breifly describe the basket "
                      id="describe"
                      cols="30"
                    ></textarea>
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
