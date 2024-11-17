"use client";
import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { MoonLoader } from "react-spinners";

const ApplicationTracking = ({ step, label, text }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    const totalSteps = 4;
    const steps = ["Applied", "Interviewed", "Offered", "Accepted"];

    // Simulate progress with looping effect
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentStep < totalSteps) {
                setCurrentStep((prev) => prev + 1);
            } else {
                setIsComplete(true);
                setTimeout(() => {
                    setCurrentStep(1); // Reset the loop
                    setIsComplete(false);
                }, 1500); // Pause briefly before restarting the loop
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, [currentStep, isComplete]);

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="w-full">
                <p className="text-sm mb-1 text-gray-400 text-left">
                    STEP {step}
                </p>
            </div>

            <div className="w-full max-w-md">
                {/* Progress bar */}
                <div className="relative flex items-center justify-between mb-12">
                    {steps.map((_, index) => (
                        <React.Fragment key={index}>
                            {/* Dot */}
                            <div
                                className={`w-4 h-4 md:w-6 md:h-6 mt-1.5 rounded-full transition-colors duration-300 ${
                                    index + 1 <= currentStep
                                        ? "bg-gray-900"
                                        : "bg-gray-300"
                                }`}
                            />
                            {/* Dotted Line */}
                            {index < totalSteps - 1 && (
                                <div className="flex-1 flex h-1 md:h-2 items-center">
                                    <div
                                        className={`flex-1 h-full border-dashed border-b md:border-b-2 ${
                                            index + 1 < currentStep
                                                ? "border-gray-900"
                                                : "border-gray-300"
                                        }`}
                                    />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Status Text */}
                <div className="flex flex-col items-center text-center">
                    {isComplete ? (
                        <div
                            className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-[4px] border-gray-300 flex items-center justify-center transition-colors duration-300 ${
                                isComplete
                                    ? "bg-gray-700 text-white"
                                    : "text-gray-900"
                            }`}
                        >
                            {isComplete && (
                                <Check className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300" />
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
                            <MoonLoader
                                size={48} // Matches the size of the circle
                                color={"#4A5568"} // A sleek gray spinner
                                speedMultiplier={0.5} // Slightly faster spin
                            />
                        </div>
                    )}
                    <h2 className="text-2xl text-gray-600 font-thin mb-5">
                        {steps[currentStep - 1]}
                    </h2>
                    <div className="w-full flex flex-col items-center mt-3">
                        <p className="text-2xl md:text-3xl">{label}</p>
                        <p className="text-gray-500 text-xl md:text-2xl text-center">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationTracking;
