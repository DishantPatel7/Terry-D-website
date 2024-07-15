import React from "react";
import g1 from "../../assets/Images/g1.png";
import g2 from "../../assets/Images/g2.png";
import g3 from "../../assets/Images/g3.png";
import g4 from "../../assets/Images/g4.png";
import g5 from "../../assets/Images/g5.png";
import g6 from "../../assets/Images/g6.png";
import g7 from "../../assets/Images/g7.png";
import g8 from "../../assets/Images/g8.png";
import A11 from "../../assets/Images/A11.png";
import A12 from "../../assets/Images/ArrowUpRight.png";
const Gallery = () => {
  return (
    <>
      <div className="w-full">
        <div className="Text mx-auto h-[179px] w-[770px]">
          <h1 className="px-10 text-center text-[55px] font-[700] leading-[69.57px]">
            Prestigious home makeover specialists
          </h1>
          <p className="w-full text-[18px] font-[450] leading-[27px] text-[#505050]">
            These variations emphasize the high recognition and quality of the
            home renovation services.
          </p>
        </div>
        <div className="gallery mt- overflow-clip">
          <div className="row1 -ml-[188px] flex gap-[12px]">
            <img
              src={g1}
              className="h-[300px] w-[500px] rounded-[30px] object-cover"
              alt=""
            />
            <img
              src={g2}
              className="h-[300px] w-[500px] rounded-[30px] object-cover"
              alt=""
            />
            <img
              src={g3}
              className="h-[300px] w-[500px] rounded-[30px] object-cover"
              alt=""
            />
            <img
              src={g4}
              className="h-[300px] w-[500px] rounded-[30px] object-cover"
              alt=""
            />
          </div>
          <div className="row2 -ml-[375px] mt-8 flex gap-[12px]">
            <img
              src={g5}
              className="h-[250px] w-[500px] rounded-[30px] object-cover"
              alt=""
            />
            <img
              src={g6}
              className="h-[250px] w-[500px] rounded-[30px] object-cover"
              alt=""
            />
            <img
              src={g7}
              className="h-[250px] w-[500px] rounded-[30px] object-cover"
              alt=""
            />
            <img
              src={g8}
              className="h-[250px] w-[500px] rounded-bl-[30px] rounded-tl-[30px] object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="btns mt-12 flex items-center justify-center gap-[20px]">
          <button className="btn h-[60px] w-[400] rounded-[16px] border-[2px] border-black px-[50px] py-[16px] text-[18px] font-[700] leading-[27px] tracking-wide">
            View full portfolio
          </button>
          <button className="btn h-[60px] w-[400] rounded-[16px] border-[2px] bg-black px-[50px] py-[16px] text-[18px] font-[700] leading-[27px] tracking-wide text-white">
            Schedule discovery call
          </button>
        </div>
        <div className="about mx-[135px] mt-20 flex h-[387px] w-[1170px] items-center gap-[20px]">
          <div className="Text h-[349px] w-1/2">
            <h1 className="text-[55px] font-[700] leading-[69.57px]">
              About portrait renovation
            </h1>
            <p className="text-[18px] font-[450] leading-[27px] text-[#505050]">
              With Terry Deskin at the helm, Portrait Renovations was set up
              with the vision of being a home renovation companywith a
              difference. Our incredible team of dedicated professionals
              genuinely cares about how your home is going to look and feel and
              is committed to delivering quality results. We believe in making
              home renovations a positive experience for every family and always
              go above and beyond in ensuring your comfort throughout the entire
              process.
            </p>
          </div>
          <div className="img relative h-[382px] w-1/2 bg-[url('/src/assets/Images/A1.png')] bg-no-repeat">
            <div className="absolute bottom-0 left-0 size-[125px] bg-white">
              <img src={A11} alt="" />
            </div>
            <div className="absolute bottom-3 right-0 flex h-[50px] w-[172px] items-center gap-2">
              <a href="/" className="border-b-2 text-white">
                About More
              </a>
              <div className="flex size-[50px] items-center justify-center rounded-full bg-[#ffffff46]">
                <img src={A12} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
