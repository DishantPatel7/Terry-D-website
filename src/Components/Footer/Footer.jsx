import React from "react";
import I1 from "../../assets/Images/I1.png";
import I2 from "../../assets/Images/I2.png";
import I3 from "../../assets/Images/I3.png";
import I4 from "../../assets/Images/I4.png";
import logo from "../../assets/Images/Group.svg";

const Footer = () => {
  return (
    <div className="h-[523px] w-full bg-[url('/src/assets/Images/F1.png')] bg-center bg-no-repeat px-[135px] pt-[70px]">
      <div className="">
        <h2 className="mx-auto w-[616px] text-center text-[45px] font-[700] leading-[56.92px] text-white">
          Ready for a home makeover? Reach out to us today!
        </h2>
        <div className="mx-auto mt-[30px] flex h-[60px] w-[599px] items-center justify-between rounded-[40px] bg-white px-1">
          <input
            type="email"
            className="ml-[30px] text-[18px] outline-none"
            placeholder="Enter your email here..."
          />
          <button className="h-[52px] w-[156px] rounded-[81px] bg-black text-white">
            Send
          </button>
        </div>
        <div className="mx-auto mt-[30px] flex h-[40px] w-[186px] gap-[12px]">
          <img src={I1} alt="" />
          <img src={I2} alt="" />
          <img src={I3} alt="" />
          <img src={I4} alt="" />
        </div>
        <footer className="flex items-center pt-[30px] justify-between border-t-2 mt-[70px]">
          <div className="flex items-center  gap-[30px] capitalize text-white">
            <div className="logo">
              <img src={logo} className="ml-[50px] size-[50px]" alt="" />
            </div>
            {["home", "about us", "Services", "Portfolio"].map(
              (item, index) => {
                return (
                  <a
                    href="/"
                    key={index}
                    className={`"font-[450] text-[18px]" ${index === 0 && "text-[20px] font-[700]"}`}
                  >
                    {item}
                  </a>
                );
              },
            )}
          </div>
          <div>
            <p className="text-[18px] font-[450] leading-[27px] text-white">©2024 Portrait Renovations, ins · All rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
