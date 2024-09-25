import Image from "next/image";

export default function StatCard({ icon, value, description, badgeText }) {
    return (
      <div className="flex flex-col gap-3 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-row justify-between">
          <Image src={icon} alt="icon" width={25} height={5} />

          <p className="bg-orange cursor-pointer text-center text-white rounded-md font-semibold text-xs px-5 py-2">{badgeText}</p>
        </div>
        <h2 className="text-3xl font-semibold">{value}</h2>
        <p className="text-base text-gray-300">{description}</p>
      </div>
    );
  }