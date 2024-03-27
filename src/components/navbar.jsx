import React from 'react'
import logo from "../assets/icons/Logo.png"
import { ArrowRight } from 'lucide-react';
const navbar = () => {
    return (
        <div className="flex flex-col items-center py-9 bg-white">
            <div className=" container flex gap-5 justify-between w-full text-lg leading-6 text-zinc-800 max-md:flex-wrap max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet={logo} alt='logo'
                    className="shrink-0 my-auto max-w-full aspect-[3.13] w-[129px]"
                />
                <div className="flex gap-12 items-center max-md:flex-wrap max-md:max-w-full ">
                    <a className=" text-lg font-medium cursor-pointer">Home</a>
                    <a className=" text-lg font-medium cursor-pointer"> Send Shipment</a>
                    <a className=" text-lg font-medium cursor-pointer">Contact Us</a>
                    <a className=" text-lg font-medium cursor-pointer">Log In</a>
                    <div className=' flex gap-1 cursor-pointer bg-amber-500 rounded-lg text-indigo-950 font-medium max-md:px-5 px-6 py-3 items-center'>
                        <button className="justify-center self-stretch  tracking-normal">
                            Track order
                        </button>
                        <ArrowRight size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar