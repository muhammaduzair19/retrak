import Image from "next/image";
import React from "react";

const JobRecommendation = ({ step, label, text }) => {
    return (
        <div className="flex flex-col justify-between  gap-6 h-full w-full ">
            <p className="text-sm mb-3 text-gray-400">STEP {step}</p>
            <div>
                <Image
                    className=""
                    src={"/amazon.svg"}
                    width={600}
                    height={200}
                />
            </div>
            <div className="w-full flex flex-col items-center mt-3 justify-center">
                <p className="text-2xl md:text-3xl">{label}</p>
                <p className="text-gray-500 text-xl md:text-2xl text-center">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default JobRecommendation;
