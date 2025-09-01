import React from "react";
import AI from "../assets/AI-Solutions-Image.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="p-[10px] md:h-screen">
      <div
        className="bg-cover bg-center h-[240px] md:h-[79%]"
        style={{ backgroundImage: `url(${AI})` }}
      >
        <div className="flex flex-col justify-center w-[180px] md:w-[550px] h-full p-[30px] md:pl-[32px] leading-5 md:leading-8 gap-3 md:gap-6 2xl:pl-[200px] 2xl:w-[700px]">
          <h2 className="text-[#0040da] text-[16px] md:text-[32px] font-[500] font-[Lato, Sans-serif]">
            Building Custom Generative AI Solutions
          </h2>
          <div className="px-[20px] pt-[7px] bg-[#f6f6f6] hover:bg-[#0040da] hover:text-[#f6f6f6] text-[10px] md:text-[16px] text-[#000000] font-[400]  font-[Lato, Sans-serif] rounded w-[91px] md:w-[125px] h-[33px] md:h-[43px] md:pt-1">
            <Link to="/artificial">View More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
