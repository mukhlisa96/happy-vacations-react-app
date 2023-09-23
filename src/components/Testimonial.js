import React from 'react'
import birdIllustration from "../assets/images/illustration/bird-illustration.png"
import testiAvatar1 from "../assets/images/touriest/testi-avater.webp"
import testiAvatar2 from "../assets/images/touriest/testi-avater-2.webp"

import birdIllustration1 from "../assets/images/illustration/bird-illustration.png"


import partner1 from "../assets/images/pratners/p1.png"
import partner2 from "../assets/images/pratners/p2.png"
import partner3 from "../assets/images/pratners/p3.png"



import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/autoplay'


import SwiperCore from 'swiper'
import { useTranslation } from "react-i18next"
SwiperCore.use([Autoplay])

const Logoslider = () => {
    const { i18n, t } = useTranslation(["home"])

    return (
        <div id="testimonial">

            <div class="testimonial_style__one z-1 lg:pt-30 pt-24 relative">
                <div class="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
                    <img src={birdIllustration1} alt="leaf" />
                </div>
                <div class="container relative">
                    <div class="text-center lg:pb-[60px] pb-[40px]">
                        <h5 class="section-sub-title-v1">{t("testi_sub_h")}</h5>
                        <h2 class="section-title-v1">{t("testi_h")}</h2>
                    </div>

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        speed={800}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>

                            <div class="max-w-[970px]  text-center mx-auto">
                                <p class="font-serif text-2md lg:text-[25px] text-dark-2 leading-1.8 italic">
                                    {t("testi_text_1")}
                                </p>
                                <h5 class="lg:text-[25px] text-2md font-semibold text-dark-1 mt-base">{t("testi_name_1")}</h5>
                                <div class="relative inline-block mt-6">
                                    <div
                                        class="h-[38px] w-[38px] bg-primary-1 rounded-full border-2 border-white absolute top-0 left-0 -translate-x-1/3 text-white flex justify-center items-center">
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.95 0.184651C4.90078 0.240901 3.97266 1.40457 2.88633 2.77215C1.32187 4.74793 0.914062 5.28582 0.914062 5.36317C0.914062 5.44754 0.966797 5.50731 1.21992 5.71824C1.39219 5.85535 1.75078 6.19637 2.02148 6.46707C3.11836 7.5745 3.76172 8.65731 3.98672 9.76473C4.06055 10.1163 4.06055 10.8089 3.98672 11.2378C3.76875 12.5245 2.91445 14.0679 1.71563 15.3475C1.51523 15.5585 1.44141 15.6639 1.44141 15.7307C1.44141 15.9593 1.60313 15.9628 2.12344 15.7448C3.6 15.1225 5.08359 14.1347 6.16992 13.0448C7.57617 11.6386 8.39883 10.0987 8.73984 8.24598C8.83828 7.72215 8.83125 6.72723 8.72578 6.21395C8.32149 4.21707 7.2 2.16395 5.58984 0.465901C5.18906 0.0440264 5.11172 0.0123854 4.95 0.184651Z"
                                                fill="currentColor" />
                                            <path
                                                d="M13.2117 0.184724C13.1625 0.240973 12.2344 1.40464 11.148 2.77222C9.58359 4.748 9.17578 5.2859 9.17578 5.36324C9.17578 5.44761 9.22852 5.50738 9.48516 5.71832C9.65391 5.85543 10.0125 6.19644 10.2832 6.46714C11.3801 7.57457 12.0234 8.65738 12.2484 9.7648C12.3223 10.1164 12.3223 10.8089 12.2484 11.2378C12.1816 11.6211 12.0023 12.2117 11.8125 12.6476C11.4434 13.4984 10.698 14.5882 9.93164 15.3968C9.76992 15.5691 9.70313 15.6675 9.70313 15.7343C9.70313 15.9593 9.86484 15.9628 10.3852 15.7449C12.2098 14.9785 14.0449 13.6355 15.1594 12.2539C15.968 11.2519 16.5832 10.032 16.8715 8.86129C17.0297 8.22144 17.0648 7.92965 17.0648 7.2441C17.0648 6.64996 17.0578 6.52691 16.9699 6.13316C16.5445 4.14332 15.4441 2.14293 13.8516 0.465974C13.4508 0.0440989 13.3734 0.0124578 13.2117 0.184724Z"
                                                fill="currentColor" />
                                        </svg>

                                    </div>
                                    <img src={testiAvatar1} alt="revierer "
                                        class="h-20 w-20 object-cover rounded-full" />
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>

                            <div class="max-w-[970px]  text-center mx-auto">
                                <p class="font-serif text-2md lg:text-[25px] text-dark-2 leading-1.8 italic">
                                    {t("testi_text_2")}
                                </p>
                                <h5 class="lg:text-[25px] text-2md font-semibold text-dark-1 mt-base">{t("testi_name_2")}</h5>
                                <div class="relative inline-block mt-6">
                                    <div
                                        class="h-[38px] w-[38px] bg-primary-1 rounded-full border-2 border-white absolute top-0 left-0 -translate-x-1/3 text-white flex justify-center items-center">
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.95 0.184651C4.90078 0.240901 3.97266 1.40457 2.88633 2.77215C1.32187 4.74793 0.914062 5.28582 0.914062 5.36317C0.914062 5.44754 0.966797 5.50731 1.21992 5.71824C1.39219 5.85535 1.75078 6.19637 2.02148 6.46707C3.11836 7.5745 3.76172 8.65731 3.98672 9.76473C4.06055 10.1163 4.06055 10.8089 3.98672 11.2378C3.76875 12.5245 2.91445 14.0679 1.71563 15.3475C1.51523 15.5585 1.44141 15.6639 1.44141 15.7307C1.44141 15.9593 1.60313 15.9628 2.12344 15.7448C3.6 15.1225 5.08359 14.1347 6.16992 13.0448C7.57617 11.6386 8.39883 10.0987 8.73984 8.24598C8.83828 7.72215 8.83125 6.72723 8.72578 6.21395C8.32149 4.21707 7.2 2.16395 5.58984 0.465901C5.18906 0.0440264 5.11172 0.0123854 4.95 0.184651Z"
                                                fill="currentColor" />
                                            <path
                                                d="M13.2117 0.184724C13.1625 0.240973 12.2344 1.40464 11.148 2.77222C9.58359 4.748 9.17578 5.2859 9.17578 5.36324C9.17578 5.44761 9.22852 5.50738 9.48516 5.71832C9.65391 5.85543 10.0125 6.19644 10.2832 6.46714C11.3801 7.57457 12.0234 8.65738 12.2484 9.7648C12.3223 10.1164 12.3223 10.8089 12.2484 11.2378C12.1816 11.6211 12.0023 12.2117 11.8125 12.6476C11.4434 13.4984 10.698 14.5882 9.93164 15.3968C9.76992 15.5691 9.70313 15.6675 9.70313 15.7343C9.70313 15.9593 9.86484 15.9628 10.3852 15.7449C12.2098 14.9785 14.0449 13.6355 15.1594 12.2539C15.968 11.2519 16.5832 10.032 16.8715 8.86129C17.0297 8.22144 17.0648 7.92965 17.0648 7.2441C17.0648 6.64996 17.0578 6.52691 16.9699 6.13316C16.5445 4.14332 15.4441 2.14293 13.8516 0.465974C13.4508 0.0440989 13.3734 0.0124578 13.2117 0.184724Z"
                                                fill="currentColor" />
                                        </svg>

                                    </div>
                                    <img src={testiAvatar2} alt="revierer"
                                        class="h-20 w-20 object-cover rounded-full" />
                                </div>
                            </div>

                        </SwiperSlide>



                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Logoslider
