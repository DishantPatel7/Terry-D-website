import React from "react";
const Level_card = ({ item, index }) => {
  return (
    <div key={index} className="Level_card w-[570px]">
      <div className="relative h-[120px] w-full">
        <img
          src={item.img}
          className="absolute h-full w-full object-contain"
          alt=""
        />
        <div className="absolute left-[30px] flex h-full w-full items-center gap-8">
          <h2 className="text-[60px] font-[700] leading-[75.9px] text-white">
            {item.num}
          </h2>
          <h5 className="text-[28px] w-[320px] font-[700] leading-[35.42px] text-white text-wrap">
            {item.title}
          </h5>
        </div>
      </div>
      <p className="mt-2 text-[18px] font-[450] leading-[27px] text-[#505050]">
        {item.des}
      </p>
    </div>
  );
};

export default Level_card;
