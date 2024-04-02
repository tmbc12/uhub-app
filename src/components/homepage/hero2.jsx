import React from 'react'
import Parcel from "../../assets/img/parcel.png";
import schedule from "../../assets/img/schedule.png";
const hero2 = () => {
    return (
        <div className=' flex items-center justify-center max-sm:-mt-5'>
            <div className=" container p-20 bg-white max-md:px-5">
                <div className=" absolute -ml-20 px-12 py-7 mt-8 max-w-full bg-white rounded-lg border border-amber-500 border-solid 
                shadow-lg w-[430px] max-md:px-5 md:hidden lg:block max-sm:hidden sm:hidden">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
                        <div className="flex flex-col max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet={schedule}
                                className="shrink-0 mx-auto rounded-full border-2 border-solid aspect-square bg-slate-200 border-slate-300 
                                w-16 p-3  stroke-[1.5px]  max-md:mt-10"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto text-center max-md:mt-10">
                                <div className="text-xl font-bold text-indigo-950">
                                    Schedule a shipment
                                </div>
                                <div className="mt-2.5 text-sm text-zinc-500">
                                    Choose from a list of available carriers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-5 max-md:gap-0">
                    <div className=" lg:flex justify-between ml-5 max-md:ml-0 max-md:w-full max-md:flex-col max-md:items-center max-md:justify-center">
                        <div className=" lg:w-[40%] max-md:ml-0  max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet={Parcel} alt='Parcel'
                                className="grow w-full aspect-[1.05] max-md:mt-10 max-md:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col lg:w-[42%] self-stretch my-auto text-black md:mt-10 max-md:max-w-full">
                            <div className="text-4xl font-bold leading-10 max-md:max-w-full sm:mt-5">
                                Innovative Solutions for the Modern Business
                            </div>
                            <div className="mt-10 text-xl leading-7 max-md:max-w-full">
                                Stay ahead in the fast-paced business environment with Uhub's
                                innovative logistics solutions. From real-time tracking and
                                advanced analytics to cutting-edge technology, we empower your
                                business with the tools it needs to thrive in the digital age.
                            </div>
                            <button className="justify-center self-start px-9 py-3.5 mt-8 font-semibold text-lg tracking-normal bg-amber-500 rounded-lg text-indigo-950 max-md:px-5">
                                See more
                            </button>
                        </div>
                    </div>
                    <div className=' absolute mt-[500px] md:hidden lg:block max-sm:hidden sm:hidden'>
                        <div className=" absolute ml-80 -mt-8 flex z-10 justify-center items-center self-center px-4 rounded-full border-2 border-white border-solid bg-indigo-950 h-[60px] stroke-[2px] w-[60px] max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7990e20f08c22907ae203c152ea92d1723036b567cf495ef2e6221d822eeae3?"
                                className="w-full aspect-square"
                            />
                        </div>
                        <div className="  flex flex-col ml-12 items-start py-7 pr-20 pl-8 max-w-full bg-white rounded-lg border border-amber-500 border-solid shadow-lg w-[425px] max-md:px-5">
                            <div className="text-xl font-bold text-center text-indigo-950">
                                Find the best deal
                            </div>
                            <div className="mt-4 text-sm text-zinc-500">
                                Select the shipping option that meets your requirements
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="flex flex-col pt-8">
                <div className="px-12 py-7 mt-8 max-w-full bg-white rounded-lg border border-amber-500 border-solid shadow-lg w-[430px] max-md:px-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="..."
                                className="shrink-0 mx-auto rounded-full border-2 border-solid aspect-square bg-slate-200 border-slate-300 h-[60px] stroke-[1.5px] w-[60px] max-md:mt-10"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto text-center max-md:mt-10">
                                <div className="text-xl font-bold text-indigo-950">
                                    Schedule a shipment
                                </div>
                                <div className="mt-2.5 text-sm text-zinc-500">
                                    Choose from a list of available carriers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col self-center px-5 w-full max-w-[1047px] max-md:max-w-full">
                    <div className="self-end mr-11 text-4xl font-bold leading-10 text-black w-[478px] max-md:mr-2.5 max-md:max-w-full">
                        Innovative Solutions for the Modern Business
                    </div>
                    <div className="self-end mt-10 text-xl leading-7 text-black w-[498px] max-md:max-w-full">
                        Stay ahead in the fast-paced business environment with Uhub's
                        innovative logistics solutions. From real-time tracking and advanced
                        analytics to cutting-edge technology, we empower your business with
                        the tools it needs to thrive in the digital age.
                    </div>
                    <div className="justify-center self-center px-9 py-3.5 mt-8 ml-28 text-lg tracking-normal bg-amber-500 rounded-lg text-indigo-950 max-md:px-5">
                        See more
                    </div>
                    <div className="flex z-10 justify-center items-center self-center px-4 mt-11 rounded-full border-2 border-white border-solid bg-indigo-950 h-[60px] stroke-[2px] w-[60px] max-md:mt-10">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7990e20f08c22907ae203c152ea92d1723036b567cf495ef2e6221d822eeae3?"
                            className="w-full aspect-square"
                        />
                    </div>
                    <div className="flex flex-col items-start py-7 pr-20 pl-8 max-w-full bg-white rounded-lg border border-amber-500 border-solid shadow-lg w-[425px] max-md:px-5">
                        <div className="text-xl font-bold text-center text-indigo-950">
                            Find the best deal
                        </div>
                        <div className="mt-4 text-sm text-zinc-500">
                            Select the shipping option that meets your requirements
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default hero2
