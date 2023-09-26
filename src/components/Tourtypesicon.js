import React from 'react'
import tcIllustration from "../assets/images/illustration/leaf-illustration.png"
import imgT1 from "../assets/images/icons/t1-1.svg"
import imgT2 from "../assets/images/icons/t1-2.svg"
import imgT3 from "../assets/images/icons/t1-3.svg"
import imgT4 from "../assets/images/icons/t1-4.svg"
import { useTranslation } from "react-i18next"



import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/autoplay'


import SwiperCore from 'swiper'
SwiperCore.use([Autoplay])



const Tourtypesicon = () => {
    const { i18n, t } = useTranslation(["home"])

    return (
        <div id="categories">
            <div className="tour_type_style__one lg:pt-30 pt-24 relative z-1">
                <div className="absolute top-[10%] left-[2%] max-w-[9%] z-minus lg:inline-block hidden"              >
                    <img
                        src={tcIllustration}
                        alt="leaf"
                    />
                </div>

                <div className="container">
                    <div className="text-center lg:pb-[60px] pb-[40px]">
                        <h5 className="section-sub-title-v1">{t("travel_category_sub_h")}</h5>
                        <h2 className="section-title-v1">{t("travel_category_h")}</h2>
                    </div>

                    {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-base"> */}


                    <Swiper

                        breakpoints={{
                            200: {
                                // width: 576,
                                slidesPerView: 1,
                            },
                            768: {
                                // width: 768,
                                slidesPerView: 2,
                            },
                            1200: {
                                // width: 768,
                                slidesPerView: 4,
                            },
                        }}

                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={true}
                        speed={2000}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}

                    >


                        <SwiperSlide>
                            <div className="sm:text-left text-center wow fadeInUp">
                                <img
                                    src={imgT4}
                                    alt="icon"
                                    className="lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto"
                                />
                                <h4 className="card-title-alpha lg:mt-6 mt-4">
                                    <a href="package-list.html">{t("t_cat_h_1")}</a>
                                </h4>
                                <h5 className="font-sans font-medium text-md text-primary-1 mt-1">
                                    {t("t_cat_sub_h_1")}
                                </h5>
                                <p className="regular-text-v1 !text-[17px] mt-1 !leading-1.6">
                                    {t("t_cat_p_1")}
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="sm:text-left text-center wow fadeInUp">
                                <img
                                    src={imgT4}
                                    alt="icon"
                                    className="lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto"
                                />
                                <h4 className="card-title-alpha lg:mt-6 mt-4">
                                    <a href="package-list.html">{t("t_cat_h_2")}</a>
                                </h4>
                                <h5 className="font-sans font-medium text-md text-primary-1 mt-1">
                                    {t("t_cat_sub_h_2")}
                                </h5>
                                <p className="regular-text-v1 !text-[17px] mt-1 !leading-1.6">
                                    {t("t_cat_p_2")}
                                </p>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="sm:text-left text-center wow fadeInUp">
                                <img
                                    src={imgT4}
                                    alt="icon"
                                    className="lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto"
                                />
                                <h4 className="card-title-alpha lg:mt-6 mt-4">
                                    <a href="package-list.html">{t("t_cat_h_3")}</a>
                                </h4>
                                <h5 className="font-sans font-medium text-md text-primary-1 mt-1">
                                    {t("t_cat_sub_h_3")}
                                </h5>
                                <p className="regular-text-v1 !text-[17px] mt-1 !leading-1.6">
                                    {t("t_cat_p_3")}
                                </p>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="sm:text-left text-center wow fadeInUp">
                                <img
                                    src={imgT4}
                                    alt="icon"
                                    className="lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto"
                                />
                                <h4 className="card-title-alpha lg:mt-6 mt-4">
                                    <a href="package-list.html">{t("t_cat_h_4")}</a>
                                </h4>
                                <h5 className="font-sans font-medium text-md text-primary-1 mt-1">
                                    {t("t_cat_sub_h_4")}
                                </h5>
                                <p className="regular-text-v1 !text-[17px] mt-1 !leading-1.6">
                                    {t("t_cat_p_4")}
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="sm:text-left text-center wow fadeInUp">
                                <img
                                    src={imgT4}
                                    alt="icon"
                                    className="lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto"
                                />
                                <h4 className="card-title-alpha lg:mt-6 mt-4">
                                    <a href="package-list.html">{t("t_cat_h_5")}</a>
                                </h4>
                                <h5 className="font-sans font-medium text-md text-primary-1 mt-1">
                                    {t("t_cat_sub_h_5")}
                                </h5>
                                <p className="regular-text-v1 !text-[17px] mt-1 !leading-1.6">
                                    {t("t_cat_p_5")}
                                </p>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="sm:text-left text-center wow fadeInUp">
                                <img
                                    src={imgT4}
                                    alt="icon"
                                    className="lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto"
                                />
                                <h4 className="card-title-alpha lg:mt-6 mt-4">
                                    <a href="package-list.html">{t("t_cat_h_6")}</a>
                                </h4>
                                <h5 className="font-sans font-medium text-md text-primary-1 mt-1">
                                    {t("t_cat_sub_h_6")}
                                </h5>
                                <p className="regular-text-v1 !text-[17px] mt-1 !leading-1.6">
                                    {t("t_cat_p_6")}
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="sm:text-left text-center wow fadeInUp">
                                <img
                                    src={imgT4}
                                    alt="icon"
                                    className="lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto"
                                />
                                <h4 className="card-title-alpha lg:mt-6 mt-4">
                                    <a href="package-list.html">{t("t_cat_h_7")}</a>
                                </h4>
                                <h5 className="font-sans font-medium text-md text-primary-1 mt-1">
                                    {t("t_cat_sub_h_7")}
                                </h5>
                                <p className="regular-text-v1 !text-[17px] mt-1 !leading-1.6">
                                    {t("t_cat_p_7")}
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="sm:text-left text-center wow fadeInUp">
                                <img
                                    src={imgT4}
                                    alt="icon"
                                    className="lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto"
                                />
                                <h4 className="card-title-alpha lg:mt-6 mt-4">
                                    <a href="package-list.html">{t("t_cat_h_8")}</a>
                                </h4>
                                <h5 className="font-sans font-medium text-md text-primary-1 mt-1">
                                    {t("t_cat_sub_h_8")}
                                </h5>
                                <p className="regular-text-v1 !text-[17px] mt-1 !leading-1.6">
                                    {t("t_cat_p_8")}
                                </p>
                            </div>
                        </SwiperSlide>

                    </Swiper>



                    {/* </div>   */}
                </div>
            </div>
        </div>
    )
}

export default Tourtypesicon
