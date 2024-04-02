import React from 'react'
import { CircleChevronRight } from 'lucide-react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const shipment = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center py-9 bg-white">
                <div className="flex flex-col px-5 mt-16 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
                    <h1 className="text-4xl font-bold text-indigo-950 max-md:max-w-full">
                        Welcome,
                        <br />
                        <span className="text-xl  max-sm:text-md ">
                            Send your shipment at ease through the following steps
                        </span>
                    </h1>
                    <h1 className="mt-16 text-xl font-medium leading-7 text-indigo-950 max-md:mt-10 max-md:max-w-full ">
                        Are you sending as a
                    </h1>
                    <div className="flex gap-5 mt-4 max-md:flex-wrap max-sm:flex-col ">
                        <button className="flex flex-1  gap-5 px-10 py-7 text-2xl font-medium leading-5 bg-white rounded-md border border-violet-100 border-solid text-indigo-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full justify-between">
                            Personal Courier
                            <CircleChevronRight color='#F8A72C' />
                        </button>
                        <button className="flex flex-1  gap-5 px-10 py-7 text-2xl font-medium leading-5 bg-white rounded-md border border-violet-100 border-solid text-indigo-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full justify-between">Business Courier
                            <CircleChevronRight color='#F8A72C' />
                        </button>
                    </div>
                    <button className="justify-center self-end px-16 py-5 mt-14 text-lg font-medium tracking-normal whitespace-nowrap bg-amber-500 rounded-lg text-indigo-950 max-md:pr-7 max-md:pl-7 max-md:mt-10">
                        Next
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default shipment
