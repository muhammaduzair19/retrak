import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkle } from "lucide-react";
import React from "react";
import ResumeBuilder from "../_components/resume-builder-card";
import ApplicationTracking from "../_components/application-tracking";
import JobRecommendation from "../_components/job-recommendation";
import CompanyInsights from "../_components/company-insights";

const Features = () => {
    return (
        <section id="features" className="w-full min-h-screen px-4 md:px-10  lg:px-20 py-12">
            <div className="w-full">
                <div className="flex flex-col items-center w-full">
                    <Button
                        variant="secondary"
                        className=" rounded-lg md:rounded-xl mt-5 md:mt-10 text-base border-[1px] border-gray-300 text-gray-500"
                    >
                        <Sparkle fill="#6b7280" />
                        Features Section
                    </Button>
                    <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-10">
                        Everything You
                        <span className="text-gray-500"> Need</span> for a
                        <br className="max-xl:hidden" />
                        <span className="text-gray-500">
                            {" "}
                            Successful Job Search
                        </span>
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[4fr,4fr,4fr] gap-5 md:gap-8 mt-20">
                        <div className="w-full h-auto p-6 bg-gray-50 lg:rounded-[2rem] md:rounded-3xl rounded-xl">
                            <ResumeBuilder
                                step={1}
                                label={"Resume Builder"}
                                text={"Create professional resumes with ease"}
                            />
                        </div>
                        <div className="flex flex-col h-auto  gap-5 md:gap-8 w-full">
                            <div className="w-full md:min-h-1/2 md:h-auto p-6 bg-gray-50 lg:rounded-[2rem] md:rounded-3xl rounded-xl">
                                <ApplicationTracking
                                    step={1}
                                    label={"Application Tracking"}
                                    text={
                                        "Monitor your applications all in one place."
                                    }
                                />
                            </div>
                            <div className=" w-full md:h-1/2 p-6 bg-gray-50 lg:rounded-[2rem] md:rounded-3xl rounded-xl">
                                <JobRecommendation
                                    step={1}
                                    label={"Job Recommendations"}
                                    text={
                                        "Find personalized job matches tailored to you"
                                    }
                                />
                            </div>
                        </div>
                        <div className="w-full h-auto p-6 bg-gray-50 lg:rounded-[2rem] md:rounded-3xl rounded-xl">
                            <CompanyInsights
                                step={1}
                                label={"Company Insights"}
                                text={
                                    "Get insider prep and data for top companies."
                                }
                            />
                        </div>
                    </div>
                    <Button className="rounded-lg md:rounded-xl text-sm md:text-base text-white mt-10">
                        Get Started for Free <ChevronRight />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Features;
