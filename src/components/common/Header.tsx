import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

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
      <nav className="flex flex-row gap-8">
        <Link
          href="/"
          className="text-[15px] font-normal text-[#020f14] transition-colors hover:text-[#ff5037]"
        >
          Pricing
        </Link>
        <Link
          href="/"
          className="text-[15px] font-normal text-[#020f14] transition-colors hover:text-[#ff5037]"
        >
          Solutions
        </Link>
        <Link
          href="/"
          className="text-[15px] font-normal text-[#020f14] transition-colors hover:text-[#ff5037]"
        >
          Integrations
        </Link>
        <Link
          href="/"
          className="text-[15px] font-normal text-[#020f14] transition-colors hover:text-[#ff5037]"
        >
          Resources
        </Link>
        <Link
          href="/"
          className="text-[15px] font-normal text-[#020f14] transition-colors hover:text-[#ff5037]"
        >
          Support
        </Link>
      </nav>
      <div className="flex flex-row gap-4">
        <button className="text-[18px] font-normal text-[#000000] uppercase">
          Sign In
        </button>
        <button className="rounded-[5px] bg-[#FFB400] px-6 py-2 text-[18px] font-normal text-[#000000] uppercase">
          sign up
        </button>
      </div>
    </header>
  )
}

export default Header
