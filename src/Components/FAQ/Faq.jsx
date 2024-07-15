import React, { useState } from "react";
import Que from "./Que";
import { QUESTION } from "../../Constants/data";

const Faq = () => {
  const [active, setActive] = useState(null);
  const handleClick = (index) => {
    active === index ? setActive(null) : setActive(index);
  };

  return (
    <div className="mx-auto my-[70px] h-[813px] w-[1170px]">
      <div className="Text mx-auto w-[800px]">
        <h1 className="text-center text-[55px] font-[700] leading-[69.57px]">
          FAQ’s
        </h1>
        <p className="w-full text-[18px] font-[450] leading-[27px] text-[#505050]">
          These revies aim to highlight positive customer experiences and build
          trust with potential clients.
        </p>
      </div>
      <div className="Questions mt-[40px]">
        {QUESTION.map((item, index) => {
          return (
            <Que
              item={item}
              index={index}
              handleClick={handleClick}
              active={active}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Faq;
