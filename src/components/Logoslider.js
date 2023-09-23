import React from 'react'
import partner1 from "../assets/images/pratners/p1.png"
import partner2 from "../assets/images/pratners/p2.png"
import partner3 from "../assets/images/pratners/p3.png"
import partner4 from "../assets/images/pratners/p4.png"
import partner5 from "../assets/images/pratners/p5.png"
import partner6 from "../assets/images/pratners/p6.png"
// import about1 from "../assets/images/about/about1-1.webp"


import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/autoplay'


import SwiperCore from 'swiper'
SwiperCore.use([Autoplay])

const Logoslider = () => {
    return (
        <div>
            <Swiper className="swiper-wrapper"

                breakpoints={{
                    200: {
                        // width: 576,
                        slidesPerView: 2,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 3,
                    },
                    1200: {
                        // width: 768,
                        slidesPerView: 5,
                    },
                }}
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={5}
                loop={true}
                speed={7000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)

                }

            >
                <SwiperSlide className="sw-slider"><img src={partner1} alt="partner img" /></SwiperSlide>
                <SwiperSlide className="sw-slider"><img src={partner2} alt="partner img" /></SwiperSlide>
                <SwiperSlide className="sw-slider"><img src={partner3} alt="partner img" /></SwiperSlide>
                <SwiperSlide className="sw-slider"><img src={partner4} alt="partner img" /></SwiperSlide>
                <SwiperSlide className="sw-slider"><img src={partner5} alt="partner img" /></SwiperSlide>
                <SwiperSlide className="sw-slider"><img src={partner6} alt="partner img" /></SwiperSlide>
                <SwiperSlide className="sw-slider"><img src={partner1} alt="partner img" /></SwiperSlide>
                <SwiperSlide className="sw-slider"><img src={partner2} alt="partner img" /></SwiperSlide>
                <SwiperSlide className="sw-slider"><img src={partner3} alt="partner img" /></SwiperSlide>
                <SwiperSlide className="sw-slider"><img src={partner4} alt="partner img" /></SwiperSlide>
                <SwiperSlide className="sw-slider"><img src={partner6} alt="partner img" /></SwiperSlide>
                <SwiperSlide className="sw-slider"><img src={partner6} alt="partner img" /></SwiperSlide>

            </Swiper>

            {/* <div className="bg-gradient-to-t to-[#FFF1EC] from-white">
                <div className="swiper partner-swiper border-primary-1 border-b">
                    <div className="swiper-wrapper" style={{ transitionTimingFunction: "linear" }}>
                        <div className="swiper-slide">
                            <div className="partner-logo-item">
                                <img
                                    src={partner1}
                                    alt="pratners"
                                    className="lg:max-w-[138px] max-w-[100px] mx-auto"
                                />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="partner-logo-item">
                                <img
                                    src={partner2}
                                    alt="pratners"
                                    className="lg:max-w-[138px] max-w-[100px] mx-auto"
                                />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="partner-logo-item">
                                <img
                                    src={partner3}
                                    alt="pratners"
                                    className="lg:max-w-[138px] max-w-[100px] mx-auto"
                                />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="partner-logo-item">
                                <img
                                    src={partner4}
                                    alt="pratners"
                                    className="lg:max-w-[138px] max-w-[100px] mx-auto"
                                />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="partner-logo-item">
                                <img
                                    src={partner5}
                                    alt="pratners"
                                    className="lg:max-w-[138px] max-w-[100px] mx-auto"
                                />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="partner-logo-item">
                                <img
                                    src={partner6}
                                    alt="pratners"
                                    className="lg:max-w-[138px] max-w-[100px] mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about_style__one lg:pt-30 pt-24 relative">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-base items-center">
                            <div className="relative">
                                <img src={about1} alt="about-img" />
                            </div>
                            <div className="div">
                                <h5 className="section-sub-title-v1">About Us</h5>
                                <h2 className="section-title-v1 max-w-xl">
                                    We are Professional Planners For your Vacations
                                </h2>
                                <div
                                    className="mt-7 xl:pl-24 lg:pl-20 relative before:content-[''] before:left-0 before:top-4 before:bg-[#d9d9d9] before:w-[10%] before:h-[1px] lg:before:absolute"
                                >
                                    <p className="regular-text-v1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed
                                        do eiusmod tem por incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam
                                    </p>
                                    <h5 className="font-sans text-dark-1 text-md font-medium mt-4">
                                        Speak to our Destination Experts at Direct Call +1 546 378 654
                                    </h5>
                                </div>
                                <ul className="pt-6 lg:text-md text-base">
                                    <li className="flex items-center font-sans text-dark-3 mt-4">
                                        <div className="text-primary-1 flex-shrink-0 text-2md">
                                            <i className="bi bi-check-circle"></i>
                                        </div>
                                        <span className="ml-3"
                                        >All placges and activiates are carefully picked by
                                            us.</span>
                                    </li>
                                    <li className="flex items-center font-sans text-dark-3 mt-4">
                                        <div className="text-primary-1 flex-shrink-0 text-2md">
                                            <i className="bi bi-check-circle"></i>
                                        </div>
                                        <span className="ml-3">We are an award winning agency</span>
                                    </li>
                                    <li className="flex items-center font-sans text-dark-3 mt-4">
                                        <div className="text-primary-1 flex-shrink-0 text-2md">
                                            <i className="bi bi-check-circle"></i>
                                        </div>
                                        <span className="ml-3"
                                        >Trusted by more than 80,000 customers</span>
                                    </li>
                                </ul>
                                <div className="mt-10">
                                    <a href="about.html" className="btn_primary__v1">
                                        Find Out More
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999"
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
            </div> */}
        </div >
    )
}

export default Logoslider
