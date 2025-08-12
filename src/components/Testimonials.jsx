import React from "react";
import { useState, useEffect } from "react";
import Nr from "../assets/Narayana.jpeg";
import wr from "../assets/warren.jpg";
import ps from "../assets/Peter.jpeg";
import sb from "../assets/sharon.jpeg";
import mk from "../assets/Manu-Krishna.jpg";
import bs from "../assets/placeholder-276.png";
import { MdOutlineFormatQuote } from "react-icons/md";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Zensark has been an invaluable partner in transforming Salcit's AI-based respiratory health platform, Swaasa®. They addressed our key challenges with exceptional skill and expertise, delivering a scalable, high-performing SaaS solution with a user-friendly UI.",
      author: "Narayana Rao Sripada",
      designation: "Founder,Salcit Technologies",
      image: Nr,
    },
    {
      text: "Zensark has been an exceptional partner for Geocon, providing us with top-notch service and support in managing our Microsoft Dynamics 365 - Finance and Operations instance.",
      author: "Brad Warren",
      designation: "Manager-Financial Planning & Analysis",
      image: wr,
    },
    {
      text: "We treat Zensark as the extended IT arm of our company. We collaborate extensively and seek their suggestions, even on the integration of our business with our web presence.",
      author: "Peter Schneeberger",
      designation: "CEO-Samudra Software",
      image: ps,
    },
    {
      text: "Zensark is very good to work with. For us they are a great partner and appreciate that they are very responsive and work with us closely as needed.",
      author: "Sharon Bergquist",
      designation: "Manager,Platform Services-Redbox",
      image: sb,
    },
    {
      text: "Zensark has provided us good candidates with great skills and we are happy with their services.",
      author: "Manu Krishna",
      designation: "CEO Tarantula",
      image: mk,
    },
    {
      text: "Zensark was very responsive and highly adaptive to our evolving business requirements.",
      author: "Biren Shah",
      designation: "Manager IT Services-HIA,Australia",
      image: bs,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, isAutoPlay, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonials" class="pt-[60px] pb-[10px]">
      <div class="flex max-w-[1260px] flex-col md:flex-row mx-auto relative box-border">
        <div class="flex min-h-[1px] relative box-border">
          <div class="flex flex-wrap flex-start w-[100%] p-[10px] relative box-border ">
            <div class="text-center lg:text-left block relative box-border">
              <h3 class="text-[#54595F] text-[17px] font-[400] mb-[5px] box-border font-[Lato,Sans-serif]">
                Testimonials
              </h3>
              <h2 class="text-[32px] font-[550] text-[#0040DA] leading-[32px] mb-[5px] box-border font-[Lato,Sans-serif]">
                What Our Clients Say
              </h2>
              <div class=" text-left inline-block leading-[24px] w-[60%] box-border">
                <p class="text-[16px] font-[Lato,Sans-serif] font-[400] mt-[10px] mb-[10px]  box-border ">
                  We are committed to creating value and making an impact to our
                  client's business. Here are few of the amazing things our
                  customers say about us.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-[100%] relative box-border">
          <div
            class="relative bg-white shadow-lg overflow-hidden max-w-4xl mx-auto"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <div class="flex box-border">
              <div class="w-0.5 h-80 bg-blue-600 flex-shrink-0"></div>
              <div class="px-16 py-12">
                <p class="text-lg mb-8 min-h-24">
                  "{testimonials[currentSlide].text}"
                </p>

                {/* Author */}
                <div class="border-t border-gray-200 pt-6">
                  <div class="flex items-left  relative gap-4">
                    {/* Author Image */}
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].author}
                      class="w-16 h-16 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                    />
                    {/* Author Name */}
                    <div class="flex flex-col">
                      <p class="text-[19px] font-[Lato,Sans-serif] font-[600]">
                        {testimonials[currentSlide].author}
                      </p>
                      <p class="text-[16px] font-[Lato,Sans-serif] font-[400] text-gray-500 ">
                        {testimonials[currentSlide].designation}
                      </p>
                    </div>

                    <MdOutlineFormatQuote class="text-[50px] absolute right-0 hidden lg:block text-blue-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-10 pb-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                class={`mx-1 w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index
                    ? "bg-blue-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
