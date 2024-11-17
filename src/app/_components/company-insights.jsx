import { Button } from "@/components/ui/button";
import { Apple, Bookmark } from "lucide-react";
import React from "react";

const CompanyInsights = ({ step, label, text }) => {
    return (
        <div className="flex  flex-col">
            <p className="text-sm mb-3 text-gray-400">STEP {step}</p>
            <div>
                <div className="text-xs lg:text-sm text-gray-400 flex items-center gap-1">
                    <p>Company Insider + Prep /</p>

                    <p>Apple</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                    <Button className="rounded-full">General</Button>
                    <Button
                        variant="ghost"
                        className="rounded-full text-gray-600 border-[1px] border-gray-600"
                    >
                        Interview Prep
                    </Button>
                    <Button
                        variant="ghost"
                        className="rounded-full text-gray-600 border-[1px] border-gray-600"
                    >
                        Chat
                    </Button>
                </div>
                <div className="flex flex-col relative gap-6 mt-3 overflow-hidden ">
                    <InsightCard />
                    <InsightCard light={true} />
                    <InsightCard light={true} />
                    <div className="w-full h-2/5 absolute bottom-0 left-0 bg-gradient-to-t from-gray-50 backdrop-blur-sm via-gray-50/50  to-transparent">
                        <div className="w-full flex flex-col items-center justify-end h-full">
                            <p className="text-2xl md:text-3xl">
                                Company Insights
                            </p>
                            <p className="text-gray-500 text-xl md:text-2xl text-center">
                                Get insider prep and data for top companies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InsightCard = ({ light = false }) => (
    <div
        className={`w-full h-auto  ${
            light ? "bg-white" : "bg-[#545454]"
        } rounded-2xl p-4`}
    >
        <div className="w-full flex justify-between">
            <Button
                className={`${
                    light
                        ? "bg-[#F2F2F2] text-gray-400"
                        : "bg-[#656565] text-white"
                } rounded-lg`}
            >
                Essential
            </Button>
            <Bookmark size={25} className="text-white" />
        </div>
        <div className="w-full flex flex-col  mt-3 justify-center">
            <p
                className={` text-lg   md:text-2xl font-medium ${
                    light ? "text-black" : "text-white"
                }`}
            >
                Company’s Real Purpose
            </p>
            <p
                className={`text-base md:text-lg ${
                    light ? "text-gray-600" : "text-white"
                }`}
            >
                Understand the company’s mission and how your role contributes
                to their
            </p>
        </div>
    </div>
);

export default CompanyInsights;
