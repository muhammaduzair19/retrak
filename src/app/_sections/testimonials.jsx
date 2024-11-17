"use client";

import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
    {
        name: "David M",
        role: "Graphic Designer",
        quote: "“I was always losing track of where I applied before using Retrak. Now, I can see my entire job search history in seconds. Amazing product FR”",
        image: "/david.png",
    },
    {
        name: "Sarah K",
        role: "Data Analyst",
        quote: "“The company insights and prep tips gave me an edge in interviews. I felt so much more prepared!”",
        image: "/sarah.png",
    },
    {
        name: "Emma L",
        role: "Marketing Specialist",
        quote: "“Retrak made my job search so much easier. I could keep track of every application, and the resume builder was a lifesaver!”",
        image: "/emma.png",
    },
    {
        name: "Maya R",
        role: "Product Manager",
        quote: "“I landed my current role within weeks of using Retrak. I wish I had found this platform sooner!”",
        image: "/maya.png",
    },
    {
        name: "Liam P",
        role: "Software Engineer",
        quote: "“Having all my applications in one place saved me so much time. The job recommendations were spot-on, too!”",
        image: "/liam.png",
    },
];

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="w-full min-h-screen px-4 md:px-10  lg:px-20 py-12"
        >
            <div>
                <div className="flex flex-col items-center justify-center">
                    <Button
                        variant="secondary"
                        className="py-5 rounded-lg md:rounded-xl mt-5 md:mt-10 text-base border-[1px] border-gray-300 text-gray-500"
                    >
                        <Sparkle fill="#6b7280" />
                        User Testimonials
                    </Button>
                    <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-10">
                        See What
                        <span className="text-gray-500"> Early Users</span>
                        <br className="max-xl:hidden" />
                        Say About <span className="text-gray-500">Retrak</span>
                    </h1>
                    <div className="w-full mt-10">
                        <div className="flex justify-center gap-2 mb-6">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === 0
                                            ? "bg-primary w-8"
                                            : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        <Carousel
                            plugins={[
                                Autoplay({
                                    delay: 2000,
                                }),
                            ]}
                        >
                            <CarouselContent>
                                {testimonials?.map(
                                    ({ image, name, role, quote }, idx) => (
                                        <CarouselItem
                                            key={idx}
                                            className="w-ful"
                                        >
                                            <div className="flex max-md:flex-col max-md:items-center px-4 w-full gap-5 md:gap-10  lg:px-20">
                                                <div className="">
                                                    <Image
                                                        src={image}
                                                        width={600}
                                                        height={600}
                                                    />
                                                </div>
                                                <div className="w-full max-md:w-[400px] bg-[#F5F6F7]  rounded-3xl shadow-md shadow-[#F5F6F7] flex justify-center items-center ">
                                                    <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl py-10 px-6 md:px-10 lg:px-14 xl:px-32 font-medium">
                                                        {quote}
                                                    </p>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    )
                                )}
                            </CarouselContent>
                            {/* <CarouselPrevious />
                            <CarouselNext /> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
