import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer class="bg-[#0040DA] text-white">
      <section class="pt-[80px] pb-[32px]">
        <div class="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-0 m-auto relative box-border max-w-[1260px] px-4">
          {/** First Row for MD screen-2 columns **/}
          <div class="w-full md:flex md:gap-0  lg:contents">
            {/** 1st Column **/}
            <div class="w-full md:w-1/2 lg:w-[21%] min-h-[1px] relative mb-4 md:mb-8 lg:mb-0">
              <div class="flex flex-col flex-wrap content-start pb-[10px] lg:px-[10px] w-[100%]">
                <div class="pb-[12px] pt-[2px] box-border">
                  <h2 class="text-[18px] sm:text-[20px] leading-[35px] font-[750] font-[Lato,Sans-serif]">
                    Subscribe Now
                  </h2>
                </div>

                <div class="text-[14px] sm:text-[16px] leading-[26px] font-[400] font-[Lato,Sans-serif]">
                  <p>For future updates</p>
                </div>

                <div class="flex flex-wrap box-border md:w-[100%]">
                  <form class="flex items-center bg-white rounded-full overflow-hidden w-full max-w-[280px] ">
                    <input
                      type="email"
                      name="email"
                      class="text-black px-3 sm:px-4 py-2 w-full focus:outline-none rounded-l-full text-sm"
                      placeholder="Enter Email ID Here"
                    />
                    <button
                      type="submit"
                      class="bg-black p-2 sm:p-3  rounded-r-full hover:bg-gray-800"
                    >
                      <FaEnvelopeOpenText class="text-white text-sm" />
                    </button>
                  </form>
                </div>

                <div class="mt-4">
                  <ul class="flex gap-3 sm:gap-4">
                    <li class="bg-white rounded-full border border:white p-2 text-blue-700 hover:bg-blue-700 cursor-pointer hover:text-white hover:border-white">
                      <a href="/#">
                        <FaFacebook class="text-sm sm:text-base " />
                      </a>
                    </li>
                    <li class="bg-white border rounded-full p-2 text-blue-700 hover:bg-blue-700 hover:border-white hover:text-white cursor-pointer">
                      <a href="/#">
                        <FaLinkedin class="text-sm sm:text-base" />
                      </a>
                    </li>
                    <li class="bg-white text-black border border-white rounded-full p-2  hover:bg-blue-700 hover:border-white hover:text-white cursor-pointer">
                      <a href="/#">
                        <FaXTwitter class="text-sm sm:text-base" />
                      </a>
                    </li>
                    <li class="bg-white border border-white rounded-full p-2 text-red-600 hover:bg-blue-700 hover:border-white hover:text-white cursor-pointer">
                      <a href="/#">
                        <FaYoutube class="text-sm sm:text-base" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/** 2nd Column **/}
            <div class="w-full md:w-1/2 lg:w-[21%] min-h-[1px] relative mb-0 md:mb-8 lg:mb-0">
              <div class="flex flex-col flex-wrap content-start lg:px-[10px] pb-[10px] w-[100%]">
                <div class="pt-[2px] pb-[16px]">
                  <h2 class="text-[18px] sm:text-[20px] leading-[35px] font-[750] font-[Lato,Sans-serif] box-border">
                    BY INDUSTRY
                  </h2>
                </div>
                <div class="box-border block w-[100%] relative">
                  <div class="box-border block">
                    <ul class="box-border space-y-2">
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="flex text-[14px] sm:text-[15px] font-[Lato,Sans-serif] w-[100%] hover:underline"
                        >
                          <span class="inline-block box-border">
                            HealthTech
                          </span>
                        </a>
                      </li>
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="flex text-[14px] sm:text-[15px] font-[Lato,Sans-serif] w-[100%] hover:underline"
                        >
                          <span class="inline-block box-border">FinTech</span>
                        </a>
                      </li>
                      <li class="flex box-border relative">
                        <span class="inline-block box-border text-[14px] sm:text-[15px] font-[Lato,Sans-serif]">
                          IT Staffing
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** 2nd Row for MD screen-5 items  **/}
          <div class="w-full md:flex md:gap-0 lg:contents">
            {/** 3rd Column **/}
            <div class="w-full md:w-1/5 lg:w-[21%] min-h-[1px] relative box-border mb-4 md:mb-8 lg:mb-0">
              <div class="flex flex-col flex-wrap content-start box-border w-[100%]">
                <div class="pb-[16px] pt-[2px] box-border block">
                  <h2 class="text-[18px] sm:text-[20px] leading-[35px] font-[750] font-[Lato,Sans-serif] box-border">
                    SOLUTIONS
                  </h2>
                </div>
                <div class="box-border block relative">
                  <div class="box-border block">
                    <ul class="box-border space-y-2">
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="box-border w-[100%] hover:underline"
                        >
                          <span class="inline-block box-border text-[14px] sm:text-[15px] font-[Lato,Sans-serif]">
                            AI Accelerators
                          </span>
                        </a>
                      </li>
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="flex box-border w-[100%] hover:underline"
                        >
                          <span class="inline-block box-border text-[14px] sm:text-[15px] font-[Lato,Sans-serif]">
                            Maintenance and support of Dynamics 365
                          </span>
                        </a>
                      </li>
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="flex box-border w-[100%] hover:underline"
                        >
                          <span class="text-[14px] sm:text-[15px] font-[Lato,Sans-serif] box-border inline-block">
                            Maximizing Productivity & Customer Value
                          </span>
                        </a>
                      </li>
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="flex box-border w-[100%] hover:underline"
                        >
                          <span class="text-[14px] sm:text-[15px] font-[Lato,Sans-serif] box-border inline-block">
                            AI Powered Salesforce Automation
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/** I4th Column **/}
            <div class="w-full md:w-1/5 lg:w-[21%] min-h-[1px] relative box-border mb-4 md:mb-8 lg:mb-0">
              <div class="flex flex-col flex-wrap content-start box-border w-[100%] relative">
                <div class="relative box-border">
                  <div class="pb-[16px] pt-[2px] box-border block">
                    <h2 class="text-[18px] sm:text-[20px] leading-[35px] font-[750] font-[Lato,Sans-serif] box-border block">
                      INSIGHTS
                    </h2>
                  </div>
                </div>
                <div class="box-border block relative">
                  <div class="box-border block">
                    <ul class="box-border space-y-2">
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="flex box-border w-[100%] hover:underline"
                        >
                          <span class="text-[14px] sm:text-[15px] font-[Lato,Sans-serif] box-border inline-block">
                            Blogs
                          </span>
                        </a>
                      </li>
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="flex box-border w-[100%] hover:underline"
                        >
                          <span class="text-[14px] sm:text-[15px] font-[Lato,Sans-serif] box-border inline-block">
                            Webinars
                          </span>
                        </a>
                      </li>
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="flex box-border w-[100%] hover:underline"
                        >
                          <span class="text-[14px] sm:text-[15px] font-[Lato,Sans-serif] box-border inline-block">
                            Case Studies
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/** 5th Column **/}
            <div class="w-full md:w-1/5 lg:w-[21%] min-h-[1px] relative box-border mb-4 md:mb-8 lg:mb-0">
              <div class="flex flex-col flex-wrap content-start box-border w-[100%] relative">
                <div class="pb-[16px] pt-[2px] box-border block">
                  <h2 class="text-[18px] sm:text-[20px] leading-[35px] font-[750] font-[Lato,Sans-serif] box-border block">
                    COMPANY
                  </h2>
                </div>
                <div class="box-border block relative">
                  <div class="box-border block">
                    <ul class="box-border space-y-2">
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="flex box-border w-[100%] hover:underline"
                        >
                          <span class="text-[14px] sm:text-[15px] font-[Lato,Sans-serif] box-border inline-block">
                            About
                          </span>
                        </a>
                      </li>
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="flex box-border w-[100%] hover:underline"
                        >
                          <span class="text-[14px] sm:text-[15px] font-[Lato,Sans-serif] box-border inline-block">
                            Careers
                          </span>
                        </a>
                      </li>
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="flex box-border w-[100%] hover:underline"
                        >
                          <span class="text-[14px] sm:text-[15px] font-[Lato,Sans-serif] box-border inline-block">
                            Resources
                          </span>
                        </a>
                      </li>
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="flex box-border w-[100%] hover:underline"
                        >
                          <span class="text-[14px] sm:text-[15px] font-[Lato,Sans-serif] box-border inline-block">
                            Contact Us
                          </span>
                        </a>
                      </li>
                      <li class="flex box-border relative">
                        <a
                          href="/#"
                          class="flex box-border w-[100%] hover:underline"
                        >
                          <span class="text-[14px] sm:text-[15px] font-[Lato,Sans-serif] box-border inline-block">
                            Privacy Policy
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/** Empty Column 4-hidden**/}
            <div class="hidden md:block md:w-1/5  lg:hidden min-h-[1px] relative box-border">
              {/* Empty space for layout balance */}
            </div>

            {/** Empty Column 5-hidden**/}
            <div class="hidden md:block md:w-1/5 lg:hidden min-h-[1px] relative box-border">
              {/* Empty space for layout balance */}
            </div>
          </div>
        </div>
      </section>

      <section class="py-[16px] box-border block relative border-t border-white/20">
        <div class="max-w-[1260px] ml-auto mr-auto text-center box-border relative px-4">
          <div class="w-[100%] flex min-h-[1px] relative box-border">
            <div class="box-border p-[10px] flex flex-wrap content-start w-[100%] relative">
              <div class="box-border block relative w-[100%]">
                <div class="box-border block">
                  <div class="box-border block">
                    <div class="text-center relative box-border block">
                      <p class="box-border text-center font-[Lato,Sans-serif] font-[500] text-[14px] sm:text-[16px]">
                        © 2024 - Zensark Technologies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
