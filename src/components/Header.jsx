import React, { useState, useEffect, useRef } from "react";
import zensarkLogo from "../assets/zensark-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
 
  const solutionsRef = useRef(null);
  const resourcesRef = useRef(null);
 
 
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target)
      ) {
        setSolutionsOpen(false);
      }
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target)
      ) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
 
  return (
    <header className="flex flex-col xl:flex-row xl:items-center justify-between xl:justify-center xl:gap-[150px] px-4 md:px-8 py-2 shadow-[0_0_10px_0_rgb(0,0,0,0.3)] relative z-50">
      {/* Logo + Mobile Toggle */}
      <div className="flex justify-between items-center w-full xl:w-auto">
        <div className="w-[144px] h-[48px] xl:w-[310px] xl:h-[110px] flex items-center">
          <img
            src={zensarkLogo}
            alt="zensark-logo"
            className="w-[144px] h-[48px] xl:w-[310px] xl:h-[110px]"
          />
        </div>
        <div className="relative z-50 xl:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`transition-all duration-300 ease-in-out transform rounded shadow-md bg-[#252a3f] h-[40px] w-[40px] flex items-center justify-center ${
              menuOpen ? "scale-110 shadow-lg bg-[#1e2236]" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="text-[24px] text-white"
            />
          </button>
        </div>
      </div>
 
     
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } xl:flex flex-col xl:flex-row gap-4 xl:gap-[30px] font-[600] text-[18px] text-[#0040da] items-start xl:items-center w-full xl:w-auto bg-white xl:bg-transparent absolute xl:static top-full left-0 p-4 xl:p-0 bg-[#f7f7f7]`}
      >
        <ul className="flex flex-col xl:flex-row gap-4 xl:gap-10 py-4 xl:py-0 w-full xl:w-auto">
          <li className="text-black xl:text-black hover:text-black">
            <Link to="/">Home</Link>
          </li>
 
          {/* Our Solutions Dropdown */}
          <li
            ref={solutionsRef}
            className="relative cursor-pointer font-[Lato, Sans-serif]"
          >
            <div
              className="flex items-center gap-1 text-black xl:text-[#0040da]"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
            >
              Our Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
 
            {solutionsOpen && (
              <div className="absolute left-0 top-full flex flex-col md:grid md:grid-cols-3 mt-2 z-50 border border-gray-200 shadow-lg w-[260px] sm:w-[320px] md:w-[550px] lg:w-[600px]">
                <div className="bg-white p-6">
                  <h3 className="text-blue-700 font-bold mb-3">BY INDUSTRY</h3>
                  <ul className="space-y-2 text-black font-[400] font-[Lato, Sans-serif]">
                    <li>
                      <Link to="/ai-healthtech" className="hover:underline">
                        HealthTech
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        FinTech
                      </a>
                    </li>
                    <li>
                      <Link to="/it-staffing" className="hover:underline">
                        IT Staffing
                      </Link>
                    </li>
                  </ul>
                </div>
 
                <div className="bg-white p-6">
                  <h3 className="text-blue-700 font-bold mb-3">BY OUTCOME</h3>
                  <ul className="space-y-2 text-black font-[400] font-[Lato, Sans-serif]">
                    <li>
                      <Link to="/artificial" className="hover:underline">
                        AI Accelerators
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Maintenance and Support of Dynamics 365
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Maximizing Productivity & Customer Value
                      </a>
                    </li>
                    <li>
                      <Link to="/salesforce" className="hover:underline">
                        AI Powered Salesforce Automation
                      </Link>
                    </li>
                  </ul>
                </div>
 
                <div className="bg-white p-4 rounded shadow-md w-full max-w-xs">
               
                   <h2 className="text-gray-800 font-bold uppercase text-sm mb-3 flex items-center gap-2">
                     <span className="w-2 h-2 bg-yellow-500 square"></span>
                     WHAT’S NEW
                   </h2>
                  <ul className="space-y-2 text-black font-[Lato, Sans-serif]">
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 hover:underline"
                      >
                       <div class="flex items-center space-x-2">
  <span class="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">&gt;</span>
  <span>New Case Study</span>
</div>
 
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li className="text-black xl:text-[#0040da] hover:text-black">
            <Link to="/ourculture">Carrers</Link>
          </li>
 
          {/* Resources Dropdown */}
        <li
  ref={resourcesRef}
  className="relative cursor-pointer"
>
  <div
    className="flex items-center gap-1
               text-gray-800 xl:text-[#0040da]" // gray on mobile, blue on desktop
    onClick={() => setResourcesOpen(!resourcesOpen)}
  >
    Resources
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>
 
  {resourcesOpen && (
    <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-40 z-50">
      <a
        href="#"
        className="block px-4 py-2 text-blue-700 font-bold hover:bg-gray-100"
      >
        Blogs
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-blue-700 font-bold hover:bg-gray-100"
      >
        Case Studies
      </a>
    </div>
  )}
</li>
 
 
          <li className="text-black xl:text-[#0040da] hover:text-black">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
 
export default Header;
 