import { Button } from "@/components/ui/button";
import React from "react";

const SignUp = ({ step, label, text }) => {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <p className="text-sm mb-3 text-gray-400">STEP {step}</p>
            <div className="flex flex-col justify-between h-full">
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
                        <p className="text-sm lg:text-base">Email</p>
                        <input
                            type="text"
                            className="w-full py-4 text-sm px-4 rounded-lg text-gray-600 bg-gray-100"
                            placeholder="Email"
                        />
                    </div>
                    <Button className="rounded-lg bg-gradient-to-t from-gray-950 via-gray-600 to-gray-700">
                        Create Account
                    </Button>
                </div>
                <div className="w-full flex flex-col items-center mt-6 justify-end">
                    <p className="text-2xl md:text-3xl">{label}</p>
                    <p className="text-gray-500 text-xl md:text-2xl text-center">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
