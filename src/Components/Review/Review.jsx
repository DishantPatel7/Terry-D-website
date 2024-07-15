import React from "react";
import R11 from "../../assets/Images/R11.png";
import S1 from "../../assets/Images/S1.png";
const Review = () => {
  return (
    <div className="relative mt-[70px] h-[759px] w-full bg-[url('/src/assets/Images/R1.png')] bg-center bg-no-repeat">
      <div className="absolute h-full w-full bg-black mix-blend-lighten" />
      <div className="px-[135px] pt-[70px]">
        <div className="Text mx-auto h-[179px] w-[800px] text-center">
          <h1 className="text-center text-[55px] font-[700] leading-[69.57px] text-white">
            Hear from our <br />
            satisfied homeowners
          </h1>
          <p className="w-full text-[18px] font-[450] leading-[27px] text-white">
            These revies aim to highlight positive customer experiences and
            build trust with potential clients.
          </p>
        </div>
        <div className="review-card top-[284px] mt-[35px] flex items-center gap-[30px]">
          <div className="img">
            <img
              src={R11}
              className="h-[350px] w-[270px] rounded-[30px] object-cover"
              alt=""
            />
            <div className="flex items-center justify-center gap-[18px]">
              <div className="flex size-[60px] items-center justify-center rounded-full bg-[#FFFFFF]">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 9L2 9M2 9L9.5 1.5M2 9L9.5 16.5"
                    stroke="black"
                    stroke-width="2.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex size-[60px] items-center justify-center rounded-full bg-[#FFFFFF]">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9L22 9M22 9L14.5 16.5M22 9L14.5 1.5"
                    stroke="black"
                    stroke-width="2.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="text">
            <div className="h-[51.43px] w-[60px]">
              <svg
                width="60"
                height="52"
                viewBox="0 0 60 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 26V51.7143H25.7143V26H8.57149C8.57149 16.5476 16.262 8.85714 25.7143 8.85714V0.285645C11.5346 0.285645 0 11.8202 0 26ZM60 8.85714V0.285645C45.8203 0.285645 34.2857 11.8202 34.2857 26V51.7143H60V26H42.8572C42.8572 16.5476 50.5476 8.85714 60 8.85714Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="review-info mt-[20px] h-[172px] w-[870px]">
              <div className="flex items-center">
                <h2 className="text-[40px] font-[450] leading-[50.6px] text-white">
                  Davis Schleifer
                </h2>
                <div className="ml-5 flex">
                  {[S1, S1, S1, S1, S1].map((item, index) => {
                    return <img key={index} src={item} alt="" />;
                  })}
                </div>
              </div>
              <div className="my-4 w-[335px] border-b-[1px]" />
              <p className="text-[18px] font-[300] leading-[27px] text-white">
                We recently met Kyle & Kim at a business conference for
                contractors and I was really impressed. They know what it takes
                to put together a great project, and hearing about the structure
                and processes they have in place for their business leaves me no
                doubt that they're the #1 choice!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
