import React from 'react'
import img from "../../assets/img/img.png";
import rs from "../../assets/icons/rs.svg";
import Frame from "../../assets/icons/Frame.svg";
import Frame1 from "../../assets/icons/Frame1.svg";
const hero = () => {
    return (
        <div className='  items-center justify-center flex mt-16'>
            <div className=" container px-14 py-16 rounded-md border border-violet-200 border-solid bg-slate-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex justify-between items-center max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow mt-1.5 max-md:mt-10 max-md:max-w-full">
                            <div className="text-4xl font-bold text-black leading-[53px] max-md:max-w-full">
                                It’s like having 40 addresses all around the world!
                            </div>
                            <div className="mt-9 text-xl leading-7 text-black max-md:max-w-full">
                                Have your shopping delivered from anywhere around Tamil Nadu.
                            </div>
                            <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow items-center text-center text-black max-md:mt-10">
                                            <img
                                                loading="lazy"
                                                srcSet={Frame1}
                                                className="w-16 p-3 rounded-full border border-solid aspect-square border-slate-200 stroke-[1px]"
                                            />
                                            <div className="self-stretch mt-6 text-xl font-bold leading-7">
                                                Get peace of mind
                                            </div>
                                            <div className="mt-3 text-base leading-5">
                                                Track orders in real-time
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col text-center text-black leading-[132%] max-md:mt-10">
                                            <img
                                                loading="lazy"
                                                srcSet={Frame}
                                                className="self-center w-16 p-3 rounded-full border border-solid aspect-square border-slate-200 stroke-[1px]"
                                            />
                                            <div className="mt-6 text-xl font-bold">Be in control</div>
                                            <div className="mt-4 text-base">Schedule shipments</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow items-center text-center text-black max-md:mt-10">
                                            <img
                                                loading="lazy"
                                                srcSet={rs}
                                                className="w-16 p-3 rounded-full border border-solid aspect-square border-slate-200 stroke-[1px]"
                                            />
                                            <div className="mt-6 text-xl font-bold leading-7">
                                                Stay safe
                                            </div>
                                            <div className="self-stretch mt-3 text-base leading-5">
                                                Secure, contactless payments
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet={img}
                            className="w-full aspect-[0.96] max-md:mt-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hero