import React from "react";
import Header from "./Header";
import c1 from "../../assets/Images/c1.png";
import c2 from "../../assets/Images/c2.png";
import c3 from "../../assets/Images/c3.png";

const Landing = () => {
  return (
    <div className="relative h-[869px] w-full bg-[url('/src/assets/Images/Rectangle1.png')] bg-cover bg-no-repeat">
      <Header />
      <div className="text absolute left-[135px] top-[443px] flex h-[214px] w-[911px] flex-col gap-[10px] text-white">
        <h2 className="text-[24px] font-[400] leading-[30.36px] uppercase">
          Elegant Dwelling Makeover
        </h2>
        <h1 className="text-[69px] font-[700] leading-[87.28px]">
          Artistry in Renovation Making your Vision a Reality
        </h1>
      </div>
      <div className="absolute top-[727px] flex h-[142px] w-full items-center justify-between bg-[#00000080] px-[135px]">
        <div className="Highlight flex h-[62px] w-[246px] items-center gap-[10px] text-white">
          <img src={c1} alt="" />
          <div className="">
            <p className="text-[18px] font-[300]">Build by</p>
            <h4 className="text-[28px]">Terry Deskin</h4>
          </div>
        </div>
        <div className="h-[62px] w-[2px] bg-white"></div>
        <div className="Highlight flex h-[62px] w-[246px] items-center gap-[10px] text-white">
          <img src={c2} alt="" />
          <div className="">
            <p className="text-[18px] font-[300]">Call</p>
            <h4 className="text-[28px]">469.835.4656</h4>
          </div>
        </div>
        <div className="h-[62px] w-[2px] bg-white"></div>
        <div className="Highlight flex h-[62px] w-[246px] items-center gap-[10px] text-white">
          <img src={c3} alt="" />
          <div className="">
            <p className="text-[18px] font-[300]">location</p>
            <h4 className="text-[28px]">North Dallas</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
