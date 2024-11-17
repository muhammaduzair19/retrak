"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbarHeight =
                document.querySelector("nav")?.clientHeight || 0;
            setIsExpanded(navbarHeight > 20);
        };

        // Listen to scroll and update navbar height state
        window.addEventListener("resize", handleScroll);

        // Initial check
        handleScroll();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`w-full h-20 fixed border-b border-gray-300 z-50 ${
                isExpanded ? "bg-white/5 backdrop-blur-lg" : "bg-transparent"
            } transition-colors duration-300`}
        >
            <div className="flex justify-between items-center w-full border-x border-gray-300 h-20 px-4 md:px-10 lg:px-20">
                <div className="flex items-center gap-10">
                    <span>
                        <Image
                            src={"/logo.svg"}
                            width={120}
                            height={120}
                            alt="Logo"
                        />
                    </span>
                    <div className="max-lg:hidden text-sm flex items-center gap-8">
                        <Link className="text-gray-400" href={"#home"}>
                            Home
                        </Link>
                        <Link className="text-gray-400" href={"#features"}>
                            Features
                        </Link>
                        <Link className="text-gray-400" href={"#how-it-works"}>
                            How It Works
                        </Link>
                        <Link className="text-gray-400" href={"#testimonials"}>
                            Testimonials
                        </Link>
                        <Link className="text-gray-400" href={"#pricing"}>
                            Pricing
                        </Link>

                        <Link className="text-gray-400" href={"#faqs"}>
                            FAQ
                        </Link>
                    </div>
                </div>
                <div className="flex items-center max-md:flex-row-reverse gap-10">
                    <div className="flex items-center gap-2 max-md:hidden">
                        <Button variant="transaparent">Login</Button>
                        <Button
                            variant="transaparent"
                            className="border-gray-300 rounded-xl border-[1px]"
                        >
                            Get Started
                        </Button>
                    </div>
                    <div className="max-lg:block hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Menu />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="backdrop-blur-md bg-blue-200/10 mr-4">
                                <DropdownMenuItem>
                                    <Link
                                        className="text-gray-400"
                                        href={"#home"}
                                    >
                                        Home
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <Link
                                        className="text-gray-400"
                                        href={"#features"}
                                    >
                                        Features
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <Link
                                        className="text-gray-400"
                                        href={"#how-it-works"}
                                    >
                                        How It Works
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <Link
                                        className="text-gray-400"
                                        href={"#pricing"}
                                    >
                                        Pricing
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <Link
                                        className="text-gray-400"
                                        href={"#testimonials"}
                                    >
                                        Testimonials
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <Link
                                        className="text-gray-400"
                                        href={"#faqs"}
                                    >
                                        FAQs
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
