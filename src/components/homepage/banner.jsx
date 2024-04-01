import React from 'react'

const banner = () => {
    return (
        <div>
            <div className="flex justify-center items-center self-stretch px-16 py-16 mt-32 w-full bg-indigo-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[554px]">
                    <h1 className="self-center text-4xl font-bold text-indigo-200">
                        Ready to get started?{" "}
                    </h1>
                    <h1 className="mt-12 text-2xl text-center text-white max-md:mt-10 max-md:max-w-full">
                        Sign up now or log in to your UHub Logistics account.{" "}
                    </h1>
                    <div className="flex items-center justify-between gap-5 px-7 py-5 mt-8 bg-white rounded-md max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                        <input type='text' placeholder='Enter your email address' className=' p-2 w-full outline-none max-sm:w-auto' />
                        <button className="justify-center px-8 py-3 text-base tracking-normal whitespace-nowrap bg-amber-500 rounded-lg text-indigo-950 max-md:px-5">
                            Submit
                        </button>
                    </div>
                    <p className="self-center mt-8 text-base text-center text-white w-[451px] max-md:max-w-full">
                        Join now and discover how shipping can be stress-free and
                        straightforward!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default banner