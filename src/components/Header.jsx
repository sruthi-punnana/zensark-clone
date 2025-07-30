import React, { useState } from 'react';
import zensarkLogo from '../assets/zensark-logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between xl:justify-center xl:gap-[150px] px-4 md:px-8 shadow-[0_0_10px_0_rgb(0,0,0,0.3)]">
      <div>
        <img src={zensarkLogo} alt="zensark-logo" className="w-[144px] h-[48px] xl:w-[310px] xl:h-[110px]" />
      </div>
      <button
        className="bg-[#252a3f] h-[40px] w-[40px] mt-1 rounded xl:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="s" className="text-[#ffffff]" />
      </button>
      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col xl:flex xl:flex-row gap-4 xl:gap-[30px] font-[600] text-[18px] text-[#0040da] items-center cursor-pointer absolute top-[100%] left-0 w-full bg-white lg:static lg:w-auto lg:bg-transparent z-40`}
      >
        <ul className="flex flex-col xl:flex-row gap-4 xl:gap-[40px] items-center py-4 lg:py-0">
          <li className="hover:text-[#000000] active:text-[#000000]">Home</li>
          <li className="hover:text-[#000000] active:text-[#000000]">Our Solutions</li>
          <li className="hover:text-[#000000] active:text-[#000000]">Careers</li>
          <li className="hover:text-[#000000] active:text-[#000000]">Resources</li>
          <li className="hover:text-[#000000] active:text-[#000000]">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
