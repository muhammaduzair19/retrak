import { Button } from "@/components/ui/button";
import { ChevronRight, Gem, Sparkle, Sparkles, Zap } from "lucide-react";
import React from "react";

const plans = [
    {
        name: "Free",
        tier: "Basic",
        tagline: "Get started with the essentials.",
        price: "$0",
        points: [
            "1 Resume Template",
            "Track up to 5 Job Applications",
            "Job Recommendations",
            "Basic Company Insights",
            "Manual Application Management",
        ],
        icon: Sparkles,
        cta: "Start Free",
    },
    {
        name: "Plus",
        tier: "Intermediate",
        tagline: "Enhance your job search with more tools.",
        price: "$9.99/month",
        points: [
            "5 Resume Templates",
            "Track up to 20 Job Applications",
            "Personalized Job Matches",
            "Advanced Company Insights",
            "Automatic Application Reminders",
            "Priority Email Support",
        ],
        icon: Zap,
        cta: "Choose Plan",
    },
    {
        name: "Pro",
        tier: "Advanced",
        tagline: "Unlock the full potential of Retrak.",
        price: "$19.99/month",
        points: [
            "Unlimited Resume Templates & Customization",
            "Unlimited Job Applications Tracking",
            "Premium Job Recommendations",
            "In-depth Company Insights and Interview Prep Resources",
            "Auto-Application for Compatible Jobs",
            "Access to Resume Review & Optimization Tools",
            "Dedicated Chat Support",
        ],
        icon: Gem,
        cta: "Choose Plan",
    },
];

const Pricing = () => {
    return (
        <section
            id="pricing"
            className="w-full min-h-screen px-4 md:px-10  lg:px-20 py-12"
        >
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                    <Button
                        variant="secondary"
                        className=" rounded-lg md:rounded-xl mt-5 md:mt-10 text-base border-[1px] border-gray-300 text-gray-500"
                    >
                        <Sparkle fill="#6b7280" />
                        Pricing Plans
                    </Button>
                    <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-10">
                        Choose the
                        <span className="text-gray-500"> Perfect Plan</span>
                        <br className="max-xl:hidden" />
                        for Your{" "}
                        <span className="text-gray-500">Job Search</span>
                    </h1>
                    <div className="flex w-full flex-wrap justify-center lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-10 gap-4 md:px-20 mt-6">
                        {plans?.map((plan) => (
                            <PricingCard key={plan.name} plan={plan} />
                        ))}
                    </div>
                </div>
                <Button className="rounded-lg md:rounded-xl text-sm md:text-base text-white mt-10">
                    Get Started for Free <ChevronRight />
                </Button>
            </div>
        </section>
    );
};

export default Pricing;

const PricingCard = ({ plan }) => (
    <div className="flex w-[350px] md:w-96 lg:w-[400px] xl:w-full flex-col gap-10 justify-between  h-auto rounded-3xl bg-gray-50 p-4 md:p-6">
        <div className="flex flex-col gap-4 ">
            <div className="w-full p-3 bg-gradient-to-b rounded-2xl from-blue-50 via-white/5 to-white">
                <div className="w-full flex justify-between items-center">
                    <span>
                        <plan.icon
                            fill="#545454"
                            className="w-8 h-8 text-[#545454] mb-3"
                        />
                    </span>
                    <Button className="rounded-full text-xs px-6 md:text-sm bg-[#545454] text-white">
                        {plan.tier}
                    </Button>
                </div>
                <p className="font-medium text-xl md:text-2xl lg:text-3xl text-gray-800">
                    {plan.name}{" "}
                </p>
                <p className="text-gray-600 text-base md:text-lg xl:text-xl">
                    {plan.tagline}
                </p>
                <p className="font-medium text-xl md:text-2xl lg:text-4xl text-black mt-3">
                    {plan.price}
                </p>
            </div>
            <div className="flex flex-col gap-3 text-gray-700">
                {plan.points?.map((point, idx) => (
                    <p key={idx} className="text-base lg:text-lg">
                        {point}
                    </p>
                ))}
            </div>
        </div>
        <button className="w-full rounded-full bg-white text-gray-700 py-3 hover:bg-white/5">
            {plan.cta}
        </button>
    </div>
);
