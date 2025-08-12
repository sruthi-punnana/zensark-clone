import React from "react";
import AIML from "../assets/Artificial-Intelligence-Machine-Learning.jpg";
import Healthtech from "../assets/Healthtech.jpg";
import FinTech from "../assets/Fintech.jpg";
import D365 from "../assets/D365-support.jpg";
import IT from "../assets/IT-staffing.jpg";
import Appdevelopment from "../assets/App-Development.jpg";
const Services = () => {
  const services = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "We provide enterprises with AI and machine learning solutions to drive business innovation.",
      bgImage: AIML,
    },
    {
      title: "HealthTech Services",
      description:
        "One-stop solution provider in delivering high-quality end-to-end product development services.",
      bgImage: Healthtech,
    },
    {
      title: "FinTech Services",
      description:
        "We provide AI driven financial services solutions to enterprises to enable seamless customer experience.",
      bgImage: FinTech,
    },
    {
      title: "D365 Support",
      description:
        "We are Microsoft Silver Partner and are experts in providing solutions, customizations and enhancements across all dynamics platforms.",
      bgImage: D365,
    },
    {
      title: "IT Staffing",
      description:
        "We help you stay ahead of the curve with our digital transformation consulting and advisory services.",
      bgImage: IT,
    },
    {
      title: "App Development",
      description:
        "We offer a full suite of development services including web and mobile app development.",
      bgImage: Appdevelopment,
    },
  ];

  return (
    <section id="services" class="py-[32px]">
      <div class="flex flex-col flex-wrap w-[100%] content-start relative max-w-[1150px] mx-auto px-[16px]">
        <div class="mb-[20px] w-[100%] relative">
          <div class="text-center lg:text-left">
            <h3 class="text-[17px] font-[400] font-[Lato, Sans-serif] box-border text-[#7A7A7A] leading-[20px] mb-[11.5px]">
              Our Services
            </h3>
            <h2 class="text-[33px] font-[600] font-[Lato, Sans-serif] box-border text-[#0040DA] leading-[33px] mb-[43px]">
              What We Offer
            </h2>
          </div>
        </div>
        <section>
          <div class="flex flex-wrap -mx-3">
            {services.map((service, index) => (
              <div
                key={index}
                class="
                    relative w-full md:w-1/3 px-[16px] mb-[28px] relative"
              >
                <a href="#" class="block">
                  <div class="h-[350px] w-[100%] group relative">
                    {/* Background Image with Overlay */}
                    <div
                      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    >
                      {/*Gradient */}
                      <div class="absolute inset-0 bg-gradient-to-t from-[#1d5fff] to-[rgba(0,34,116,0)] opacity-80 group-hover:opacity-100 transition duration-300 delay-200"></div>
                    </div>

                    {/* Card Content */}
                    <div class="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8 text-white delay-100 duration-1000 group-hover:scale-105">
                      <div class="space-y-4">
                        <h3 class="text-[25px] font-[600] font-[Lato, Sans-serif]">
                          {service.title}
                        </h3>

                        <p class="text-[16px] font-[400] font-[Lato, Sans-serif]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
