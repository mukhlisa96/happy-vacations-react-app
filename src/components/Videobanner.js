import React from 'react'
import { useTranslation } from "react-i18next"
import videobannerImg from "../assets/images/backgrounds/video-banner.webp"
import videoCircle from "../assets/images/icons/video-circle.svg"


const Videobanner = () => {

    const { i18n, t } = useTranslation(["home"])

    return (
        <div>
            <div
                className="paralax-container lg:py-40 py-30 relative overflow-hidden before:absolute before:content-[''] before:inset-0 before:bg-dark-base before:bg-opacity-30 before:z-1"
            >
                <div className="jarallax absolute inset-0" data-jarallax>
                    <img
                        className="jarallax-img"
                        src={videobannerImg}
                        alt="placeholder"
                    />
                </div>

                <div className="container relative z-2">
                    <div className="max-w-[560px] mx-auto text-center text-white">
                        <h2 className="lg:text-4xl text-2xl font-bold leading-1.3">
                            {t("video_block_h")}
                        </h2>
                        <p className="lg:text-2md text-md font-medium leading-1.5 mt-4">
                            {t("video_block_sub_h")}
                        </p>

                        <a
                            data-fancybox
                            href="https://www.youtube.com/watch?v=vJoNqBZ9QlM"
                            className="mt-8 inline-flex relative lg:h-20 lg:w-20 h-16 w-16 justify-center items-center rounded-full bg-primary-1 before:content-[''] before:absolute before:-inset-3 before:border-primary-1 before:border-2 before:rounded-full before:animate-pulse"
                        >
                            <img src={videoCircle} alt="placeholder" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videobanner
