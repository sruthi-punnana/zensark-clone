

import React from 'react';

const Approach = () => {
  return (
    <section id="approach" className="bg-[#ceecf3] py-10 px-3">
      <div className="max-w-7xl mx-auto text-center">
    
        <h2 className="text-[30px] sm:text-[38px] md:text-[41px] lg:text-[42px] xl:text-[48px] text-[#333333] font-semibold mb-4">
        Our Approach
        </h2>

        <div className="flex flex-col items-center justify-center mb-6 gap-2">
          <div className="flex gap-1 sm:gap-1.5">
            <span className="text-blue-600 text-xl sm:text-2xl">•</span>
            <span className="text-blue-600 text-xl sm:text-2xl">•</span>
            <span className="text-blue-600 text-xl sm:text-2xl">•</span>
            <div className="w-10 h-1 bg-blue-600 rounded-full mt-[14px] sm:mt-[16px]"></div>
          </div>
        </div>

       
        <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[19px] text-[#333] font-[Lato, Sans-serif] leading-relaxed text-justify md:text-center lg:text-center xl:text-center max-w-full md:max-w-[748px] lg:max-w-[1024px] xl:max-w-[1240px] mx-auto">
          Welcome to Zensark, where innovation and ingenuity converge. We challenge the status quo, pushing boundaries to create
          cutting-edge solutions powered by AI, machine learning, and data analytics. Our agile methodology ensures swift,
          adaptable results tailored to your unique needs. Driven by customer-centricity, we build lasting partnerships and exceed
          expectations. At Zensark, we embody the ethos of “think, create, disrupt” in every aspect of our approach. Experience the
          Zensark difference—forward-thinking solutions in today’s dynamic digital landscape. Unlock your business’s full potential with us.
        </p>

       
        <div className="pt-6 sm:pt-8">
          <img
            src="/src/assets/zensark.png.png"
            alt="Our Approach"
            className="mx-auto w-full max-w-3xl mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Approach;

