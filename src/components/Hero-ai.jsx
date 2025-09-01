import React from "react";
import GENAI from "../assets/Gen-AI_1920x710-06-scaled.jpg";
import { Link } from "react-router-dom";

const HeroAI = () => {
  return (
    <section>
      <div
        className="bg-cover bg-center h-[240px] md:h-[500px]"
        style={{ backgroundImage: `url(${GENAI})` }}
      >
        <div className="flex flex-col md:justify-center w-[180px] md:w-[700px] h-full pt-[32px] md:p-[30px] md:pl-[32px] leading-7 md:leading-8 gap-3 md:gap-6 2xl:pl-[200px] 2xl:w-[700px]">
          <h2 className="text-[white] text-[16px] md:text-[32px] font-[500] font-[Lato, Sans-serif] w-[225px] md:w-[700px]">AI:
            <span class="text-[16px] md:text-[30px] font-[400]">
              The Power of Intelligent <br />
              Solutions for Every Business Challenge
            </span>
          </h2>
          <div className="text-center bg-[#f6f6f6] text-[18px] text-[#000000] font-[600] font-[Lato, Sans-serif] rounded w-[125px] md:w-[160px] md:h-[43px] pt-[6px] pb-[6px] md:pb-0 md:pt-1">
            <Link to="">Book a Demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAI;
