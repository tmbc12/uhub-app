import React from 'react'

const shipment = () => {
    return (
        <div className="flex flex-col items-center py-9 bg-white">
            <div className="flex gap-5 justify-between w-full text-lg leading-6 max-w-[1240px] text-zinc-800 max-md:flex-wrap max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 my-auto max-w-full aspect-[3.13] w-[129px]"
                />
                <div className="flex gap-5 items-center px-5 max-md:flex-wrap max-md:max-w-full">
                    <div className="self-stretch my-auto">Home</div>
                    <div className="flex-auto self-stretch my-auto font-medium text-indigo-950">
                        Send Shipment
                    </div>
                    <div className="self-stretch my-auto">Contact Us</div>
                    <div className="self-stretch my-auto">Log In</div>
                    <div className="justify-center self-stretch px-9 py-3.5 tracking-normal bg-amber-500 rounded-lg text-indigo-950 max-md:px-5">
                        Track order
                    </div>
                </div>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/42495e6f3fe328a4b535845e5ae0c25ca0d67deba35606b099a3fcea28a94dcd?"
                className="self-stretch mt-9 w-full border-2 border-violet-100 border-solid stroke-[2px] stroke-violet-100 max-md:max-w-full"
            />
            <div className="flex flex-col px-5 mt-16 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl font-bold leading-[70px] text-indigo-950 max-md:max-w-full">
                    Welcome,
                    <br />
                    <span className="text-xl leading-9 ">
                        Send your shipment at ease through the following steps
                    </span>
                </div>
                <div className="mt-16 text-xl font-medium leading-7 text-indigo-950 max-md:mt-10 max-md:max-w-full">
                    Are you sending as a
                </div>
                <div className="flex gap-5 mt-4 max-md:flex-wrap">
                    <div className="flex flex-col flex-1 grow shrink-0 justify-center basis-0 w-fit max-md:max-w-full">
                        <div className="flex gap-5 px-10 py-7 bg-white rounded-md border border-violet-100 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                            <div className="flex-auto my-auto text-2xl leading-5 text-indigo-950">
                                Personal Courier
                            </div>
                            <div className="flex overflow-hidden relative flex-col justify-center items-center aspect-square w-[29px]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1652d63aadcfbd1a8e47aaf212bf63a015a40f3eaa157cc978f08d8b0ccb060?"
                                    className="object-cover absolute inset-0 size-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1652d63aadcfbd1a8e47aaf212bf63a015a40f3eaa157cc978f08d8b0ccb060?"
                                    className="w-full aspect-square"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1  gap-5 px-10 py-7 text-2xl leading-5 bg-white rounded-md border border-violet-100 border-solid text-indigo-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                        <div className="flex-auto my-auto">Business Courier</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1652d63aadcfbd1a8e47aaf212bf63a015a40f3eaa157cc978f08d8b0ccb060?"
                            className="shrink-0 aspect-square w-[29px]"
                        />
                    </div>
                </div>
                <div className="justify-center self-end px-16 py-5 mt-14 text-lg tracking-normal whitespace-nowrap bg-amber-500 rounded-lg text-indigo-950 max-md:pr-7 max-md:pl-7 max-md:mt-10">
                    Next
                </div>
            </div>
            <div className="flex flex-col mt-28 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between items-start px-5 text-sm font-medium tracking-normal text-slate-600 max-md:flex-wrap max-md:max-w-full">
                    <img
                        loading="lazy"
                        srcSet="..."
                        className="shrink-0 max-w-full aspect-[3.13] w-[129px]"
                    />
                    <div className="flex flex-col self-stretch">
                        <div className="text-lg tracking-normal text-black">Corporate</div>
                        <div className="mt-7">Investor Relations</div>
                        <div className="mt-6">Delivering Good</div>
                        <div className="mt-6">Franchise</div>
                        <div className="mt-6">Certifications</div>
                        <div className="mt-6">MyUS</div>
                        <div className="mt-6">About Uhub</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-lg tracking-normal text-black">Legal</div>
                        <div className="mt-6">Terms Of Use</div>
                        <div className="mt-6">Fraud Prevention</div>
                        <div className="mt-6">Privacy Policy</div>
                        <div className="mt-6">Cookie Policy</div>
                        <div className="mt-6">SDK Policy</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-lg tracking-normal text-black">
                            Developers Center
                        </div>
                        <div className="mt-7">Uhub APIs</div>
                        <div className="mt-6">E- Commerce Platforms</div>
                        <div className="mt-6">Uhub.Com Platform</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-lg tracking-normal text-black">Connect</div>
                        <div className="mt-7">Careers</div>
                        <div className="mt-6">UhubPress</div>
                        <div className="mt-6">Blogistics</div>
                        <div className="mt-6">Help & Support Center</div>
                    </div>
                </div>
                <div className="flex gap-5 px-5 mt-32 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex-auto text-sm font-medium tracking-normal text-slate-600">
                        2024Uhub.All rights reserved
                    </div>
                    <div className="flex flex-1 gap-5 justify-between">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/afcbb7129aa87f6ebeb2c1b429155d13657f4282853b667d7be345f689bd5142?"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5791bcb95d4cf5f1f31798e917aa4f2296b142461d1e59d9e9f29476d593d328?"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/034b94bc719af695da53066ecfbc2a3fccce315229e8d0d8cd2ef82e0b58e3bf?"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c545addada073f869ed660f4a4bfbac83f16546dc38fdf8b0987de551a695477?"
                            className="shrink-0 w-6 aspect-square"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default shipment
