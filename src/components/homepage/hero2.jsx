import React from 'react'
import Parcel from "../../assets/icons/Parcel.svg";
import schedule from "../../assets/img/schedule.png";
const hero2 = () => {
    return (
        <div className=' flex items-center justify-center max-sm:-mt-5'>
            <div className=" container  bg-white max-md:px-5">
                <div className="flex justify-between items-center gap-5 max-md:gap-0">
                    <div className=" lg:flex justify-between  max-md:w-full max-md:flex-col max-md:items-center max-md:justify-center">
                        <div className=" lg:w-[40%]   max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet={Parcel} alt='Parcel'
                                className="grow w-full aspect-[1.05] max-md:mt-10 max-md:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col lg:w-[42%] self-stretch my-auto text-black md:mt-10 max-md:max-w-full fadeup">
                            <div className="text-4xl font-bold leading-10 max-md:max-w-full sm:mt-5 ">
                                Innovative Solutions for <br /> the Modern Business
                            </div>
                            <div className="mt-10 text-xl leading-7 max-md:max-w-full">
                                Stay ahead in the fast-paced business environment with Uhub's
                                innovative logistics solutions. From real-time tracking and
                                advanced analytics to cutting-edge technology, we empower your
                                business with the tools it needs to thrive in the digital age.
                            </div>
                            <button className="justify-center self-start px-9 py-3.5 mt-8 font-semibold text-lg tracking-normal bg-amber-500 rounded-lg text-white transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 max-md:px-5">
                                See more
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default hero2
