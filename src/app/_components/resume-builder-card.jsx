import Image from "next/image";
import React from "react";

const ResumeBuilder = ({ step, label, text }) => {
    return (
        <div className="flex flex-col justify-between">
            <p className="text-sm mb-3 text-gray-400">STEP {step}</p>
            <div>
                <Image
                    className=""
                    src={"/resume.svg"}
                    width={600}
                    height={200}
                />
            </div>
            <div className="w-full flex flex-col items-center mt-6 justify-end">
                <p className="text-2xl md:text-3xl">{label}</p>
                <p className="text-gray-500 text-xl md:text-2xl text-center">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default ResumeBuilder;
