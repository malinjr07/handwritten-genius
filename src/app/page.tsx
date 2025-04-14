import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className='w-full flex flex-row justify-between items-center px-12 pt-[70px] '>
        <div className='logo w-[178px] h-[50px] relative'>
          <Image
            src={'/logo.webp'}
            alt='Handwrytten Logo'
            className='object-contain w-full h-full '
            fill={true}
          />
        </div>
        <nav>
          <ul className='flex flex-row gap-8'>
            <li className='text-[18px] text-[#000000] font-normal'>Pricing</li>
            <li className='text-[18px] text-[#000000] font-normal'>
              Solutions
            </li>
            <li className='text-[18px] text-[#000000] font-normal'>
              Integrations
            </li>
            <li className='text-[18px] text-[#000000] font-normal'>
              Resources
            </li>
            <li className='text-[18px] text-[#000000] font-normal'>Support</li>
          </ul>
        </nav>
        <div className='flex flex-row gap-4'>
          <button className='text-[18px] uppercase text-[#000000] font-normal'>
            Sign In
          </button>
          <button className='bg-[#FFB400] uppercase text-[18px] text-[#000000] font-normal px-6 py-2 rounded-[5px]'>
            sign up
          </button>
        </div>
      </header>
    </>
  );
}

