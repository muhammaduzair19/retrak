import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <section id="home" className="w-full min-h-screen px-4 md:px-10  lg:px-20 bg-gradient-to-b  from-blue-200/60 via-transparent to-transparent ">
            <div className="w-full md:border-x border-gray-300 px-8">
                <div className="flex flex-col items-center w-full md:border-x border-gray-300">
                    <Button
                        variant="secondary"
                        className=" rounded-lg md:rounded-xl mt-5 md:mt-10 text-base py-5 border-[1px] border-gray-300 text-gray-500"
                    >
                        <Sparkles fill="#6b7280" />
                        Coming 2025
                    </Button>
                    <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-10">
                        Effortless{" "}
                        <span className="text-gray-500">Job Tracking</span> and{" "}
                        <br className="max-md:hidden" />
                        Resume Building Made{" "}
                        <span className="text-gray-500">Simple</span>
                    </h1>
                    <p className="text-base md:text-xl lg:text-2xl text-gray-500 text-center lg:w-[1000px] mt-5">
                        Track applications, create standout resumes, and find
                        personalized job recommendations—all in one organized
                        space. Let Retrak streamline your job search journey.
                    </p>
                    <div className="flex items-center flex-wrap justify-center gap-2 md:gap-8 mt-5">
                        <div className="flex items-center gap-1">
                            <span className="p-0.5 border-[1px] border-gray-500 rounded-md flex justify-center items-center">
                                <Check size={12} className="text-gray-400" />
                            </span>
                            <p className="text-gray-600">
                                Effortless Application Tracking
                            </p>
                        </div>
                        <div className="flex items-center  gap-1">
                            <span className="p-0.5 border-[1px] border-gray-500 rounded-md flex justify-center items-center">
                                <Check size={12} className="text-gray-400" />
                            </span>
                            <p className="text-gray-600">
                                Quick Resume Builder
                            </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="p-0.5 border-[1px] border-gray-500 rounded-md flex justify-center items-center">
                                <Check size={12} className="text-gray-400" />
                            </span>
                            <p className="text-gray-600">
                                Company Insights & Prep
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-2 justify-center my-10">
                        <Button className="rounded-lg md:rounded-xl text-sm md:text-base text-white py-5">
                            Get Started for Free <ChevronRight />
                        </Button>
                        <Button
                            variant="secondary"
                            className="rounded-lg py-5 md:rounded-xl text-sm md:text-base border-[1px] border-gray-300 text-gray-500"
                        >
                            Watch Demo <ChevronRight />
                        </Button>
                    </div>
                    <div className="mt-4 relative">
                        <Image
                            src={"/automation.svg"}
                            alt="Automation"
                            width={1200}
                            height={1200}
                        />
                        <div className="z-20 bg-gradient-to-b h-8 md:h-20  from-white/5 via-transparent to-transparent backdrop-blur-sm absolute w-full  bottom-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
