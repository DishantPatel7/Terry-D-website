import React from "react";
import logo from "../../assets/Images/Group.svg";
const Header = () => {
  return (
    <div className="header absolute top-[40px] flex w-full justify-center">
      <div className="flex h-[80px] w-[1170px] items-center justify-between rounded-[1000px] bg-[#ffffff15] backdrop-blur-md px-[20px] text-[18px] font-[500]">
        <div className="logo">
          <img src={logo} className="ml-[50px] size-[50px]" alt="" />
        </div>
        <div className="flex gap-[30px] capitalize text-white">
          {["home", "about us", "Services", "Portfolio"].map((item, index) => {
            return (
              <a
                href="/"
                key={index}
                className={`"font-[450] text-[18px]" ${index === 0 && "text-[20px] font-[700]"}`}
              >
                {item}
              </a>
            );
          })}
        </div>
        <div className="btn">
          <button className="h-[50px] w-[152px] rounded-[100px] bg-white px-[30px] text-[18px] font-[500]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
