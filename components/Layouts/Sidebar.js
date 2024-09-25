import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  const navItems = [
    { href: "/", icon: "/assets/icons/home.png", alt: "home-icon" },
    { href: "/ordersmanagement", icon: "/assets/icons/note.png", alt: "note-icon" },
    { href: "/basketsmanagement", icon: "/assets/icons/cart.png", alt: "cart-icon" },
    { href: "/pricesmanagement", icon: "/assets/icons/CurrencyCircleDollar.png", alt: "CurrencyCircleDollar-icon" },
    { href: "/usersmanagement", icon: "/assets/icons/user.png", alt: "user-icon" },
    { href: "/retailermanagement", icon: "/assets/icons/statistic.png", alt: "statistic-icon" }
  ];

  const settingsItems = [
    { href: "/settings", icon: "/assets/icons/settings.png", alt: "settings-icon" },
    { href: "/help", icon: "/assets/icons/help.png", alt: "help-icon" },
    { href: "/logout", icon: "/assets/icons/logout.png", alt: "logout-icon" }
  ];

  const renderNavItems = (items) => {
    return items.map((item, index) => (
      <Link key={index} href={item.href} className={`flex items-center hover:bg-chocolate-white rounded-md p-2 ${router.pathname === item.href ? 'bg-chocolate-white rounded-md p-2' : ''}`}>
          <Image className="max-w-20" src={item.icon} alt={item.alt} width={20} height={20} />
      </Link>
    ));
  };

  return (
    <aside className="bg-chocolate-red rounded-ss-xl h-screen flex flex-col p-4 text-white space-y-48">
      <div className="flex flex-col mt-10 space-y-2 border-b border-b-gray-300 pb-2">
        {renderNavItems(navItems)}
      </div>

      <div className="flex flex-col mt-10 space-y-2">
        {renderNavItems(settingsItems)}
      </div>
    </aside>
  );
}
