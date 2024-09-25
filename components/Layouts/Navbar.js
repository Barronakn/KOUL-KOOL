import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="h-16 flex items-center justify-between px-12 border-b border-b-white">
      <div className="flex flex-row gap-2 justify-center items-center">
        <Image src="/assets/icons/logo.png" alt="Logo" width={50} height={25} />
        <Image
          src="/assets/icons/separator.png"
          alt="separator-icon"
          width={1}
          height={5}
        />
        <ul className="flex flex-row gap-2 items-center">
          <li>
            <a className="text-sm hover:underline text-white" href="">
              Home
            </a>
          </li>
          <span className="text-white">›</span>
          <li>
            <a className="text-sm hover:underline text-white" href="">
              ...
            </a>
          </li>
          <span className="text-white">›</span>
          <li>
            <a className="text-sm hover:underline text-white" href="">
              Components
            </a>
          </li>
          <span className="text-white">›</span>
          <li>
            <a className="text-sm hover:underline text-white" href="">
              Breadcrumb
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-row justify-center items-center gap-6">
        <div className="bg-white pl-3 flex flex-row space-x-1 items-center py-2 rounded-3xl">
        <Image src="/assets/icons/search.png" alt="search-icon" width={15} height={15} />
        <input
          className="pl-3 bg-transparent placeholder:text-black-gray"
          type="search"
          name="search"
          id="search"
          placeholder="Button Label"
        />
        </div>
        <button className="bg-white hover:bg-orange p-2 rounded">
          <Image
            className="cursor-pointer"
            src="/assets/icons/plus.png"
            alt="plus-icon"
            width={20}
            height={20}
          />
        </button>
        <Image
          src="/assets/images/avatar.png"
          alt="avatar-icon"
          width={35}
          height={35}
        />
      </div>
    </nav>
  );
}
