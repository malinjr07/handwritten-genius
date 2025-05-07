import { navMenu } from "@/utils/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="fixed top-0 z-10 flex w-full flex-row items-center justify-between bg-transparent px-[72px] pt-[55px]">
      <div className="logo relative h-[50px] w-[178px]">
        <Image
          src={"/logo.webp"}
          alt="Handwrytten Logo"
          className="h-full w-full object-contain"
          fill={true}
        />
      </div>
      <ul className="flex flex-row gap-8">
        {navMenu.map((item, i) => (
          <li key={item.title + i} className="group relative">
            <Link
              href={item.url}
              className="pb-5 text-[15px] font-normal text-[#020f14] capitalize transition-colors hover:text-[#ff5037]"
            >
              {item.title} &nbsp;
              {item.subMenu && <i className="fa-solid fa-chevron-down"></i>}
            </Link>
            {item.subMenu && (
              <div className="relative">
                <ul className="pointer-events-none invisible absolute top-full left-0 z-10 w-[200px] origin-top-left -translate-y-1 scale-95 border-4 bg-white opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:ease-in">
                  {item.subMenu.map((subItem, j) => (
                    <li
                      key={subItem.title + j}
                      className="translate-y-1 p-2 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
                      style={{ transitionDelay: `${j * 50}ms` }}
                    >
                      <Link
                        href={subItem.url}
                        className="block px-3 py-1 text-[14px] font-normal text-[#020f14] capitalize transition-colors hover:text-[#ff5037]"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex flex-row items-center gap-8">
        <Link href="/">
          <p className="text-[15px] font-normal text-[#000000] uppercase">
            Sign In
          </p>
        </Link>
        <Link href="/">
          <p className="bg-[#ff5037] px-6 py-4 text-[13px] font-bold text-white uppercase">
            sign up
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
