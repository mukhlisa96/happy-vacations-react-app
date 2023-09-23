import React from 'react'
import birdIllustration from "../assets/images/illustration/bird-illustration.png"

import blogImg1 from "../assets/images/blog/b1-1.webp"
import blogImg2 from "../assets/images/blog/b1-2.webp"
import blogImg3 from "../assets/images/blog/b1-3.webp"
import { useTranslation } from "react-i18next"



const Blog = () => {
    const { i18n, t } = useTranslation(["home"])

    return (
        <div>
            <div className="blog_style_one relative z-1 lg:pt-30 pt-24">
                <div
                    className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden"
                >
                    <img
                        src={birdIllustration}
                        alt="leaf"
                    />
                </div>
                <div className="container">
                    <div className="text-center lg:pb-[60px] pb-[40px]">
                        <h5 className="section-sub-title-v1">{t("blog_sub")}</h5>
                        <h2 className="section-title-v1">{t("blog_h")}</h2>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-base">
                        {/* <!-- single blog card --> */}
                        <div className="blog_card__one group wow fadeInUp">
                            <div className="overflow-hidden">
                                <a href="blog-details.html">
                                    <img
                                        src={blogImg1}
                                        alt="blog-image"
                                        className="w-full hover:scale-105 duration-300"
                                    />
                                </a>
                            </div>
                            <div className="mt-6">
                                <ul className="flex items-center text-[13px] font-medium text-dark-2">
                                    <li
                                        className="flex items-center relative first:pl-0 pl-2 pr-2 before:content-[''] before:absolute before:h-2/3 before:w-[1px] before:bg-dark-2 before:-translate-y-1/2 before:top-1/2 before:left-0 first:before:hidden"
                                    >
                                        <i className="bi bi-calendar-date text-[15px]"></i>
                                        <span className="ml-2">24 Sep 2022 · 6:30 PM</span>
                                    </li>
                                    <li
                                        className="flex items-center relative first:pl-0 pl-2 pr-2 before:content-[''] before:absolute before:h-2/3 before:w-[1px] before:bg-dark-2 before:-translate-y-1/2 before:top-1/2 before:left-0"
                                    >
                                        250 View
                                    </li>
                                </ul>
                                <h3 className="card-title-alpha mt-4">
                                    <a href="blog-details.html">
                                        Indulge in purest forms of body care with.
                                    </a>
                                </h3>

                                <a
                                    href="blog-details.html"
                                    className="group ease-in hover:text-primary-1 duration-200 inline-flex items-center mt-4 lg:text-md text-base text-dark-1 font-medium"
                                >
                                    <span className="mr-2">Read More</span>
                                    <svg
                                        className="group-hover:translate-x-2 duration-200"
                                        width="27"
                                        height="14"
                                        viewBox="0 0 27 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M20.7001 12.2802L25.0467 7.93355C25.5601 7.42021 25.5601 6.58021 25.0467 6.06688L20.7001 1.72021"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* <!-- single blog card --> */}
                        <div className="blog_card__one group wow fadeInUp" data-wow-delay="0.2s">
                            <div className="overflow-hidden">
                                <a href="blog-details.html">
                                    <img
                                        src={blogImg2}
                                        alt="blog-image"
                                        className="w-full hover:scale-105 duration-300"
                                    />
                                </a>
                            </div>
                            <div className="mt-6">
                                <ul className="flex items-center text-[13px] font-medium text-dark-2">
                                    <li
                                        className="flex items-center relative first:pl-0 pl-2 pr-2 before:content-[''] before:absolute before:h-2/3 before:w-[1px] before:bg-dark-2 before:-translate-y-1/2 before:top-1/2 before:left-0 first:before:hidden"
                                    >
                                        <i className="bi bi-calendar-date text-[15px]"></i>
                                        <span className="ml-2">24 Sep 2022 · 6:30 PM</span>
                                    </li>
                                    <li
                                        className="flex items-center relative first:pl-0 pl-2 pr-2 before:content-[''] before:absolute before:h-2/3 before:w-[1px] before:bg-dark-2 before:-translate-y-1/2 before:top-1/2 before:left-0"
                                    >
                                        250 View
                                    </li>
                                </ul>
                                <h3 className="card-title-alpha mt-4">
                                    <a href="blog-details.html">
                                        Best Places to Visit in Dalhousie, Himachal.
                                    </a>
                                </h3>

                                <a
                                    href="blog-details.html"
                                    className="group ease-in hover:text-primary-1 duration-200 inline-flex items-center mt-4 lg:text-md text-base text-dark-1 font-medium"
                                >
                                    <span className="mr-2">Read More</span>
                                    <svg
                                        className="group-hover:translate-x-2 duration-200"
                                        width="27"
                                        height="14"
                                        viewBox="0 0 27 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M20.7001 12.2802L25.0467 7.93355C25.5601 7.42021 25.5601 6.58021 25.0467 6.06688L20.7001 1.72021"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* <!-- single blog card --> */}
                        <div className="blog_card__one group wow fadeInUp" data-wow-delay="0.4s">
                            <div className="overflow-hidden">
                                <a href="blog-details.html">
                                    <img
                                        src={blogImg3}
                                        alt="blog-image"
                                        className="w-full hover:scale-105 duration-300"
                                    />
                                </a>
                            </div>
                            <div className="mt-6">
                                <ul className="flex items-center text-[13px] font-medium text-dark-2">
                                    <li
                                        className="flex items-center relative first:pl-0 pl-2 pr-2 before:content-[''] before:absolute before:h-2/3 before:w-[1px] before:bg-dark-2 before:-translate-y-1/2 before:top-1/2 before:left-0 first:before:hidden"
                                    >
                                        <i className="bi bi-calendar-date text-[15px]"></i>
                                        <span className="ml-2">24 Sep 2022 · 6:30 PM</span>
                                    </li>
                                    <li
                                        className="flex items-center relative first:pl-0 pl-2 pr-2 before:content-[''] before:absolute before:h-2/3 before:w-[1px] before:bg-dark-2 before:-translate-y-1/2 before:top-1/2 before:left-0"
                                    >
                                        250 View
                                    </li>
                                </ul>
                                <h3 className="card-title-alpha mt-4">
                                    <a href="blog-details.html">
                                        Benefit from a 15% discount mak your reservations.
                                    </a>
                                </h3>
                                <a
                                    href="blog-details.html"
                                    className="group ease-in hover:text-primary-1 duration-200 inline-flex items-center mt-4 lg:text-md text-base text-dark-1 font-medium"
                                >
                                    <span className="mr-2">Read More</span>
                                    <svg
                                        className="group-hover:translate-x-2 duration-200"
                                        width="27"
                                        height="14"
                                        viewBox="0 0 27 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M20.7001 12.2802L25.0467 7.93355C25.5601 7.42021 25.5601 6.58021 25.0467 6.06688L20.7001 1.72021"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
