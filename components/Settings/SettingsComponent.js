import Image from "next/image";
import Sidebar from "../Layouts/Sidebar";
import SettingsTable from "../Settings/SettingsTable";

export default function SettingsComponent() {
  return (
    <div className="flex relative flex-col h-screen mt-64 p-5 rounded-t-xl mx-16">
      <div className="-mt-52 bg-chocolate-white mx-10 h-10 rounded-t-xl"></div>

      <div className="flex flex-1 bg-chocolate-red rounded-t-xl">
        
        <Sidebar />

        
        <main className="flex-1 p-8 bg-gray-white rounded-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Settings
          </h2>

          <div className="container flex flex-row gap-9">
            <section className="mb-12 w-80 h-80 bg-white rounded px-4 py-6">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-center items-center space-x-2">
                  <Image
                    src="/assets/images/avatar.png"
                    alt="avatar-icon"
                    width={35}
                    height={35}
                  />
                  <div>
                    <h4 className="text-base text-gray-300">User name</h4>
                    <p className="text-sm text-gray-250">subheading</p>
                  </div>
                </div>
                <div className="cursor-pointer">
                  <Image
                    src="/assets/icons/more-horizontal.png"
                    alt="more-horizontal-icon"
                    width={15}
                    height={15}
                  />
                </div>
              </div>

              <div className="mt-14 space-y-4">
                <div className="flex flex-row gap-2 px-4 py-2 space-x-2 cursor-pointer rounded bg-gray-50 text-black-gray">
                  <Image
                    src="/assets/icons/mail.png"
                    alt="mail-icon"
                    width={15}
                    height={15}
                  />
                  <p className="text-gray-300 text-sm font-medium">
                    General Settings
                  </p>
                </div>
                <div className="flex flex-row gap-2 px-4 py-2 space-x-2 cursor-pointer rounded items-center bg-white hover:bg-gray-50 text-black-gray">
                  <Image
                    src="/assets/icons/mail.png"
                    alt="mail-icon"
                    width={15}
                    height={15}
                  />
                  <p className="text-gray-400 text-sm font-medium">
                    Security Settings
                  </p>
                </div>
                <div className="flex flex-row gap-2 px-4 py-2 space-x-2 cursor-pointer rounded items-center bg-white hover:bg-gray-50 text-black-gray">
                  <Image
                    src="/assets/icons/mail.png"
                    alt="mail-icon"
                    width={15}
                    height={15}
                  />
                  <p className="text-gray-400 text-sm font-medium">
                    Notifications
                  </p>
                </div>
                <div className="flex flex-row gap-2 px-4 py-2 space-x-2 cursor-pointer rounded items-center bg-white hover:bg-gray-50 text-black-gray">
                  <Image
                    src="/assets/icons/mail.png"
                    alt="mail-icon"
                    width={15}
                    height={15}
                  />
                  <p className="text-gray-400 text-sm font-medium">
                    General Preferences
                  </p>
                </div>
              </div>
            </section>

            <div className="flex flex-col">
              <section className="mb-12 bg-white rounded w-full">
                <h3 className="text-sm font-semibold text-gray-400 mb-4 border-b border-b-gray-75 pl-8 py-5">
                  General Settings
                </h3>

                <section className="flex flex-row gap-20 p-8">
                  <form className="flex flex-col gap-6 w-full">
                    <div>
                      <label className="block text-gray-400 text-sm">
                        Company name
                      </label>
                      <input
                        type="text"
                        className="w-full mt-2 p-3 border border-gray-10 rounded-lg"
                        placeholder="Field Name or Example"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm">
                        Welcome message
                      </label>
                      <input
                        type="text"
                        className="w-full mt-2 p-3 border border-gray-10 rounded-lg"
                        placeholder="Field Name or Example"
                      />
                    </div>
                    <button className="bg-orange text-white  hover:text-orange hover:bg-white px-4 py-2 w-fit text-sm rounded-lg font-semibold transition-all">
                      Save Changes
                    </button>
                  </form>

                  <div className="flex flex-col border-2 border-dashed rounded-sm p-2 w-fit border-gray-10 space-y-4">
                    <div className="w-40 h-40 rounded-lg bg-gray-10 flex items-center justify-center">
                      <Image
                        src="/assets/icons/shadowLogo.png"
                        alt="shadowLogo-icon"
                        width={75}
                        height={75}
                      />
                    </div>
                    <button className="bg-orange  hover:text-orange hover:bg-white text-white px-4 py-2 text-sm rounded-lg font-semibold transition-all">
                      Change Logo
                    </button>
                  </div>
                </section>
              </section>

              <section className="bg-white rounded w-full">
                <h3 className="text-sm font-semibold text-gray-400 mb-4 border-b border-b-gray-75 pl-8 py-5">
                  Security Settings
                </h3>

                <div className="p-8">
                  <div className="flex justify-end">
                    <button className="bg-gray-10 text-gray-300 hover:text-black-gray text-sm px-20 py-3 rounded-lg font-semibold transition-all">
                      Add Role
                    </button>
                  </div>

                  <SettingsTable />

                  <div className="pt-32">
                    <button className="bg-orange text-white hover:text-orange hover:bg-white text-sm px-6 py-3 rounded-lg font-semibold transition-all">
                      Save Change
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
