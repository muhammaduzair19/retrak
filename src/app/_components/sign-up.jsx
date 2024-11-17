"use client";

import React, { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const SignUp = ({ step, label, text }) => {
    const [currentStage, setCurrentStage] = useState("signup"); // Tracks the current stage
    const [isComplete, setIsComplete] = useState(false);

    // Automate stage transitions
    useEffect(() => {
        if (currentStage === "signup") {
            const timer = setTimeout(() => {
                setCurrentStage("loading");
            }, 3000); // Show signup screen for 3 seconds
            return () => clearTimeout(timer);
        }

        if (currentStage === "loading") {
            const timer = setTimeout(() => {
                setCurrentStage("complete");
                setIsComplete(true); // Transition to complete state
            }, 3000); // Show loader for 3 seconds
            return () => clearTimeout(timer);
        }

        if (currentStage === "complete") {
            const timer = setTimeout(() => {
                setCurrentStage("signup"); // Loop back to the signup screen
                setIsComplete(false); // Reset the complete state
            }, 3000); // Show complete state for 3 seconds
            return () => clearTimeout(timer);
        }
    }, [currentStage]);

    return (
        <div className="w-full h-full flex flex-col justify-between items-center">
            <p className="text-sm mb-3 text-gray-400">STEP {step}</p>

            {currentStage === "signup" && (
                <div className="flex flex-col justify-between h-full w-full">
                    <div className="flex flex-col gap-8 justify-center w-full items-center h-full">
                        <div className="flex flex-col gap-3 w-full px-4">
                            <p className="text-sm lg:text-base">Email</p>
                            <input
                                type="text"
                                className="w-full py-4 text-sm px-4 rounded-lg text-gray-600 bg-gray-100"
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full px-4">
                            <p className="text-sm lg:text-base">Password</p>
                            <input
                                type="password"
                                className="w-full py-4 text-sm px-4 rounded-lg text-gray-600 bg-gray-100"
                                placeholder="Password"
                            />
                        </div>
                        <Button className="rounded-lg bg-gradient-to-t from-gray-950 via-gray-600 to-gray-700">
                            Create Account
                        </Button>
                    </div>
                </div>
            )}

            {currentStage === "loading" && (
                <div className="flex justify-center items-center w-full h-full">
                    <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
                        <MoonLoader
                            size={48} // Matches the size of the circle
                            color={"#4A5568"} // A sleek gray spinner
                            speedMultiplier={0.5} // Slightly faster spin
                        />
                    </div>
                </div>
            )}

            {currentStage === "complete" && (
                <div className="flex flex-col justify-center items-center w-full h-full">
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
                </div>
            )}
            <div className="w-full flex flex-col items-center mt-3">
                <p className="text-2xl md:text-3xl">{label}</p>
                <p className="text-gray-500 text-xl md:text-2xl text-center">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default SignUp;
