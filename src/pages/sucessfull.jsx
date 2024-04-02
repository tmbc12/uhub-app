import React from 'react';
import Success from "../assets/img/success.png";
import BG from "../assets/img/Registrationsignup.png";
const success = () => {
    return (
        <div>
            <div className="flex flex-col justify-center text-center bg-white">
                <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-screen h-screen max-md:px-5 max-md:max-w-full">
                    <img
                        loading="lazy"
                        srcSet={BG}
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative flex-col items-center px-12 py-14 max-w-full bg-white rounded-3xl shadow-2xl w-[625px] max-md:px-5 max-md:my-10">
                        <img
                            loading="lazy"
                            src={Success}
                            className="aspect-square w-[50px]"
                        />
                        <div className="mt-7 text-2xl font-bold text-indigo-950">
                            SUCCESS!
                        </div>
                        <div className="self-stretch mt-8 text-lg font-medium leading-8 text-neutral-600 max-md:max-w-full">
                            <span className="">Thank you for your request. </span>
                            <br />
                            <span className="">
                                Our delivery staff will come to your location to pick up your
                                order.
                            </span>
                            <br />
                            <span className="font-light leading-8">
                                Kindly check your email for confirmation.
                            </span>
                        </div>
                        <a href="/">
                            <button className=' bg-[#1C174D] py-4 px-12 text-white font-medium text-xl mt-3 rounded-lg'>Back to Home</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default success
