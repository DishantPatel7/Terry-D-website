import React from "react";
import d1 from "../../assets/Images/d1.png";
import d2 from "../../assets/Images/d2.png";
import d3 from "../../assets/Images/d3.png";
import d4 from "../../assets/Images/d4.png";
const Banner = () => {
  return (
    <div className="h-[450px] w-full bg-[url('/src/assets/Images/B1.png')] bg-no-repeat">
      <div className="relative flex h-full w-full items-center overflow-hidden bg-black pl-[135px] mix-blend-lighten">
        <div className="Text h-[171px] w-[762px]">
          <h2 className="text-[45px] font-[700] leading-[56.92px] text-white">
            We also do the smaller projects and will assist you with ideas to
            help you to stay on your budget.
          </h2>
        </div>
        <div className="absolute left-[990px] -top-[80.07px] grid h-[600px] w-[502px] rotate-[-15deg] grid-cols-2 gap-[12px]">
          <img
            src={d1}
            className="h-[290px] w-[241px] rounded-[40px] object-cover"
            alt=""
          />
          <img
            src={d2}
            className="h-[290px] w-[241px] rounded-[40px] object-cover"
            alt=""
          />
          <img
            src={d3}
            className="h-[290px] w-[241px] rounded-[40px] object-cover"
            alt=""
          />
          <img
            src={d4}
            className="h-[290px] w-[241px] rounded-[40px] object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
