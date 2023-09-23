import React from 'react'
import imgTreeIllustration from "../assets/images/illustration/tree-illustration.png"
import imgTreeIllustration2 from "../assets/images/illustration/leaf-illustration-2.png"
import package1 from "../assets/images/packages/p1-1.webp"
import package2 from "../assets/images/packages/p1-2.webp"
import package3 from "../assets/images/packages/p1-3.webp"
import package4 from "../assets/images/packages/p1-4.webp"
import package5 from "../assets/images/packages/p1-5.webp"
import { useTranslation } from "react-i18next"



const Populartours = () => {

    const { i18n, t } = useTranslation(["home"])

    return (
        <div id="tours">
            <div className="package_style__one lg:pt-30 pt-24 lg:pb-30 pb-24 z-1 relative">
                <div className="absolute bottom-[10%] left-[2%] max-w-[13%] z-minus lg:inline-block hidden">
                    <img
                        src={imgTreeIllustration2}
                        alt="leaf"
                    />
                </div>
                <div className="absolute top-[7%] right-0 max-w-[14%] z-minus lg:inline-block hidden"
                >
                    <img
                        src={imgTreeIllustration}
                        alt="leaf"
                    />
                </div>
                <div className="container">
                    <div className="text-center lg:pb-[60px] pb-[40px]">
                        <h5 className="section-sub-title-v1">{t("tour_block_sub_h")}</h5>
                        <h2 className="section-title-v1">{t("tour_block_h")}</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-base">


                        <div className="group/card package-card-style-one wow fadeInUp">
                            <div className="overflow-hidden relative">
                                <a href="">
                                    <img
                                        src="https://images.pexels.com/photos/462671/pexels-photo-462671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="package-img"
                                        className="ptImages w-full group-hover/card:scale-105 duration-300"
                                    />
                                </a>

                            </div>
                            <h3 className="card-title-alpha group-hover/card:text-primary-1 lg:mt-6 mt-5">
                                <a href="">{t("tour_name_1")}</a>
                            </h3>

                            <ul className="flex flex-wrap lg:text-[15px] text-[13px] font-medium text-dark-2 mt-4 package-feature">
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-people"></i>
                                    </span>
                                    <span>{t("tour_group_1")}</span>
                                </li>
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-clock"></i>
                                    </span>
                                    <span>{t("tour_duration_1")}</span>
                                </li>
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-coin"></i>
                                    </span>
                                    <span>{t("tour_cost_1")}</span>
                                </li>
                            </ul>

                            <a
                                href="package-details.html"
                                className="ease-in group/btn hover:text-primary-1 duration-200 inline-flex items-center lg:mt-6 mt-5 lg:text-md text-[15px] text-dark-1 font-medium"
                            >
                                <span className="mr-2">{t("tour_buy_button")}</span>
                                <svg
                                    className="group-hover/btn:translate-x-2 duration-200"
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
                                        d="M20.7001 12.28L25.0467 7.9333C25.5601 7.41997 25.5601 6.57997 25.0467 6.06664L20.7001 1.71997"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </a>
                        </div>


                        <div className="group/card package-card-style-one wow fadeInUp">
                            <div className="overflow-hidden relative">
                                <a href="">
                                    <img
                                        src="https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="package-img"
                                        className="ptImages w-full group-hover/card:scale-105 duration-300"
                                    />
                                </a>

                            </div>
                            <h3 className="card-title-alpha group-hover/card:text-primary-1 lg:mt-6 mt-5">
                                <a href="">{t("tour_name_2")}</a>
                            </h3>

                            <ul className="flex flex-wrap lg:text-[15px] text-[13px] font-medium text-dark-2 mt-4 package-feature">
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-people"></i>
                                    </span>
                                    <span>{t("tour_group_2")}</span>
                                </li>
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-clock"></i>
                                    </span>
                                    <span>{t("tour_duration_2")}</span>
                                </li>
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-coin"></i>
                                    </span>
                                    <span>{t("tour_cost_2")}</span>
                                </li>
                            </ul>

                            <a
                                href="package-details.html"
                                className="ease-in group/btn hover:text-primary-1 duration-200 inline-flex items-center lg:mt-6 mt-5 lg:text-md text-[15px] text-dark-1 font-medium"
                            >
                                <span className="mr-2">{t("tour_buy_button")}</span>
                                <svg
                                    className="group-hover/btn:translate-x-2 duration-200"
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
                                        d="M20.7001 12.28L25.0467 7.9333C25.5601 7.41997 25.5601 6.57997 25.0467 6.06664L20.7001 1.71997"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </a>
                        </div>




                        <div className="group/card package-card-style-one wow fadeInUp">
                            <div className="overflow-hidden relative">
                                <a href="">
                                    <img
                                        src="https://images.pexels.com/photos/2048865/pexels-photo-2048865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="package-img"
                                        className="ptImages w-full group-hover/card:scale-105 duration-300"
                                    />
                                </a>

                            </div>
                            <h3 className="card-title-alpha group-hover/card:text-primary-1 lg:mt-6 mt-5">
                                <a href="">{t("tour_name_3")}</a>
                            </h3>

                            <ul className="flex flex-wrap lg:text-[15px] text-[13px] font-medium text-dark-2 mt-4 package-feature">
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-people"></i>
                                    </span>
                                    <span>{t("tour_group_3")}</span>
                                </li>
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-clock"></i>
                                    </span>
                                    <span>{t("tour_duration_3")}</span>
                                </li>
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-coin"></i>
                                    </span>
                                    <span>{t("tour_cost_3")}</span>
                                </li>
                            </ul>

                            <a
                                href="package-details.html"
                                className="ease-in group/btn hover:text-primary-1 duration-200 inline-flex items-center lg:mt-6 mt-5 lg:text-md text-[15px] text-dark-1 font-medium"
                            >
                                <span className="mr-2">{t("tour_buy_button")}</span>
                                <svg
                                    className="group-hover/btn:translate-x-2 duration-200"
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
                                        d="M20.7001 12.28L25.0467 7.9333C25.5601 7.41997 25.5601 6.57997 25.0467 6.06664L20.7001 1.71997"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </a>
                        </div>




                        <div className="group/card package-card-style-one wow fadeInUp">
                            <div className="overflow-hidden relative">
                                <a href="">
                                    <img
                                        src="https://images.pexels.com/photos/4744570/pexels-photo-4744570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="package-img"
                                        className="ptImages w-full group-hover/card:scale-105 duration-300"
                                    />
                                </a>

                            </div>
                            <h3 className="card-title-alpha group-hover/card:text-primary-1 lg:mt-6 mt-5">
                                <a href="">{t("tour_name_4")}</a>
                            </h3>

                            <ul className="flex flex-wrap lg:text-[15px] text-[13px] font-medium text-dark-2 mt-4 package-feature">
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-people"></i>
                                    </span>
                                    <span>{t("tour_group_4")}</span>
                                </li>
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-clock"></i>
                                    </span>
                                    <span>{t("tour_duration_4")}</span>
                                </li>
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-coin"></i>
                                    </span>
                                    <span>{t("tour_cost_4")}</span>
                                </li>
                            </ul>

                            <a
                                href="package-details.html"
                                className="ease-in group/btn hover:text-primary-1 duration-200 inline-flex items-center lg:mt-6 mt-5 lg:text-md text-[15px] text-dark-1 font-medium"
                            >
                                <span className="mr-2">{t("tour_buy_button")}</span>
                                <svg
                                    className="group-hover/btn:translate-x-2 duration-200"
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
                                        d="M20.7001 12.28L25.0467 7.9333C25.5601 7.41997 25.5601 6.57997 25.0467 6.06664L20.7001 1.71997"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </a>
                        </div>




                        <div className="group/card package-card-style-one wow fadeInUp">
                            <div className="overflow-hidden relative">
                                <a href="">
                                    <img
                                        src="https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                        alt="package-img"
                                        className="ptImages w-full group-hover/card:scale-105 duration-300"
                                    />
                                </a>

                            </div>
                            <h3 className="card-title-alpha group-hover/card:text-primary-1 lg:mt-6 mt-5">
                                <a href="">{t("tour_name_5")}</a>
                            </h3>

                            <ul className="flex flex-wrap lg:text-[15px] text-[13px] font-medium text-dark-2 mt-4 package-feature">
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-people"></i>
                                    </span>
                                    <span>{t("tour_group_5")}</span>
                                </li>
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-clock"></i>
                                    </span>
                                    <span>{t("tour_duration_5")}</span>
                                </li>
                                <li>
                                    <span className="text-primary-1">
                                        <i className="bi bi-coin"></i>
                                    </span>
                                    <span>{t("tour_cost_5")}</span>
                                </li>
                            </ul>

                            <a
                                href="package-details.html"
                                className="ease-in group/btn hover:text-primary-1 duration-200 inline-flex items-center lg:mt-6 mt-5 lg:text-md text-[15px] text-dark-1 font-medium"
                            >
                                <span className="mr-2">{t("tour_buy_button")}</span>
                                <svg
                                    className="group-hover/btn:translate-x-2 duration-200"
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
                                        d="M20.7001 12.28L25.0467 7.9333C25.5601 7.41997 25.5601 6.57997 25.0467 6.06664L20.7001 1.71997"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </a>
                        </div>




                        <div
                            className="bg-primary-1 bg-[url('https://arid-html.vercel.app/main-file/images/backgrounds/package-bg.png')] bg-center bg-no-repeat bg-cover text-center relative p-base flex items-center justify-center wow fadeInUp"
                            data-wow-delay="0.4s">
                            <div>
                                <h3
                                    className="lg:text-3xl text-2xl leading-1.5 text-white font-medium">
                                    {t("sale_h")}
                                </h3>
                                <a
                                    href="package-list-sidebar.html"
                                    className="btn_primary__v1 border border-white mt-base"
                                >{t("sale_button_text")}</a>
                            </div>
                            {/* <!-- <img src="./assets/images/backgrounds/villa-illustration.png" alt="illustration" className="absolute bottom-0 left-0 right-0"/> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Populartours
