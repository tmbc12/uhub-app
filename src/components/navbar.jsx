import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../assets/icons/Logo.png"
import { ArrowRight } from 'lucide-react';

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Send Shipment', href: '#', current: false },
    { name: 'Contact Us', href: '#', current: false },
    { name: 'Log In', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className=" bg-white">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                </div>

                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                                {/* Profile dropdown */}
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4 items-center justify-center font-semibold">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className=""
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                        <div className=' flex gap-1 cursor-pointer bg-amber-500 rounded-lg text-indigo-950 font-medium max-md:px-5 px-6 py-3 items-center'>
                                            <button className="justify-center self-stretch  tracking-normal">
                                                Track order
                                            </button>
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-[#F8A11E] text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

// import React from 'react'
// import logo from "../assets/icons/Logo.png"
// import { ArrowRight } from 'lucide-react';
// const navbar = () => {
//     return (
//         <div className=" items-center justify-center flex flex-col py-9 bg-white">
//             <div className=" container items-center flex gap-5 justify-between w-full text-lg leading-6 text-zinc-800 max-md:flex-wrap max-md:max-w-full">
//                 <img
//                     loading="lazy"
//                     srcSet={logo} alt='logo'
//                     className="shrink-0 my-auto max-w-full aspect-[3.13] w-[129px]"
//                 />
//                 <div className="flex gap-12 items-center max-md:flex-wrap max-md:max-w-full ">
//                     <a className=" text-lg font-medium cursor-pointer">Home</a>
//                     <a className=" text-lg font-medium cursor-pointer"> Send Shipment</a>
//                     <a className=" text-lg font-medium cursor-pointer">Contact Us</a>
//                     <a className=" text-lg font-medium cursor-pointer">Log In</a>
//                     <div className=' flex gap-1 cursor-pointer bg-amber-500 rounded-lg text-indigo-950 font-medium max-md:px-5 px-6 py-3 items-center'>
//                         <button className="justify-center self-stretch  tracking-normal">
//                             Track order
//                         </button>
//                         <ArrowRight size={20} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default navbar