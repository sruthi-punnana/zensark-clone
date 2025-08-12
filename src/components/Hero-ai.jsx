import React from "react";
import GENAI from "../assets/Gen-AI_1920x710-06-scaled.jpg";
import { Link } from "react-router-dom";

const HeroAI = () => {
  return (
    <section  className=" md:h-screen">
      <div
        className="bg-cover bg-center h-[240px] md:h-[79%]"
        style={{ backgroundImage: `url(${GENAI})` }}
      >
        <div className="flex flex-col justify-center w-[180px] md:w-[550px] h-full p-[30px] md:pl-[32px] leading-5 md:leading-8 gap-3 md:gap-6 2xl:pl-[200px] 2xl:w-[700px]">
          <h2 className="text-[white] text-[16px] md:text-[32px] font-[500] font-[Lato, Sans-serif]">
             AI: The Power of Intelligent Solutions for Every Business Challenge
          </h2>
          <div className="px-[20px] pt-[7px] bg-[#f6f6f6] text-[10px] md:text-[16px] text-[#000000] font-[400]  font-[Lato, Sans-serif] rounded w-[91px] md:w-[125px] h-[33px] md:h-[43px] md:pt-1">
            <Link to="">Book a Demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAI;
