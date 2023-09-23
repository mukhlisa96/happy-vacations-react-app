import React from 'react'
import { useTranslation } from "react-i18next"
import fp1 from "../assets/images/packages/fp1-1.webp"
import fp2 from "../assets/images/packages/fp1-2.webp"

const ImageTextInline = () => {
    const { i18n, t } = useTranslation(["home"])

    return (
        <div>
            <div className="featured_package__style lg:pt-30 pt-24">
                <div className="container">
                    <div className="text-center lg:pb-[60px] pb-[40px]">
                        <h5 className="section-sub-title-v1">{t("packages_block_sub_h")}</h5>
                        <h2 className="section-title-v1">{t("packages_block_h")}</h2>
                    </div>
                </div>
                <div className="px-3 overflow-hidden">
                    <div
                        className="flex 2xl:gap-x-12 gap-base lg:items-center col-span-10 2xl:ml-right-container lg:flex-row flex-col"
                    >
                        <div className="xl:max-w-xl lg:max-w-lg shrink-0 order-2 lg:order-1">
                            <h5 className="text-2md text-primary-1 leading-1.5 font-sans font-bold">
                                {t("package_1_red_sub")}
                            </h5>
                            <h3
                                className="font-serif font-medium lg:text-xl text-lg leading-1.35 mt-2 text-dark-1"
                            >
                                {t("package_1_h")}
                            </h3>
                            <p className="text-dark-2 leading-1.7 font-medium mt-5">
                                {t("package_1_black_sub")}
                            </p>
                            <p className="regular-text-v1 mt-[14px]">
                                {t("package_1_p")}
                            </p>
                            <ul className="pt-2 lg:text-md text-base">
                                <li className="flex items-center font-sans text-dark-3 mt-4">
                                    <div className="text-primary-1 text-2md flex-shrink-0">
                                        <i className="bi bi-check-circle"></i>
                                    </div>
                                    <span className="ml-3">{t("package_1_li1")}</span>
                                </li>
                                <li className="flex items-center font-sans text-dark-3 mt-4">
                                    <div className="text-primary-1 text-2md flex-shrink-0">
                                        <i className="bi bi-check-circle"></i>
                                    </div>
                                    <span className="ml-3"
                                    >{t("package_1_li2")}</span>
                                </li>
                                <li className="flex items-center font-sans text-dark-3 mt-4">
                                    <div className="text-primary-1 text-2md flex-shrink-0">
                                        <i className="bi bi-check-circle"></i>
                                    </div>
                                    <span className="ml-3"
                                    >{t("package_1_li3")}</span>
                                </li>
                            </ul>

                            <div className="mt-12">
                                <a href="package-details.html" className="btn_primary__v1">
                                    {t("package_1_button_text")}
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
                        <div className="order-1 lg:order-2 fadeInRight wow">
                            <img src={fp1} alt="fp" />
                        </div>
                    </div>
                    <div
                        className="flex justify-end 2xl:gap-x-12 gap-base mt-17 lg:items-center col-span-10 2xl:mr-right-container lg:flex-row flex-col"
                    >
                        <div className="wow fadeInLeft">
                            <img src={fp2} alt="fp" />
                        </div>
                        <div className="xl:max-w-xl lg:max-w-lg shrink-0">
                            <h5 className="text-2md text-primary-1 leading-1.5 font-sans font-bold">
                                {t("package_2_red_sub")}
                            </h5>
                            <h3
                                className="font-serif font-medium lg:text-xl text-lg leading-1.35 mt-2 text-dark-1"
                            >
                                {t("package_2_h")}
                            </h3>
                            <p className="text-dark-2 leading-1.7 font-medium mt-5">
                                {t("package_2_black_sub")}
                            </p>
                            <p
                                className="lg:text-base text-sm font-sans text-dark-3 leading-1.9 mt-[14px]"
                            >
                                {t("package_2_p")}
                            </p>
                            <ul className="pt-2 lg:text-md text-base">
                                <li className="flex items-center font-sans text-dark-3 mt-4">
                                    <div className="text-primary-1 text-2md flex-shrink-0">
                                        <i className="bi bi-check-circle"></i>
                                    </div>
                                    <span className="ml-3">{t("package_2_li1")}</span>
                                </li>
                                <li className="flex items-center font-sans text-dark-3 mt-4">
                                    <div className="text-primary-1 text-2md flex-shrink-0">
                                        <i className="bi bi-check-circle"></i>
                                    </div>
                                    <span className="ml-3">{t("package_2_li2")}</span>
                                </li>
                                <li className="flex items-center font-sans text-dark-3 mt-4">
                                    <div className="text-primary-1 text-2md flex-shrink-0">
                                        <i className="bi bi-check-circle"></i>
                                    </div>
                                    <span className="ml-3">{t("package_2_li3")}</span>
                                </li>
                            </ul>

                            <div className="mt-12">
                                <a href="package-details.html" className="btn_primary__v1">
                                    {t("package_2_button_text")}
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
        </div>
    )
}

export default ImageTextInline
