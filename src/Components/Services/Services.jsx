import React from "react";
import Card from "./Card";
import { SERVICES } from "../../Constants/data";

const Services = () => {
  return (
    <div className="px-[135px] py-[70px]">
      <div className="w-full text-center">
        <h1 className="text-[55px] font-[700] leading-[69.57px]">Services</h1>
        <p className="text-[18px] font-[450] leading-[27px] text-[#505050]">
          Our goal here at Portrait Renovations, Inc is to look after our
          customer in all aspects of the project. To provide the best quality in
          servicing our customers with workmanship, material quality, seasoned
          installers and deadlines to keep projects on schedule.
        </p>
        <p className="text-[18px] font-[450] leading-[27px] text-[#505050]">
          We also provide a schedule from start to finish with all scope of
          work. This is crucial in keeping the project moving with out delay. It
          also helps with making sure all materials needed are onsite a head of
          the installer.
        </p>
      </div>
      <div className="cards pt-[40px]">
        {SERVICES.map((item, index) => {
          return <Card item={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Services;
