import React from 'react';
import map from "../../assets/img/maps.png";
import chennai from "../../assets/img/chennai.png";
import trichy from "../../assets/img/trichy.png";
const hero = () => {
    return (
        <div className="  flex  px-16 py-20 mt-4 w-full justify-between max-md:px-5 max-md:max-w-full bg-slate-100">
            <div className=" container mt-3.5 mb-10 w-full  max-md:max-w-full">
                <div className="flex justify-between gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col max-md:mt-2 max-md:max-w-full">
                            <div className="max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow mt-3 max-md:mt-10 max-md:max-w-full">
                                            <div className="text-5xl font-bold tracking-tighter leading-[57px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                                                Shipping your goods as seemless as possible
                                            </div>
                                            <div className="mt-9 text-2xl leading-7 text-black max-md:max-w-full">
                                                A great platform to streamline your shipping
                                                operations or an individual sending a package, UHub
                                                Logistics has you covered.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col pb-5 w-full text-center bg-white rounded-lg border border-solid border-blue-800 border-opacity-50 max-md:mt-10">
                                            <img
                                                loading="lazy"
                                                srcSet={trichy}
                                                className="w-full aspect-[1.56]"
                                            />
                                            <div className="flex flex-col self-start mt-5 ml-4 max-md:ml-2.5">
                                                <div className="text-2xl font-bold text-black">
                                                    Trichy
                                                </div>
                                                <div className="mt-2 text-xs text-zinc-500">
                                                    Gandhi Nagar, TN
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 mt-9 max-w-full text-7xl font-bold leading-[116px] text-zinc-500 w-[247px] max-md:text-4xl max-md:leading-[68px]">
                                <div className="flex flex-1 gap-4 max-md:text-4xl max-md:leading-[68px]">
                                    <div className="shrink-0 rounded-2xl bg-indigo-950 h-[63px] w-[3px]" />
                                    <div className="max-md:text-4xl max-md:leading-[68px]">
                                        <span className="text-3xl leading-10 text-indigo-950">
                                            50k+
                                        </span>
                                        <br />
                                        <span className="text-lg leading-7  text-zinc-500">
                                            deliveries
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-4 max-md:text-4xl max-md:leading-[68px]">
                                    <div className="shrink-0 rounded-2xl bg-indigo-950 h-[63px] w-[3px]" />
                                    <div className="max-md:text-4xl max-md:leading-[68px]">
                                        <span className="text-3xl leading-10 text-indigo-950">
                                            10k+
                                        </span>
                                        <br />
                                        <span className="text-lg leading-7  text-zinc-500">
                                            clients
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start pt-6 mt-8 max-w-full text-base font-medium tracking-normal bg-white rounded-xl border-b border-solid border-slate-200 text-indigo-950 w-[469px] max-md:flex-wrap">
                                <div className="flex flex-col whitespace-nowrap">
                                    <div className="self-center">Track</div>
                                    <div className="shrink-0 mt-5 rounded-xl bg-indigo-950 h-[3px]" />
                                </div>
                                <div>Shipping Rates</div>
                                <div className="flex-auto">Send a Shipment</div>
                            </div>
                            <div className="flex gap-5 py-6 pr-20 pl-9 text-base tracking-normal bg-white rounded-none max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                <div className="flex-auto my-auto text-stone-300">
                                    Type your tracking number
                                </div>
                                <div className="justify-center px-8 py-4 bg-amber-500 rounded-lg text-indigo-950 max-md:px-5">
                                    Track Shipment
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                        <img src={map} alt="" className=' absolute' />
                        <div className=" absolute flex grow gap-0 items-start mt-36 text-center max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/843b4fc354c89243c436c3d373524cbbb1f269f4ee9e34d33dba1e5479656a95?"
                                className="z-10 shrink-0 self-start w-52 max-w-full aspect-[0.66]"
                            />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hero