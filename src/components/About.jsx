import React from "react";

const About = () => {
  return (
    <section id="about" className="p-[16px] sm:px-[25px]">
      <div className="md:flex flex-col sm:text-center lg:text-start lg:px-[50px]">
        <h2 className="text-[#7a7a7a] text-[17px] font-[Lato,Sans-serif] font-[500]">
          About Us
        </h2>
        <div className="flex flex-col lg:flex-row lg:gap-[20px]">
          <div className="lg:w-[450px]">
            <div className="font-[Lato,Sans-serif]">
              <p className="text-[25px] leading-7 text-[#0040da] font-[Lato,Sans-serif] font-[600]">
                We Are Dedicated To Your Success
              </p>
            </div>
            <div className="font-[400] font-[Lato,Sans-serif]  text-[16px] text-[#333333] mt-[10px]">
              <p>
                We are a dynamic <strong>AI startup</strong> pushing the
                boundaries of innovation to deliver cutting-edge solutions
                across diverse industries. With a current focus on healthtech
                and fintech sectors, our team of passionate experts leverages
                the power of AI to disrupt the status quo and unlock new
                opportunities for growth.
              </p>
              <p className="mt-[10px]">
                At our core, we're committed to driving transformation and
                shaping the future through the limitless potential of AI, one
                industry at a time. We continually strive to expand our
                offerings and provide tailored solutions that empower businesses
                to thrive in the{" "}
                <strong>age of artificial intelligence.</strong>
              </p>
              <p className="mt-[10px]">
                <a
                  href="https://www.crunchbase.com/organization/zensark"
                  target="_blank"
                  className="text-[#c36] hover:text-[#333333] cursor-pointer"
                >
                  Join us
                </a>{" "}
                on this exciting journey of innovation and growth as we reshape
                the future together.
              </p>
            </div>
          </div>
          <div className="lg:w-[520px]">
            <video
              src="https://zensark.com/wp-content/uploads/2025/02/Zensark_Logo-Animation-Video_1_Comp-1.mp4"
              loop
              controls
              preload="auto"
              controlslist="nodownload"
              className="w-full"
              poster="https://zensark.com/wp-content/uploads/2025/02/Screenshot-2024-05-28-at-5.21.46 PM.png"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
