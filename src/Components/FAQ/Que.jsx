import React from "react";

const Que = ({ item, index, handleClick, active }) => {
  return (
    <div
      key={index}
      className="question border-t-2 border-black px-[20px] py-[30px] last:border-b-2"
    >
      <div className="que flex items-center justify-between text-[28px] font-[450] leading-[35.42px]">
        <h3>{item.question}</h3>
        <button onClick={() => handleClick(index)}>
          {active === index ? "-" : "+"}
        </button>
      </div>
      {active === index && (
        <p className="ans mt-[30px] text-[23px] font-[450] text-[#808080]">
          {item.answer}
        </p>
      )}
    </div>
  );
};

export default Que;
