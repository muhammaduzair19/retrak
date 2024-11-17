import Image from "next/image";
import Link from "next/link";
import React from "react";
const footerData = [
    {
        category: "Company",
        links: [
            { name: "About Us", url: "/about-us" },
            { name: "Careers", url: "/careers" },
            { name: "Press", url: "/press" },
            { name: "Contact", url: "/contact" },
        ],
    },
    {
        category: "Product",
        links: [
            { name: "Features", url: "/features" },
            { name: "Pricing", url: "/pricing" },
            { name: "Pro Features", url: "/pro-features" },
            { name: "Integrations", url: "/integrations" },
        ],
    },
    {
        category: "Resources",
        links: [
            { name: "Blog", url: "/blog" },
            { name: "Help Center", url: "/help-center" },
            { name: "Guides", url: "/guides" },
            { name: "Community", url: "/community" },
        ],
    },
    {
        category: "Legal",
        links: [
            { name: "Terms Of Service", url: "/terms-of-service" },
            { name: "Privacy Policy", url: "/privacy-policy" },
            { name: "Cookie Policy", url: "/cookie-policy" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="px-4 md:px-10 lg:px-20 w-full">
            <div className="w-full flex flex-col">
                <div className="flex flex-col items-center md:grid grid-cols-[4fr_8fr]">
                    <div className="flex h-full flex-col justify-between w-full  ">
                        <Image width={200} height={200} src={"/logo.svg"} />
                        <div className="flex gap-5">
                            <Link
                                href={"/"}
                                className="w-8 h-8 flex justify-center items-center"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.5 17.5L8.79033 11.2097M8.79033 11.2097L2.5 2.5H6.66667L11.2097 8.79033M8.79033 11.2097L13.3333 17.5H17.5L11.2097 8.79033M17.5 2.5L11.2097 8.79033"
                                        stroke="#222222"
                                        stroke-width="1.2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href={"/"}
                                className="w-8 h-8 flex justify-center items-center"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.74999 7.9165H3.33332C2.54765 7.9165 2.15481 7.9165 1.91073 8.16058C1.66666 8.40467 1.66666 8.7975 1.66666 9.58317V16.6665C1.66666 17.4522 1.66666 17.845 1.91073 18.0891C2.15481 18.3332 2.54765 18.3332 3.33332 18.3332H3.74999C4.53566 18.3332 4.9285 18.3332 5.17258 18.0891C5.41666 17.845 5.41666 17.4522 5.41666 16.6665V9.58317C5.41666 8.7975 5.41666 8.40467 5.17258 8.16058C4.9285 7.9165 4.53566 7.9165 3.74999 7.9165Z"
                                        fill="#222222"
                                    />
                                    <path
                                        d="M5.41666 3.5415C5.41666 4.57704 4.57719 5.4165 3.54166 5.4165C2.50612 5.4165 1.66666 4.57704 1.66666 3.5415C1.66666 2.50597 2.50612 1.6665 3.54166 1.6665C4.57719 1.6665 5.41666 2.50597 5.41666 3.5415Z"
                                        fill="#222222"
                                    />
                                    <path
                                        d="M10.2717 7.9165H9.58332C8.79766 7.9165 8.40482 7.9165 8.16073 8.16058C7.91666 8.40467 7.91666 8.7975 7.91666 9.58317V16.6665C7.91666 17.4522 7.91666 17.845 8.16073 18.0891C8.40482 18.3332 8.79766 18.3332 9.58332 18.3332H9.99999C10.7857 18.3332 11.1785 18.3332 11.4226 18.0891C11.6667 17.845 11.6667 17.4522 11.6667 16.6665L11.6667 13.7499C11.6667 12.3693 12.1067 11.2499 13.4066 11.2499C14.0564 11.2499 14.5833 11.8096 14.5833 12.4999V16.2499C14.5833 17.0356 14.5833 17.4284 14.8274 17.6725C15.0714 17.9166 15.4643 17.9166 16.25 17.9166H16.6656C17.4511 17.9166 17.8438 17.9166 18.0879 17.6726C18.332 17.4286 18.3321 17.0358 18.3322 16.2503L18.3334 11.6667C18.3334 9.59567 16.3637 7.9167 14.414 7.9167C13.3041 7.9167 12.3139 8.46075 11.6667 9.3115C11.6667 8.78642 11.6667 8.52392 11.5527 8.329C11.4804 8.20555 11.3776 8.10278 11.2542 8.03056C11.0592 7.9165 10.7967 7.9165 10.2717 7.9165Z"
                                        fill="#222222"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href={"/"}
                                className="w-8 h-8 flex justify-center items-center"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.08333 10.0002C2.08333 6.26821 2.08333 4.40224 3.24269 3.24286C4.40207 2.0835 6.26804 2.0835 9.99999 2.0835C13.7319 2.0835 15.5979 2.0835 16.7573 3.24286C17.9167 4.40224 17.9167 6.26821 17.9167 10.0002C17.9167 13.7321 17.9167 15.5981 16.7573 16.7575C15.5979 17.9168 13.7319 17.9168 9.99999 17.9168C6.26804 17.9168 4.40207 17.9168 3.24269 16.7575C2.08333 15.5981 2.08333 13.7321 2.08333 10.0002Z"
                                        stroke="#222222"
                                        stroke-width="1.2"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M13.75 10C13.75 12.0711 12.0711 13.75 10 13.75C7.92893 13.75 6.25 12.0711 6.25 10C6.25 7.92893 7.92893 6.25 10 6.25C12.0711 6.25 13.75 7.92893 13.75 10Z"
                                        stroke="#222222"
                                        stroke-width="1.2"
                                    />
                                    <path
                                        d="M14.5898 5.4165H14.5823"
                                        stroke="#222222"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full justify-between mt-10">
                        {footerData?.map(({ category, links }) => (
                            <div key={category} className="flex flex-col gap-4">
                                <h3 className="text-black text-lg font-medium">
                                    {category}
                                </h3>
                                {links?.map(({ name }) => (
                                    <p
                                        key={name}
                                        className="text-lg font-thin text-gray-600"
                                    >
                                        {name}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-7 text-gray-500 flex justify-between flex-wrap ">
                    <p>© 2024 Retrak, Inc. All Rights Reserved.</p>
                    <p>Built with 🚀</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
