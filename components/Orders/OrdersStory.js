import Sidebar from "../Layouts/Sidebar";

export default function OrdersStory() {
  return (
    <div className="flex relative flex-col h-screen mt-64 p-5 rounded-t-xl mx-16">
      <div className="-mt-48 bg-chocolate-white mx-10 h-10 rounded-t-xl"></div>
      <div className="flex flex-1 bg-chocolate-red rounded-t-xl">
        
        <Sidebar />

        
        <main className="flex-1 p-6 bg-gray-white rounded-t-xl">
          <h2 className="text-2xl font-semibold my-9">
            Historique des commandes
          </h2>
            <div className="flex w-1/3 items-center bg-white p-2 rounded mb-6 space-x-2 text-gray-450">
              <button className="text-sm px-4 py-2 text-gray-400 font-semibold">
                All Orders
              </button>
              <button className="text-sm px-4 py-2">Completed</button>
              <button className="text-sm px-4 py-2">Canceled</button>
            </div>

            <div className="flex justify-end items-center gap-2 mb-4 max-w-4xl mx-auto ">
              <button className="text-ms border bg-white border-gray-100 px-4 py-2 rounded-md">
                Back
              </button>
              <button className="text-sm bg-orange text-white  hover:text-orange hover:bg-white px-4 py-2 rounded-md">
                Save as PDF
              </button>
            </div>

            <div className="bg-white w-full max-w-4xl mx-auto rounded-xl p-8 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold text-chocolate-red">
                  Relevé des payments
                </h2>
                <div className="text-right space-y-2">
                  <p className="text-base text-chocolate-red font-medium">
                    Left4code
                  </p>
                  <p className="text-xs text-gray">left4code@gmail.com</p>
                  <p className="text-xs text-gray">
                    8022 Amerige Street Harriman, UT 84095
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 mb-6 pt-32 text-gray">
                <div>
                  <p className="text-gray-700 font-semibold">Client Details</p>
                  <p className="text-chocolate-red">Arnold Schwarzenegger</p>
                  <p>arnodlschwarzenegger@gmail.com</p>
                  <p>260 W. Storm Street New York, NY 10025.</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-700 font-semibold">Receipt</p>
                  <p className="text-chocolate-red">#102934938</p>
                  <p className="text-gray-500">July 10, 2023</p>
                </div>
              </div>

              <div className="my-14">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-xs font-semibold text-gray-200">
                      <th className="border-b py-2">DESCRIPTION</th>
                      <th className="border-b py-2">QTY</th>
                      <th className="border-b py-2">PRICE</th>
                      <th className="border-b py-2">SUBTOTAL</th>
                    </tr>
                  </thead>
                  <tbody className="text-[10.5px] text-gray-200">
                    <tr className="border-b border-b-gray-75">
                      <td className="py-2 text-xs">
                        <p>Midone HTML Admin Template</p>
                        <h5 className="font-semibold">Regular License</h5>
                      </td>
                      <td className="py-2">2</td>
                      <td className="py-2">$9.99</td>
                      <td className="py-2">$19.98</td>
                    </tr>
                    <tr className="border-b border-b-gray-75">
                      <td className="py-2 text-xs">
                        <p>Vuejs Admin Template</p>
                        <h5 className="font-semibold">Regular License</h5>
                      </td>
                      <td className="py-2">1</td>
                      <td className="py-2">$24.99</td>
                      <td className="py-2">$24.99</td>
                    </tr>
                    <tr className="border-b border-b-gray-75">
                      <td className="py-2 text-xs">
                        <p>React Admin Template</p>
                        <h5 className="font-semibold">Regular License</h5>
                      </td>
                      <td className="py-2">1</td>
                      <td className="py-2">$99.99</td>
                      <td className="py-2">$99.99</td>
                    </tr>
                    <tr className="border-b border-b-gray-75">
                      <td className="py-2 text-xs">
                        <p>Laravel Admin Template</p>
                        <h5 className="font-semibold">Regular License</h5>
                      </td>
                      <td className="py-2">1</td>
                      <td className="py-2">$99.99</td>
                      <td className="py-2">$99.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="text-gray-700 font-semibold text-gray-200">
                    Bank Transfer
                  </p>
                  <h5 className="text-chocolate-red text-sm">Elon Musk</h5>
                  <div className="text-gray-350 text-xs">
                    <p>Bank Account:098347234832</p>
                    <p>Code:LFT133243</p>
                  </div>
                </div>
                <div className="text-right text-gray-200">
                  <p className="font-semibold">Total Amount</p>
                  <p className="text-xl text-chocolate-red font-semibold">
                    $324.00
                  </p>
                  <p className="">Taxes includes</p>
                </div>
              </div>
            </div>
        </main>
      </div>
    </div>
  );
}
