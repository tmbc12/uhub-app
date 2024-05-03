import React from "react";
import map from "../../assets/img/Group 3720.svg";
import Tab from "./tab/tab";
import Typewriter from "typewriter-effect";
const hero = () => {
  return (
    <div className=" flex  max-md:max-w-full ">
      <div className="  mt-3.5 mb-10 w-full  max-md:max-w-full">
        <div className="  flex max-md:flex-col max-md:gap-0 bg-slate-100 ">
          <div className=" xl:pl-44  flex flex-col max-md:ml-0 max-md:w-full max-sm:px-5 sm:p-6">
            <div className=" md:pl-16 lg:pl-10  flex flex-col max-md:mt-2 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[72%] mt-16 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow mt-3 max-md:mt-10 max-md:max-w-full">
                      <h1 className="text-5xl font-bold tracking-tighter leading-[57px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                        Shipping your goods as seemless as possible
                      </h1>
                      
                      <h3 className="mt-5 text-2xl leading-7 text-black max-md:max-w-full">
                        A great platform to streamline your shipping operations
                        or an individual sending a package, UHub Logistics has
                        you covered.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-10 gap-5 max-w-full text-7xl font-bold leading-[116px] text-zinc-500 w-[247px] max-md:text-4xl max-md:leading-[68px]">
                <div className="flex flex-1 gap-4 max-md:text-4xl max-md:leading-[68px]">
                  <div className="shrink-0 rounded-2xl bg-indigo-950 h-[63px] w-[3px]" />
                  <div className="max-md:text-4xl ">
                    <h1 className="text-3xl leading-10 text-indigo-950">
                      50k+
                    </h1>
                    <h1 className="text-lg leading-7  text-zinc-500">
                      deliveries
                    </h1>
                  </div>
                </div>
                <div className=" flex flex-1 gap-4 max-md:text-4xl max-md:leading-[68px]">
                  <div className="shrink-0 rounded-2xl bg-indigo-950 h-[63px] w-[3px]" />
                  <div className="max-md:text-4xl ">
                    <h1 className="text-3xl leading-10 text-indigo-950">
                      10k+
                    </h1>
                    <h1 className="text-lg leading-7  text-zinc-500">
                      deliveries
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* `<div className=' xl:ml-10 xl:absolute w-[500px] xl:mt-[500px] md:mt-[100px] lg:relative max-sm:mt-5 max-sm:w-[350px]'>
                            <Tab />
                        </div>` */}
          </div>
          <div className=" w-full h-full max-md:ml-0 max-md:w-full  self-end xl:flex md:hidden lg:hidden max-sm:hidden sm:hidden">
            <img src={map} alt="" className=" w-[1000px] h-[1000px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
