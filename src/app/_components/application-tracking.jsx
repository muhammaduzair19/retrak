"use client";
import React, { useEffect, useState } from "react";
import { Check, Circle } from "lucide-react";

const ApplicationTracking = ({ step, label, text }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    const totalSteps = 4;

    // Simulate progress
    useEffect(() => {
        if (currentStep < totalSteps && !isComplete) {
            const timer = setTimeout(() => {
                setCurrentStep((prev) => prev + 1);
            }, 1500);

            return () => clearTimeout(timer);
        }

        if (currentStep === totalSteps && !isComplete) {
            const timer = setTimeout(() => {
                setIsComplete(true);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [currentStep, isComplete]);
    return (
        <div className="flex flex-col items-center justify-center ">
            <p className="text-sm -mb-2 text-gray-400 text-left">STEP {step}</p>

            <div className="w-full max-w-md">
                {/* Progress bar */}
                <div className="relative flex justify-between mb-12">
                    {[...Array(totalSteps)].map((_, index) => (
                        <div key={index} className="flex items-center">
                            <div
                                className={`w-2 h-2 md:w-4 md:h-4 rounded-full transition-colors duration-200 ${
                                    index + 1 <= currentStep
                                        ? "bg-gray-900"
                                        : "bg-gray-300"
                                }`}
                            />
                            {index < totalSteps - 1 && (
                                <div className="flex-1 h-[2px]  border border-dashed 0 ">
                                    <div
                                        className={`h-full transition-all duration-500 ${
                                            index + 1 < currentStep
                                                ? "bg-gray-900"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center text-center">
                    <div
                        className={`w-8 h-8 md:w-12 md:h-12 rounded-full border-[2px] border-gray-300 flex items-center justify-center mb-6 transition-colors duration-300 ${
                            isComplete
                                ? "bg-gray-700 text-white"
                                : "text-gray-900"
                        }`}
                    >
                        {isComplete && (
                            <Check className="w-3 h-3 md:w-5 md:h-5 xl:w-8 xl:h-8 transition-all duration-300" />
                        )}
                    </div>
                    <h2 className="text-2xl text-gray-600 font-thin mb-5">
                        Applied
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
