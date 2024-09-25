import Image from "next/image";
import CircularGraph from "./utils/CircularGraph";
import Sidebar from "./Layouts/Sidebar";
import Link from "next/link";

export default function HomeComponent() {
  return (
    <div className="flex relative flex-col h-screen mt-64 p-5 rounded-t-xl mx-16">
      <div className="-mt-48 bg-chocolate-white mx-10 h-10 rounded-t-xl"></div>
      <div className="flex flex-1 bg-chocolate-red rounded-t-xl">
        
        <Sidebar />

        
        <main className="flex-1 p-6 bg-gray-white rounded-t-xl">
          <h2 className="text-2xl font-semibold my-9">Home</h2>

          <div className="container flex flex-row items-center justify-end gap-6">
            <span className="text-lg font-medium">Sales by period</span>
            <Link className="text-sm font-medium hover:underline" href="#">Show more</Link>
          </div>

          <div className="container flex flex-row gap-5 flex-1 rounded-t-xl p-8">
            <div className="flex flex-row gap-10 p-10 bg-white rounded-lg shadow-md">
              <div className="flex flex-col gap-5">
                <Image src="/assets/icons/circle-icon.png" width={35} height={35} />
                <div className="flex flex-row gap-4 items-center">
                  <h2 className="text-gray-600 text-xs text-gray-200">Total revenue</h2>
                  <div>
                    <Image src="/assets/icons/total.png" width={15} height={15} />
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-center">
                  <h1 className="text-2xl font-medium text-gray-150">$1,413.10</h1>
                  <Image src="/assets/icons/refresh.png" width={15} height={15} />
                </div>
                <p className="text-xs text-gray-200">Last updated 1 hour ago</p>

                <div className="flex flex-row rounded-3xl border border-gray-10">
                  <input
                    className="pl-3 bg-transparent placeholder:text-gray-250 placeholder:text-xs"
                    type="search"
                    name="download"
                    id="download"
                    placeholder="Download Report"
                  />
                  <button className="bg-chocolate-red text-white p-2 rounded-full">
                    <Image
                      src="/assets/icons/arrow-right.png"
                      alt="arrow-right"
                      width={75}
                      height={75}
                    />
                  </button>
                </div>
              </div>

              <div>
                <img src="/assets/icons/HomeSeparator.png" alt="separator" />
              </div>

              <div>
                <div className="">
                  <div className="flex justify-center items-center">
                    <div className="bg-gray-50 space-x-2 p-1 rounded text-sm font-medium mb-12">
                      <button className="bg-chocolate-red text-white hover:text-chocolate-red hover:bg-white px-4 py-1 rounded">
                        Monthy
                      </button>
                      <button className="text-gray-300 hover:text-chocolate-red hover:bg-white px-4 py-1 rounded">
                        Weekly
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-nowrap mr-7">
                      <h3 className="text-gray-5 text-base font-medium">Paniers total</h3>
                      <p className="text-base font-medium text-gray-400">500</p>
                    </div>

                    <div className="text-nowrap mr-7">
                      <h3 className="text-gray-5 text-base font-medium">Paniers</h3>
                      <p className="text-base font-medium text-gray-400">480</p>
                    </div>

                    <div className="text-nowrap mr-7">
                      <h3 className="text-gray-5 text-base font-medium">Unapid loan</h3>
                      <p className="text-base font-medium text-gray-400">4,501</p>
                    </div>

                    <div className="text-nowrap mr-7">
                      <h3 className="text-gray-5 text-base font-medium">Clients actives</h3>
                      <p className="text-base font-medium text-gray-400">+500</p>
                    </div>

                    <div className="text-nowrap mr-7">
                      <h3 className="text-gray-5 text-base font-medium">Commercants</h3>
                      <p className="text-base font-medium text-gray-400">+100</p>
                    </div>

                    <div className="text-nowrap mr-7">
                      <h3 className="text-gray-5 text-base font-medium">Unapid loan</h3>
                      <p className="text-base font-medium text-gray-400">4,501</p>
                    </div>

                    <div className="text-nowrap mr-7">
                      <h3 className="text-gray-5 text-base font-medium">Commands</h3>
                      <p className="text-base font-medium text-gray-400">515</p>
                    </div>

                    <div className="text-nowrap mr-7">
                      <h3 className="text-gray-5 text-base font-medium">Acceptées</h3>
                      <p className="text-base font-medium text-gray-400">483</p>
                    </div>

                    <div className="text-nowrap mr-7">
                      <h3 className="text-gray-5 text-base font-medium">Rejetés</h3>
                      <p className="text-base font-medium text-gray-400">32</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CircularGraph />
              <div className="mt-4 space-y-2 text-lg text-gray-5">
                <div className="flex justify-between items-center">
                  <div className="flex flex-row">
                    <div className="h-6 w-6 bg-rose-white rounded-full mr-2"></div>
                    Small
                  </div>
                  <p>14%</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-row">
                    <div className="h-6 w-6 bg-chocolate-white rounded-full mr-2"></div>
                    Medium
                  </div>
                  <p>16%</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-row">
                    <div className="h-6 w-6 bg-chocolate rounded-full mr-2"></div>
                    Large
                  </div>
                  <p>70%</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
