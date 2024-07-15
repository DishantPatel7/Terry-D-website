import React from "react";
const Card = ({ item, index }) => {
  return (
    <div key={index} className="flex items-center gap-[30px]">
      <div
        className={`text flex w-[670px] flex-col gap-[20px] ${index % 2 === 0 ? "order-none" : "order-1"}`}
      >
        <h2 className="text-[40px] font-[450] leading-[50.6px]">{item.name}</h2>
        <div className="leading-[27px]">
          {item.des.map((v, i) => (
            <p key={i} className="text-[18px] font-[450] text-[#505050]">
              {v}
            </p>
          ))}
        </div>
        <button className="flex h-[27px] w-[128px] gap-[2px] overflow-hidden border-b-2 border-black text-[20px] font-[450] leading-[25.3px]">
          Read more
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.25 6H18V15.75"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="h-[536px] w-[470px]">
        <img src={item.img} className="h-full w-full" />
      </div>
    </div>
  );
};

export default Card;
