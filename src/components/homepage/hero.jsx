import React from 'react';
import map from "../../assets/img/Frame 22.png";
import Tab from "./tab/tab"
const hero = () => {
    return (
        <div className=" flex max-md:px-5 max-md:max-w-full ">
            <div className="  mt-3.5 mb-10 w-full  max-md:max-w-full">
                <div className="  flex max-md:flex-col max-md:gap-0 bg-slate-100 ">
                    <div className=" lg:pl-44  flex flex-col max-md:ml-0 max-md:w-full">
                        <div className=" md:pl-16 lg:pl-0 flex flex-col max-md:mt-2 max-md:max-w-full">
                            <div className="max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-[72%] mt-16 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow mt-3 max-md:mt-10 max-md:max-w-full">
                                            <h1 className="text-5xl font-bold tracking-tighter leading-[57px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                                                Shipping your goods as seemless as possible
                                            </h1>
                                            <h3 className="mt-5 text-2xl leading-7 text-black max-md:max-w-full">
                                                A great platform to streamline your shipping
                                                operations or an individual sending a package, UHub
                                                Logistics has you covered.
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
                        <div className=' ml-10 lg:absolute w-[500px] lg:mt-[500px] md:relative  md:mt-[100px] max-sm:hidden'>
                            <Tab />
                        </div>
                    </div>
                    <div className=" w-full h-full max-md:ml-0 max-md:w-full items-end justify-end self-end lg:flex md:hidden max-sm:hidden">
                        <img src={map} alt="" className=' ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hero

{/* <div className=" flex gap-5 items-start pt-6 pl-4 mt-8 max-w-full text-base font-medium tracking-normal bg-white rounded-xl border-b border-solid border-slate-200 text-indigo-950 w-[469px] max-md:flex-wrap">
                                    <div className="flex flex-col whitespace-nowrap">
                                        <h1 className="self-center">Track</h1>
                                        <div className="shrink-0 mt-5 rounded-xl bg-indigo-950 h-[3px]" />
                                    </div>
                                    <h1>Shipping Rates</h1>
                                    <h1 className="flex-auto">Send a Shipment</h1>
                                </div>
                                <div className="flex gap-5 py-6 pr-20 pl-9 text-base tracking-normal w-full bg-white rounded-e-lg max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <input className="flex-auto my-auto text-stone-300 p-2 outline-none border-b-[1px]" type="text" placeholder='Type your tracking number' />
                                    
                                    <button className="justify-center px-8 py-4 bg-amber-500 rounded-lg text-indigo-950 max-md:px-5">
                                        Track Shipment
                                    </button>
                                </div> */}
{/* <div className=" absolute flex flex-col  mt-28 w-[18%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col pb-5 w-full text-center bg-white rounded-lg border border-solid border-blue-800 border-opacity-50 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={trichy}
                                    className="w-full aspect-[1.56]"
                                />
                                <div className="flex flex-col self-start mt-5 ml-4 max-md:ml-2.5">
                                    <h2 className="text-2xl font-bold text-black">
                                        Trichy
                                    </h2>
                                    <h2 className="mt-2 text-xs text-zinc-500">
                                        Gandhi Nagar, TN
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className=" absolute mt-[500px] ml-[680px] flex grow gap-0 items-start  text-center max-md:mt-10">
                            <div className="flex flex-col self-end pt-1 pb-4 mt-64 bg-white rounded-lg border border-solid border-blue-800 border-opacity-50 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={chennai}
                                    className="self-center aspect-[1.61] w-[170px]"
                                />
                                <div className="mt-4 text-2xl font-bold text-black">
                                    Chennai
                                </div>
                                <div className="mt-3.5 text-xs text-zinc-500">
                                    Ashok Nagar, TN
                                </div>
                            </div>
                        </div> */}