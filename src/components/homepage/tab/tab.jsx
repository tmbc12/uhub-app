import React from 'react'
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./tabselector";

const Tab = () => {
    const tabs = ["account", "company", "team", "billing"];
    const [selectedTab, setSelectedTab] = useTabs(tabs);

    let selectedTabIndex = tabs.findIndex((t) => t === selectedTab);
    selectedTabIndex = selectedTabIndex < 0 ? 0 : selectedTabIndex;

    const tabWidth = 100 / tabs.length;
    const tabWidthPercent = `${tabWidth}%`;
    return (
        <>
            <nav className="flex border-b border-gray-300 bg-white shadow-2xl rounded-t-lg max-sm:w-[350px] ">
                <TabSelector
                    width={tabWidthPercent}
                    isActive={selectedTab === "account"}
                    onClick={() => setSelectedTab("account")}
                >
                    Track
                </TabSelector>
                <TabSelector
                    width={tabWidthPercent}
                    isActive={selectedTab === "company"}
                    onClick={() => setSelectedTab("company")}
                >
                    Shipping Rates
                </TabSelector>
                <TabSelector
                    width={tabWidthPercent}
                    isActive={selectedTab === "team"}
                    onClick={() => setSelectedTab("team")}
                >
                    Send a Shipment
                </TabSelector>

            </nav>
            {/* <div
                style={{
                    position: "absolute",
                    left: `${selectedTabIndex * tabWidth}%`,
                    width: `${tabWidth}%`,
                    height: "3px",
                    backgroundColor: "#1C174D",
                    transition: "left 0.2s"
                }}
            /> */}
            <div className="p-4 bg-white rounded-e-xl rounded-es-lg shadow-2xl lg:w-[1000px] md:w-[700px] max-sm:w-[350px]">
                <TabPanel hidden={selectedTab !== "account"}>
                    <div className="flex gap-5 py-6 pr-20 pl-9 text-base tracking-normal w-full bg-white rounded-e-lg max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                        <input className="flex-auto my-auto text-stone-300 p-2 outline-none border-b-[1px]" type="text" placeholder='Type your tracking number' />

                        <button className="justify-center px-8 py-4 bg-amber-500 rounded-lg text-indigo-950 max-md:px-5">
                            Track Shipment
                        </button>
                    </div>
                </TabPanel>
                <TabPanel hidden={selectedTab !== "company"}>
                    <div className="flex gap-5 justify-between pt-9 pr-4 pb-4 pl-9 w-full text-sm leading-5  max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
                        <div className="flex flex-col self-start text-red-700">
                            <h1>
                                From <span className="text-red-700">*</span>
                            </h1>
                            <input className=" p-1 outline-none border-b-[1px] mt-6 tracking-normal text-zinc-400" placeholder='Start typing the city name' type="text" name="" id="" />

                            <h1 className="mt-12 max-md:mt-10">
                                Unit <span className="text-red-700">*</span>
                            </h1>
                            <input type='text' name='' id='' placeholder='kg' className=" p-1 outline-none border-b-[1px] mt-6 tracking-normal text-zinc-800" />
                        </div>

                        <div className="flex flex-col self-start text-red-700">
                            <h1>
                                To <span className="text-red-700">*</span>
                            </h1>
                            <input className=" p-1 outline-none border-b-[1px] mt-6 tracking-normal text-zinc-400" placeholder='Start typing the city name' type="text" name="" id="" />

                            <h1 className="mt-12 max-md:mt-10">
                                Shipment Type <span className="text-red-700">*</span>
                            </h1>
                            <input className=" p-1 outline-none border-b-[1px] mt-6 tracking-normal text-zinc-400" placeholder='Document(S)' type="text" name="" id="" />
                        </div>

                        <div className="flex flex-col max-md:max-w-full">
                            <h1 className="font-medium text-red-700 leading-[130%] max-md:max-w-full">
                                Weight <span className="text-red-700">*</span>
                            </h1>
                            <input className=" p-1 outline-none border-b-[1px] mt-5 tracking-normal text-zinc-800 max-md:max-w-full" placeholder='0' type='text' name='' id='' />
                            <button className="justify-center self-end px-8 py-3 mt-28 text-base tracking-normal whitespace-nowrap bg-amber-500 rounded-lg text-indigo-950 max-md:px-5 max-md:mt-10">
                                Calculate
                            </button>
                        </div>
                    </div>
                </TabPanel>
                {/* <TabPanel hidden={selectedTab !== "team"}>Team Members</TabPanel> */}
                {/* <TabPanel hidden={selectedTab !== "billing"}>Billing</TabPanel> */}
            </div>
        </>
    )
}

export default Tab

