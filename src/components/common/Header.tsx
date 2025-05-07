import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="fixed top-0 z-10 flex w-full flex-row items-center justify-between bg-transparent px-[72px] pt-[55px]">
      <div className="logo relative h-[50px] w-[178px]">
        <Image
          src={'/logo.webp'}
          alt="Handwrytten Logo"
          className="h-full w-full object-contain"
          fill={true}
        />
      </div>
      <ul className="flex flex-row gap-8">
        <li>
          <Link
            href="/"
            className="text-[15px] font-normal text-[#020f14] transition-colors hover:text-[#ff5037]"
          >
            Business
          </Link>
        </li>
        <li className="hasSub" >
          <Link
            href="/"
            className="text-[15px] font-normal text-[#020f14] transition-colors hover:text-[#ff5037]"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[15px] font-normal text-[#020f14] transition-colors hover:text-[#ff5037]"
          >
            Integrations
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[15px] font-normal text-[#020f14] transition-colors hover:text-[#ff5037]"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[15px] font-normal text-[#020f14] transition-colors hover:text-[#ff5037]"
          >
            Resources
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[15px] font-normal text-[#020f14] transition-colors hover:text-[#ff5037]"
          >
            About
          </Link>
        </li>
      </ul>
      <div className="flex flex-row items-center gap-8">
        <Link href="/">
          <p className="text-[15px] font-normal text-[#000000] uppercase" >
            Sign In
          </p>
        </Link>
        <Link href="/">
          <p className=" bg-[#ff5037] px-6 py-4 text-[13px] font-bold text-white uppercase" >
            sign up
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
