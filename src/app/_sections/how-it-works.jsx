import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkle } from "lucide-react";
import React from "react";
import ResumeBuilder from "../_components/resume-builder-card";
import ApplicationTracking from "../_components/application-tracking";
import JobRecommendation from "../_components/job-recommendation";
import CompanyInsights from "../_components/company-insights";
import SignUp from "../_components/sign-up";

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="w-full min-h-screen px-4 md:px-10  lg:px-20 py-12">
            <div className="w-full">
                <div className="flex flex-col items-center w-full">
                    <Button
                        variant="secondary"
                        className=" py-5 rounded-lg md:rounded-xl mt-5 md:mt-10 text-base border-[1px] border-gray-300 text-gray-500"
                    >
                        <Sparkle fill="#6b7280" />
                        How It Works
                    </Button>
                    <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-10">
                        Get Started in
                        <span className="text-gray-500"> 4</span>
                        <br className="max-xl:hidden" />
                        Simple <span className="text-gray-500">Steps</span>
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[4fr,4fr,4fr] gap-5 md:gap-8 mt-20">
                        <div className="w-full h-auto p-6 bg-gray-50 lg:rounded-[2rem] md:rounded-3xl rounded-xl">
                            <SignUp
                                step={1}
                                label={"Sign Up"}
                                text={"Create an account to get started."}
                            />
                        </div>
                        <div className="w-full h-auto p-6 bg-gray-50 lg:rounded-[2rem] md:rounded-3xl rounded-xl">
                            <ResumeBuilder
                                step={2}
                                label={"Build Your Resume"}
                                text={
                                    "Use our resume builder to craft a standout profile."
                                }
                            />
                        </div>
                        <div className="flex flex-col h-auto  gap-5 md:gap-8 w-full">
                            <div className="w-full md:min-h-1/2 md:h-auto p-6 bg-gray-50 lg:rounded-[2rem] md:rounded-3xl rounded-xl">
                                <ApplicationTracking
                                    step={3}
                                    label={"Track Applications"}
                                    text={
                                        "Monitor your progress and get updates in real-time."
                                    }
                                />
                            </div>
                            <div className=" w-full md:h-1/2 p-6 bg-gray-50 lg:rounded-[2rem] md:rounded-3xl rounded-xl">
                                <JobRecommendation
                                    step={4}
                                    label={"Apply With Ease"}
                                    text={
                                        "Save job postings and receive personalized job matches."
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <Button className="rounded-lg md:rounded-xl text-sm md:text-base text-white mt-10 py-5">
                        Get Started for Free <ChevronRight />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
