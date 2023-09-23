import React from 'react'
import { useTranslation } from "react-i18next"
import aboutImg from "../assets/images/about/about1-1.webp"

const AboutUs = () => {

    const { i18n, t } = useTranslation(["home"])
    return (
        <div id="about">
            <div class="about_style__one lg:pt-30 pt-24 relative">
                <div class="container">
                    <div class="grid lg:grid-cols-2 gap-base items-center">
                        <div class="relative">
                            <img src={aboutImg} alt="about-img" />
                        </div>
                        <div class="div">
                            <h5 class="section-sub-title-v1">{t("about_sub_h")}</h5>
                            <h2 class="section-title-v1 max-w-xl">{t("about_h")}</h2>
                            <div
                                class="mt-7 xl:pl-24 lg:pl-20 relative before:content-[''] before:left-0 before:top-4 before:bg-[#d9d9d9] before:w-[10%] before:h-[1px] lg:before:absolute">
                                <p class="regular-text-v1">{t("about_p")}</p>
                                <h5 class="font-sans text-dark-1 text-md font-medium mt-4">{t("about_small_h")}</h5>
                                <p class="regular-text-v1">{t("about_p2")}</p>

                            </div>
                            <ul class="pt-6 lg:text-md text-base">
                                <li class="flex items-center font-sans text-dark-3 mt-4">
                                    <div class="text-primary-1 flex-shrink-0 text-2md">
                                        <i class="bi bi-check-circle"></i>
                                    </div>
                                    <span class="ml-3">{t("about_li_1")}</span>
                                </li>
                                <li class="flex items-center font-sans text-dark-3 mt-4">
                                    <div class="text-primary-1 flex-shrink-0 text-2md">
                                        <i class="bi bi-check-circle"></i>
                                    </div>
                                    <span class="ml-3">{t("about_li_2")}</span>
                                </li>
                                <li class="flex items-center font-sans text-dark-3 mt-4">
                                    <div class="text-primary-1 flex-shrink-0 text-2md">
                                        <i class="bi bi-check-circle"></i>
                                    </div>
                                    <span class="ml-3">{t("about_li_3")}</span>
                                </li>
                            </ul>
                            {/* <div class="mt-10">
                                <a href="about.html" class="btn_primary__v1">
                                    {t("about_button_text")}
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999"
                                            stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
