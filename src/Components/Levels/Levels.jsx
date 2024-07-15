import React from "react";
import Level_card from "./Level_card";
import { LEVELS } from "../../Constants/data";

const Levels = () => {
  return (
    <div className="px-[135px] py-[70px]">
      <div className="Text mx-auto h-[136px] w-[770px] text-center">
        <h1 className="text-[55px] font-[700] leading-[69.57px]">
          Elevate to the next level
        </h1>
        <p className="text-[18px] font-[450] leading-[27px] text-[#505050]">
          Our team of experienced experts ensures an efficient and exceptional
          client experience, providing trustworthy guidance throughout the
          process.
        </p>
      </div>
      <div className="levels-cards mt-4 grid grid-cols-2 gap-8">
        {LEVELS.map((item, index) => {
          return <Level_card item={item} index={index} />;
        })}
      </div>
      <div className="btns mt-12 flex items-center justify-center gap-[20px]">
        <button className="btn h-[60px] w-[400] rounded-[16px] border-[2px] border-black px-[50px] py-[16px] text-[18px] font-[700] leading-[27px] tracking-wide">
          Schedule discovery call
        </button>
        <button className="btn h-[60px] w-[400] rounded-[16px] border-[2px] bg-black px-[50px] py-[16px] text-[18px] font-[700] leading-[27px] tracking-wide text-white">
          See financing option
        </button>
      </div>
    </div>
  );
};

export default Levels;
