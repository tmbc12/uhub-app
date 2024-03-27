import React from 'react'
import Test1 from "../../assets/img/test-1.png"
import Test2 from "../../assets/img/test-2.png"
import Test3 from "../../assets/img/test-3.png"
const test = () => {
    return (
        <div className=' mt-16 flex items-center justify-center'>
            <div className=" container flex flex-col items-center pt-12 pr-20 pb-4 pl-9 bg-white max-w-[860px] max-md:px-5">
                <h1 className="text-5xl font-bold text-indigo-950 max-md:text-4xl">
                    Testimonials
                </h1>
                <h1 className="mt-9 text-xl text-center text-zinc-500">
                    See what our cleints have to say about us
                </h1>
                <h1 className="self-start mt-16 text-2xl text-center text-zinc-500 max-md:mt-10 max-md:max-w-full">
                    “Uhub's ability to provide flexible logistics solutions has been crucial
                    for our business growth. Whether it's a small parcel or a large
                    shipment, Uhub has consistently adapted to our evolving needs, making
                    them a reliable partner in our journey.”
                    <br />
                    <br />
                    <span className="font-bold text-amber-500">Emily Chen</span>
                    <span className="text-amber-500">,</span>{" "}
                    <span className="text-zinc-500">
                        Operations Coordinator, GreenTech Solutions
                    </span>
                </h1>
                <div className="flex gap-5 items-center mt-10">
                    <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch aspect-square w-[60px]">
                        {/* <img
                            loading="lazy"
                            srcSet="..."
                            className="object-cover absolute inset-0 size-full"
                        /> */}
                        <img
                            loading="lazy"
                            srcSet={Test1} alt='Test1'
                            className="w-full aspect-square"
                        />
                    </div>
                    <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch my-auto aspect-square w-[60px]">
                        {/* <img
                            loading="lazy"
                            srcSet="..."
                            className="object-cover absolute inset-0 size-full"
                        /> */}
                        <img
                            loading="lazy"
                            srcSet={Test2} alt='test2'
                            className="w-full aspect-square"
                        />
                    </div>
                    <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch my-auto aspect-square w-[60px]">
                        {/* <img
                            loading="lazy"
                            srcSet="..."
                            className="object-cover absolute inset-0 size-full"
                        /> */}
                        <img
                            loading="lazy"
                            srcSet={Test3} alt='test3'
                            className="w-full aspect-square"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default test