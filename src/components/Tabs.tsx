'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaDollarSign, FaHome, FaImage } from "react-icons/fa";
import { RiVipCrownLine } from "react-icons/ri";

const tabs = [
  // TODO: Add more tabs
  { name: "Home", path: "/", icon: FaHome },
  { name: "Tokens", path: "/tokens", icon: FaDollarSign},
  { name: "NFTs", path: "/nfts", icon: FaImage },
  { name: "Ranking", path: "/ranking", icon: RiVipCrownLine },
];

export function Tabs() {
  const pathname = usePathname();

  return (
    <nav className="w-full fixed bottom-0 z-[999] h-fit bg-black">
      <div role="tablist" className="flex flex-row justify-evenly">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <Link key={tab.path} href={tab.path}>
              <div
                className={`flex-1 w-30 aspect-square px-2 py-3 m-1 hover:text-white rounded-2xl ${isActive
                  ? "text-amber-500 "
                  : "text-gray-300"
                  }`}
              >
                <div role="tab" className="flex flex-col items-center">
                  <tab.icon className='text-xl' />
                  {/* <span className='text-xs'>{tab.name}</span> */}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
