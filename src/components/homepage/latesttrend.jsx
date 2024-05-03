import React from "react";
import trand1 from "../../assets/img/trans/trend-1.png";
import trand2 from "../../assets/img/trans/trend-2.png";
import trand3 from "../../assets/img/trans/trend-3.png";
import trand4 from "../../assets/img/trans/trend-4.png";
import trand5 from "../../assets/img/trans/trend-5.png";
import trand6 from "../../assets/img/trans/trend-6.png";
const latesttrend = () => {
  return (
    <div className=" items-center justify-center flex mt-28">
      <div className=" container ">
        <h1 className=" font-bold text-3xl">The Latest Trends</h1>
        <div className=" flex  items-center justify-center mt-12">
          <div className=" grid grid-cols-3 grid-rows-2 gap-8 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1">
            <div className="flex flex-col  bg-white rounded-lg border border-violet-300 border-solid max-w-[375px] cursor-pointer transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 max-md:px-5">
              <img
                loading="lazy"
                srcSet={trand1}
                alt="trand1"
                className="w-full "
              />
              <div className="flex flex-col pr-12 pl-5 mt-7 w-full">
                <h1 className="text-2xl font-medium text-black">
                  10 Powerful Strategies to Make Your Business Brand Stand Out
                </h1>
                <p className="mt-5 text-sm text-zinc-500">
                  Mikayla Karayiannis
                  <br />
                  September 30, 2023
                </p>
              </div>
            </div>
            <div className="flex flex-col pb-4 bg-white rounded-lg border border-violet-300 border-solid max-w-[375px] cursor-pointer transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 max-md:px-5">
              <img
                loading="lazy"
                srcSet={trand2}
                alt="trand2"
                className="w-full aspect-[1.96]"
              />
              <div className="flex flex-col pr-12 pl-5 mt-7 w-full">
                <h1 className="text-2xl font-medium text-black">
                  The Ultimate E-Commerce Competitor Analysis Template
                </h1>
                <p className="mt-5 text-sm text-zinc-500">
                  Mikayla Karayiannis
                  <br />
                  September 14, 2023
                </p>
              </div>
            </div>
            <div className="flex flex-col pb-4 bg-white rounded-lg border border-violet-300 border-solid max-w-[375px] cursor-pointer transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 max-md:px-5">
              <img
                loading="lazy"
                srcSet={trand3}
                alt="trand3"
                className="w-full aspect-[1.96]"
              />
              <div className="flex flex-col pr-12 pl-5 mt-7 w-full">
                <h1 className="text-2xl font-medium text-black">
                  Launch a Small Business While Keeping Your Day Job
                </h1>
                <p className="mt-5 text-sm text-zinc-500">
                  Mikayla Karayiannis
                  <br />
                  August 30, 2023
                </p>
              </div>
            </div>
            <div className="flex flex-col pb-4 bg-white rounded-lg border border-violet-300 border-solid max-w-[375px] cursor-pointer transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 max-md:px-5">
              <img
                loading="lazy"
                srcSet={trand4}
                alt="trand4"
                className="w-full aspect-[1.96]"
              />
              <div className="flex flex-col pr-12 pl-5 mt-7 w-full">
                <h1 className="text-2xl font-medium text-black">
                  Million-Dollar Secrets: 6 Proven Strategies to Fund Your
                  Startup Dream
                </h1>
                <p className="mt-5 text-sm text-zinc-500">
                  Mikayla Karayiannis
                  <br />
                  August 14, 2023
                </p>
              </div>
            </div>
            <div className="flex flex-col pb-4 bg-white rounded-lg border border-violet-300 border-solid max-w-[375px] cursor-pointer transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 max-md:px-5">
              <img
                loading="lazy"
                srcSet={trand5}
                alt="trand1"
                className="w-full aspect-[1.96]"
              />
              <div className="flex flex-col pr-12 pl-5 mt-7 w-full">
                <h1 className="text-2xl font-medium text-black">
                  10 Powerful Tips from SME Businesses That Turned Unicorn
                </h1>
                <p className="mt-5 text-sm text-zinc-500">
                  Uhub
                  <br />
                  July 30, 2023
                </p>
              </div>
            </div>
            <div className="flex flex-col pb-4 bg-white rounded-lg border border-violet-300 border-solid max-w-[375px] cursor-pointer transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 max-md:px-5">
              <img
                loading="lazy"
                srcSet={trand6}
                alt="trand1"
                className="w-full aspect-[1.96]"
              />
              <div className="flex flex-col pr-12 pl-5 mt-7 w-full">
                <h1 className="text-2xl font-medium text-black">
                  3 Must-Know Strategies to Optimise Your Operations for
                  Business Growth
                </h1>
                <p className="mt-5 text-sm text-zinc-500">
                  Uhub
                  <br />
                  July 26, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default latesttrend;
