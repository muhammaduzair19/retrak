import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Banner = () => {
    return (
        <section className="w-full px-4 md:px-10  lg:px-20 py-12">
            <div className="flex flex-col items-center justify-center">
                <Image
                    src={"/logo-icon.svg"}
                    width={200}
                    height={200}
                    alt="LOGO"
                />
                <div className="w-full flex flex-col items-center mt-3 justify-center">
                    <h1 className="font-medium text-4xl lg:text-5xl  text-center md:text-left mt-10">
                        Ready to land your{" "}
                        <span className="text-gray-500"> dream job?</span>
                    </h1>
                    <p className="text-gray-500 text-xl md:text-2xl text-center">
                        Get started with Retrak today!
                    </p>
                </div>
                <Button className="rounded-lg md:rounded-xl text-sm md:text-base text-white mt-10">
                    Get Started for Free <ChevronRight />
                </Button>
            </div>
        </section>
    );
};

export default Banner;
