import Sidebar from "../Layouts/Sidebar";
import Image from "next/image";
import UsersStoryTable from "../Users/UsersStoryTable";
import Link from "next/link";

export default function UsersStoryComponent() {
  return (
    <div className="flex relative flex-col h-screen mt-64 p-5 rounded-t-xl mx-16">
    <div className="-mt-48 bg-chocolate-white mx-10 h-10 rounded-t-xl"></div>
    <div className="flex flex-1 bg-chocolate-red rounded-t-xl">
        
        <Sidebar />

        
        <main className="flex-1 p-6 bg-gray-white rounded-t-xl">
          <h2 className="text-2xl font-semibold my-9">Historique des commandes</h2>

          <Link href="/orderstory" className="flex flex-row justify-end mb-3">
              <button className="flex flex-row space-x-1 items-center bg-orange px-4 py-2 text-white rounded-md">
                <Image src="/assets/icons/mail-white.png" width={20} height={20} />
                <span>Voire le relevée</span>
              </button>
            </Link>

          <div className="flex flex-row justify-between mb-6">
            <form className="flex flex-row gap-3 items-center" action="#">
              <label className="text-gray-400 text-base" htmlFor="">Rechercher</label>
              <select
                name="status"
                value="status"
                className="text-sm text-gray-300  bg-white border p-2 rounded-md"
              >
                <option value="all">Nom</option>
                <option value="in-progress">User name</option>
                <option value="done">User name</option>
                <option value="canceled">User name</option>
              </select>

              <label className="text-gray-400 text-base" htmlFor="">Filtrer</label>
              <select
                name="status"
                value="status"
                className="text-sm text-gray-300  bg-white border p-2 rounded-md"
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
                <Image src="/assets/icons/print.png" alt="print-icon" width={15} height={15} />
                <span>Print</span>
                </button>
              <button className="flex flex-row items-center gap-2 bg-gray-50 px-4 py-2 rounded-md">
                <Image src="/assets/icons/saveas.png" alt="saveas-icon" width={10} height={10} />
                <span>Export</span>
                <Image src="/assets/icons/chevron-down.png" alt="chevron-down-icon" width={15} height={15} />
              </button>
            </div>
          </div>

          <UsersStoryTable />
        </main>
      </div>
    </div>
  );
}
