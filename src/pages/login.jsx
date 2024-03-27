import React, { useState, useform } from 'react';
import map from "../assets/img/maps.png";
import logo from "../assets/icons/Logo.png";
import Facebook from "../assets/icons/Facebook.png";
import Apple from "../assets/icons/apple.png";
import google from "../assets/icons/google.png";
import { User, Lock, Eye  } from 'lucide-react';

const Login = () => {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div className=" items-center  justify-center pr-20 bg-white max-md:pr-5">
            <div className="flex gap-5 items-center justify-between max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[48%] max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        srcSet={map}
                        className="grow w-screen h-screen aspect-[0.94] max-md:mt-10 max-md:max-w-full"
                    />
                </div>
                <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            srcSet={logo}
                            className="max-w-full aspect-[3.23] w-[103px]"
                        />
                        <h1 className="mt-10 text-3xl font-medium text-neutral-800 max-md:max-w-full">
                            Sign in
                        </h1>
                        <h1 className="mt-8 text-base text-neutral-800 max-md:max-w-full">
                            If you don’t have an account register
                        </h1>
                        <h1 className="mt-3.5 text-base text-amber-500 max-md:max-w-full">
                            <span className="">You can </span>
                            <a href='#' className="font-medium text-amber-500 cursor-pointer">
                                Register here !
                            </a>
                        </h1>
                        <h1 className="mt-16 text-sm font-medium text-neutral-800 max-md:mt-10 max-md:max-w-full">
                            Username
                        </h1>
                        <div className=' flex items-center'>
                            <User size={20} />
                            <input type='text' placeholder='Enter Your Username' className=' p-2 outline-none w-full' />
                        </div>
                        <div className="shrink-0 mt-3 h-0.5 bg-amber-500 max-md:max-w-full" />
                        <h1 className=" mt-10 text-sm font-medium text-neutral-800">
                            Password
                        </h1>
                        <div className=' flex items-center '>
                            <Lock size={20} />
                            <input
                                    placeholder="Password"
                                    name="password"
                                    type={passwordShown ? "text" : "password"}
                                    className=' p-2 w-full outline-none'
                                />
                                <Eye onClick={togglePasswordVisiblity} className=' flex right-0 '/>
                        </div>
                        <div className="shrink-0 mt-2.5 h-0.5 bg-black max-md:max-w-full" />
                        <div className="flex gap-5 mt-5 w-full text-xs text-black max-md:flex-wrap max-md:max-w-full">
                            <div className="flex flex-1 gap-2.5">
                                <input type='checkbox' className="shrink-0 bg-white rounded-sm border border-black border-solid h-[15px] w-[15px]" />
                                <h1 className="my-auto">Remember me</h1>
                            </div>
                            <a className="flex cursor-pointer justify-end items-end">Forgot Password?</a>
                        </div>
                        <button className="justify-center items-center py-3 mt-16 text-lg font-medium text-white whitespace-nowrap bg-amber-500 rounded-lg shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            Login
                        </button>
                        <div className=' flex flex-col items-center justify-center gap-4'>
                            <h1 className=" mt-11 text-base font-medium text-neutral-700 max-md:mt-10">
                                or continue with
                            </h1>
                            <div className=' flex gap-2'>
                                <a href="#"><img src={Facebook} alt='Facebook' /></a>
                                <a href="#"><img src={Apple} alt='Apple' /></a>
                                <a href="#"><img src={google} alt='google' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login