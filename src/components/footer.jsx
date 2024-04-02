import React from 'react'
import logo from "../assets/icons/Logo.png"

const footer = () => {
    return (
        <div className="  flex flex-col mt-28 w-full max-md:mt-10 max-md:max-w-full items-center">
            <div className=" container grid grid-cols-5 lg:grid-cols-5 max-sm:grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-5 justify-between items-start px-5 text-sm font-medium tracking-normal text-slate-600 max-md:flex-wrap max-md:max-w-full ">
                <img
                    loading="lazy"
                    srcSet={logo} alt='logo'
                    className="shrink-0 max-w-full aspect-[3.13] w-[129px]"
                />
                <div className="flex flex-col self-stretch">
                    <a href="" className=' text-xl text-black font-bold'>Corporate</a>
                    <a href="" className=' mt-3'>Investor Relations</a>
                    <a href="" className=' mt-3'>Delivering Good</a>
                    <a href="" className=' mt-3'>Franchise</a>
                    <a href="" className=' mt-3'>Certifications</a>
                    <a href="" className=' mt-3'>MyUS</a>
                    <a href="" className=' mt-3'>About Uhub</a>
                </div>
                <div className="flex flex-col">
                    <a href="" className=' text-xl text-black font-bold'>Legal</a>
                    <a href="" className=' mt-3'>Terms Of Use</a>
                    <a href="" className=' mt-3'>Fraud Prevention</a>
                    <a href="" className=' mt-3'>Privacy Policy</a>
                    <a href="" className=' mt-3'>Cookie Policy</a>
                    <a href="" className=' mt-3'>SDK Policy</a>
                </div>
                <div className="flex flex-col">
                    <a href="" className=' text-xl text-black font-bold'>Developers Center</a>
                    <a href="" className=' mt-3'>Uhub APIs</a>
                    <a href="" className=' mt-3'>E- Commerce Platforms</a>
                    <a href="" className=' mt-3'>Uhub.Com Platform</a>
                    
                </div>
                <div className="flex flex-col">
                    <a href="" className=' text-xl text-black font-bold'>Connect</a>
                    <a href="" className=' mt-3'>Careers</a>
                    <a href="" className=' mt-3'>UhubPress</a>
                    <a href="" className=' mt-3'>Blogistics</a>
                    <a href="" className=' mt-3'>Help & Support Center</a>
                </div>
            </div>
            <div className="flex gap-5 px-5 mt-5 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full border-t-2 pb-6">
                <h1 className="flex-auto text-md font-medium tracking-normal text-slate-600 mt-8">
                    2024Uhub.All rights reserved
                </h1>
                <div className="flex flex-1 gap-10  items-end justify-end">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/afcbb7129aa87f6ebeb2c1b429155d13657f4282853b667d7be345f689bd5142?"
                        className="shrink-0 w-6 aspect-square cursor-pointer"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5791bcb95d4cf5f1f31798e917aa4f2296b142461d1e59d9e9f29476d593d328?"
                        className="shrink-0 w-6 aspect-square cursor-pointer"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/034b94bc719af695da53066ecfbc2a3fccce315229e8d0d8cd2ef82e0b58e3bf?"
                        className="shrink-0 w-6 aspect-square cursor-pointer"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c545addada073f869ed660f4a4bfbac83f16546dc38fdf8b0987de551a695477?"
                        className="shrink-0 w-6 aspect-square cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default footer