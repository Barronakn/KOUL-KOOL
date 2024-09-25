import Link from "next/link";
import StatCard from "../Users/StatCard";
import dynamic from "next/dynamic";
import Image from "next/image";
import Sidebar from "../Layouts/Sidebar";

export default function UsersManagementComponent() {
  const CircularGraph = dynamic(() => import("../utils/CircularGraph"), {
    ssr: false,
  });
  const LineChartComponent = dynamic(() => import("../utils/LineChartComponent"), {
    ssr: false,
  });
  const PieChartComponent = dynamic(() => import("../utils/PieChartComponent"), {
    ssr: false,
  });

  return (
    <div className="flex relative flex-col h-screen mt-64 p-5 rounded-t-xl mx-16">
      <div className="-mt-48 bg-chocolate-white mx-10 h-10 rounded-t-xl"></div>
      <div className="flex flex-1 bg-chocolate-red rounded-t-xl">
        
        <Sidebar />

        
        <main className="flex-1 p-6 bg-gray-white rounded-t-xl">
          <h2 className="text-2xl font-semibold my-9">Users Management</h2>

          <div className="grid grid-cols-3 gap-6 mb-6">
            <StatCard
              icon="/assets/icons/shop-black.png"
              value="+120"
              description="Selled Baskets"
              badgeText="Badge"
            />
            <StatCard
              icon="/assets/icons/CurrencyCircleDollarBlack.png"
              value="$2.5k"
              description="Revenue generated"
              badgeText="Badge"
            />
            <StatCard
              icon="/assets/icons/shop-black.png"
              value="73"
              description="Available baskets"
              badgeText="Badge"
            />
          </div>

          <div className="flex flex-row justify-between items-center mt-12 mb-6">
            <div>
              <h3 className="text-lg text-gray-400 font-semibold">Active users</h3>
            </div>

            <div className="flex flex-row gap-3">
              <div className="flex flex-row items-center justify-end gap-6">
                <span className="text-lg font-medium">Sales by period</span>
                <Link className="text-sm font-medium hover:underline" href="/suppliersmanagement">
                  Show more
                </Link>
              </div>
              <div className="flex flex-row items-center justify-end gap-6">
                <span className="text-lg font-medium">Sales by type</span>
                <Link className="text-sm font-medium hover:underline" href="/coverimages">
                  Show more
                </Link>
              </div>
            </div>
          </div>

          <div className="container flex flex-row gap-6">
=            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-row justify-between items-center pb-3">
                <div className="flex flex-row justify-center items-center gap-3">
                  <div>
                    <h4 className="text-xl text-gray-400">800</h4>
                    <p className="text-base text-gray">This Month</p>
                  </div>
                  <div>
                    <h4 className="text-xl text-gray-400">600</h4>
                    <p className="text-base text-gray">Last Month</p>
                  </div>
                </div>

                <div className="text-sm text-gray-300 p-2 border border-gray-75 rounded flex flex-row gap-2 items-center">
                  Filter by Category 
                  <Image src="/assets/icons/mail.png" alt="mail-icon" width={16} height={16} />
                </div>
              </div>
              <LineChartComponent />
            </div>

            <div className="p-6 w-72 bg-white rounded-lg shadow-lg">
              <div className="ml-10">
              <CircularGraph />
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex flex-row">
                    <div className="h-6 w-6 bg-rose-white rounded-full mr-2"></div>
                    Daily
                  </div>
                  <p>Lorem ipsum</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-row">
                    <div className="h-6 w-6 bg-chocolate-white rounded-full mr-2"></div>
                    Weekly
                  </div>
                  <p>Lorem ipsum</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-row">
                    <div className="h-6 w-6 bg-chocolate rounded-full mr-2"></div>
                    Montly
                  </div>
                  <p>Lorem ipsum</p>
                </div>
              </div>
            </div>

            <div className="p-6 w-72 bg-white rounded-lg shadow-lg">
              <PieChartComponent />

              <div className="mt-4 space-y-2">
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
